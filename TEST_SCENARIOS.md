# Test Scenarios for BMI Calculator

## TS01 - Underweight BMI
| Test Case ID | Test Case Description | Test Data                                         | Expected result                                                      | Status                  |
| ------------ | --------------------- | ------------------------------------------------- | -------------------------------------------------------------------- | ----------------------- |
| TC01         | BMI below 18.4kg/m²   | Name = Test, Height = 1.70m and Weight = 49.13kg  | BMI=17kg/m² and should display the message "below recommended BMI"   | :white_check_mark: Pass |
| TC02         | BMI exactly 18.4kg/m² | Name = Test, Height = 1.70m and Weight = 53.176kg | BMI=18.4kg/m² and should display the message "below recommended BMI" | :white_check_mark: Pass |

## TS02 - Excellent BMI
| Test Case ID | Test Case  Description               | Test Data                                         | Expected result                                              | Status                  |
| ------------ | ------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ | ----------------------- |
| TC01         | BMI exactly 18.5 kg/m²               | Name = Test, Height = 1.70m and Weight = 53.465kg | BMI=18.5kg/m² and should display the message "Excellent BMI" | :white_check_mark: Pass |
| TC02         | BMI between 18.5kg/m² and 24.9 kg/m² | Name = Test, Height = 1.70m and Weight = 57.8kg   | BMI=20kg/m² and should display the message "Excellent BMI"   | :white_check_mark: Pass |
| TC03         | BMI exactly 24.9 kg/m²               | Name = Test, Height = 1.70m and Weight = 71.96kg  | BMI=24.9kg/m² and should display the message "Excellent BMI" | :white_check_mark: Pass |

## TS03 - Overweight BMI
| Test Case ID | Test Case  Description            | Test Data                                        | Expected result                                           | Status                  |
| ------------ | --------------------------------- | ------------------------------------------------ | --------------------------------------------------------- | ----------------------- |
| TC01         | BMI exactly 25kg/m²               | Name = Test, Height = 1.70m and Weight = 72.25kg | BMI=25kg/m² and should display the message "Overweight"   | :white_check_mark: Pass |
| TC02         | BMI between 25kg/m² and 29.9kg/m² | Name = Test, Height = 1.70m and Weight = 75.14kg | BMI=26kg/m² and should display the message "Overweight"   | :white_check_mark: Pass |
| TC03         | BMI exactly 29.9 kg/m²            | Name = Test, Height = 1.70m and Weight = 86.41kg | BMI=29.9kg/m² and should display the message "Overweight" | :white_check_mark: Pass |

## TS04 - Obesity BMI
 | Test Case ID | Test Case Description    | Test Data                                        | Expected result                                      | Status                  |
 | ------------ | ------------------------ | ------------------------------------------------ | ---------------------------------------------------- | ----------------------- |
 | TC01         | BMI exactly 30 kg/m²     | Name = Test, Height = 1.70m and Weight = 86.7kg  | BMI=30kg/m² and should display the message "Obesity" | :white_check_mark: Pass |
 | TC02         | BMI greater than 30kg/m² | Name = Test, Height = 1.70m and Weight = 144.5kg | BMI=50kg/m² and should display the message "Obesity" | :white_check_mark: Pass |

## TS05 - Form validations
| Test Case ID | Test Case Description                     | Test Data                                    | Expected result                                                     | Status                  |
| ------------ | ----------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------- | ----------------------- |
| TC01         | Enter weight with comma                   | Name = Test, Height = 1.70 and Weight = 52,2 | BMI is calculated correctly                                         | :white_check_mark: Pass |
| TC02         | Enter weight with non-numeric characters  | Name = Test, Height = 1.70 and Weight = 1abc | The calculator should display an alert and ask for the weight again | :white_check_mark: Pass |
| TC03         | Enter weight greater than 300             | Name = Test, Height = 1.70 and Weight = 1000 | The calculator should display an alert and ask for the weight again | :white_check_mark: Pass |
| TC04         | Enter weight less than 10                 | Name = Test, Height = 1.70 and Weight = 9    | The calculator should display an alert and ask for the weight again | :white_check_mark: Pass |
| TC05         | Enter a negative value for weight         | Name = Test, Height = 1.70 and Weight = -60  | The calculator should display an alert and ask for the weight again | :white_check_mark: Pass |
| TC06         | Enter height with comma                   | Name = Test, Height = 1,70 and Weight = 52   | BMI is calculated correctly                                         | :white_check_mark: Pass |
| TC07         | Enter height greater or equal to 3 meters | Name = Test, Height = 3    and Weight = 52   | The calculator should display an alert and ask for the height again | :white_check_mark: Pass |
| TC08         | Enter height less than 1                  | Name = Test, Height = 0.9  and Weight = 52   | The calculator should display an alert and ask for the height again | :white_check_mark: Pass |
| TC09         | Enter height with non-numeric characters  | Name = Test, Height = 1abc and Weight = 52   | The calculator should display an alert and ask for the height again | :white_check_mark: Pass |
| TC10         | Enter a negative value for height         | Name = Test, Height = -60  and Weight = 52   | The calculator should display an alert and ask for the height again | :white_check_mark: Pass |
| TC11         | Blank fields                              | Blank field                                  | The calculator should display an alert and ask for the field again  | :white_check_mark: Pass |

<sub>
Test Techniques:

Equivalence partitioning (EP) 
Boundary Value Analysis (BVA) 
</sub>