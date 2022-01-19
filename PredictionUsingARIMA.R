#1)Log residuals stock forecasting method

library(quantmod)
library(tseries)
library(timeSeries)
library(forecast)
library(xts)

getSymbols('SPY',from='2014-01-01',to='2019-09-09')
class(SPY)

#Want the day's close price for each trading day (4th column) 1)open 2)High 3)Low 4)Close 5)Volume 6)Adjusted
SPY_Close_Prices=SPY[,4]

#Plot the data - look at the last 26 years of SPY close of day price
par(mfrow=c(1,1))  #<-- Look for meaning
plot(SPY_Close_Prices)
class(SPY_Close_Prices)

#Plot the data and get the initial auto arima pdq values
par(mfrow=c(1,2))
acf(SPY_Close_Prices,main='ACF for Differential Series')
pacf(SPY_Close_Prices,main='PACF for Differential Series')
auto.arima(SPY_Close_Prices,seasonal = FALSE) #pdq=3,1,4
#from plots of ACF, PACF above we get 1,1,1 for pdq

#2) Log residuals to remove non-stationary properties:
#Compute the log returns for the stock - makes the data more stable
logs=diff(log(SPY_Close_Prices),lag=1)
logs=logs[!is.na(logs)]

#Plot log returns for more accurate forecasting - eliminates areas which are non-stationary
par(mfrow=c(1,1))
plot(logs,type='l', main='log returns plot')

#ADF test for p-value
print(adf.test(logs)) #p-value(P)<0.01

auto.arima(logs,seasonal=FALSE)  #AIC/BIC = -9598/9577
str(logs)  #is xts object

#Split the dataset in two parts - 80/20 training and testing datasets
sample_size=floor(0.80*nrow(logs))
set.seed(109)  #random seed number that when reused makes it reproducible
train_indices<- sample(seq_len(nrow(logs)), size=sample_size)

train<-logs[train_indices,]
test<-logs[-train_indices,]

par(mfrow=c(1,2))  #Coordinates to Build graph visually 
Acf(train, main='ACF for Differenced Series')
Pacf(train, main='PACF for Differenced Series')
auto.arima(train, seasonal=FALSE) #pdq = 1,0,2 AIC/BIC= 7680/7660
#p is determined from PACF, while q is determined from ACF
#from plots of ACF and PACF above we get pdq= 7,0,19 for pdq


#3) Plot models, get accuracy and draw conclusions:
#Look at residuals for the autoarima and custom arima models based on the above determined pdq values
fit1<-auto.arima(train, seasonal=FALSE) #autoarima (1,0,2)
tsdisplay(residuals(fit1), lag.max=40, main='(1,0,2) Modal residuals')

fit2<-arima(train, order=c(7,0,9)) #custom arima (7,0,9)
tsdisplay(residuals(fit2), lag.max=40, main='(7,0,9) Modal residuals')

#Original data without logs of returns (lag at 31)
fit3<-auto.arima(SPY_Close_Prices, seasonal=FALSE) #autoarima (3,1,4)
tsdisplay(residuals(fit3), lag.max=40, main='Original Non-log return Modal residuals')

#Custom arima from fit2 above applied to original dataset
fit4<-arima(SPY_Close_Prices, order=c(7,0,9)) #custom arima (7,0,9)
tsdisplay(residuals(fit4), lag.max=40, main='(7,0,9) return Modal residuals on original dataset')
tsdisplay(residuals(fit1), lag.max=40, main='(1,0,2) Modal residuals')

#Plots of all arima models
par(mfrow=c(2,2))

#autoarima (2,0,2)
Period<-100
fcast1<-forecast(fit1,h=Period)
plot(fcast1)

#Custom arima (3,0,3)
fcast2<-forecast(fit2,h=Period)
plot(fcast2)

#Original non log returns data
fcast3<-forecast(fit3,h=Period)
plot(fcast3)

#Custom arima applied to original non log returns, dataset
fcast4<-forecast(fit4,h=Period)
plot(fcast4)

#Look closely at autoarima on original dataset
par(mfrow=c(1,2))
plot(fcast3)
plot(fcast4)

accuracy(fcast1) #Slight upward followed by stationary trend
accuracy(fcast2) #Slight upward followed by stationary trend
accuracy(fcast3) #99.42% accuracy by MAPE mean average percent error
accuracy(fcast4) #99.41% accuracy

#Conclusion
#We have a high accuracy prediction for between a 30% increase (autoarima on original dataset)
#and a 0% increase on the custom arima. Being that the custom arima has smaller 95% and 80% intervals
#Hence, there is a very strong projection of a 11% gain over the next 100 days in the SPY stock