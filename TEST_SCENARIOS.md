# Test Scenarios for BMI Calculator

## TS01 - Underweight BMI
| Test Case ID | Test Case Description | Test Data                            | Expected result                                                      | Status                  |
| ------------ | --------------------- | ------------------------------------ | -------------------------------------------------------------------- | ----------------------- |
| TC01         | BMI below 18.4kg/m²   | Height = 1.70m and Weight = 49.13kg  | BMI=17kg/m² and should display the message "below recommended BMI"   | :white_check_mark: Pass |
| TC02         | BMI exactly 18.4kg/m² | Height = 1.70m and Weight = 53.176kg | BMI=18.4kg/m² and should display the message "below recommended BMI" | :white_check_mark: Pass |

## TS02 - Excellent BMI
| Test Case ID | Test Case  Description               | Test Data                            | Expected result                                              | Status                  |
| ------------ | ------------------------------------ | ------------------------------------ | ------------------------------------------------------------ | ----------------------- |
| TC01         | BMI exactly 18.5 kg/m²               | Height = 1.70m and Weight = 53.465kg | BMI=18.5kg/m² and should display the message "Excellent BMI" | :white_check_mark: Pass |
| TC02         | BMI between 18.5kg/m² and 24.9 kg/m² | Height= 1.70m and Weight = 57.8kg    | BMI=20kg/m² and should display the message "Excellent BMI"   | :white_check_mark: Pass |
| TC03         | BMI exactly 24.9 kg/m²               | Height = 1.70m and Weight = 71.961kg | BMI=24.9kg/m² and should display the message "Excellent BMI" | :white_check_mark: Pass |

## TS03 - Overweight BMI
| Test Case ID | Test Case  Description            | Test Data                            | Expected result                                           | Status                  |
| ------------ | --------------------------------- | ------------------------------------ | --------------------------------------------------------- | ----------------------- |
| TC01         | BMI exactly 25kg/m²               | Height = 1.70m and Weight = 72.25kg  | BMI=25kg/m² and should display the message "Overweight"   | :white_check_mark: Pass |
| TC02         | BMI between 25kg/m² and 29.9kg/m² | Height = 1.70m and Weight = 75.14kg  | BMI=26kg/m² and should display the message "Overweight"   | :white_check_mark: Pass |
| TC03         | BMI exactly 29.9 kg/m²            | Height = 1.70m and Weight = 86.411kg | BMI=29.9kg/m² and should display the message "Overweight" | :white_check_mark: Pass |

## TS04 - Obesity BMI
 | Test Case ID | Test Case Description    | Test Data                           | Expected result                                      | Status                  |
 | ------------ | ------------------------ | ----------------------------------- | ---------------------------------------------------- | ----------------------- |
 | TC01         | BMI exactly 30 kg/m²     | Height = 1.70m and Weight = 86.7kg  | BMI=30kg/m² and should display the message "Obesity" | :white_check_mark: Pass |
 | TC02         | BMI greater than 30kg/m² | Height = 1.70m and Weight = 144.5kg | BMI=50kg/m² and should display the message "Obesity" | :white_check_mark: Pass |

## TS05 - Validações do formulário
| Test Case ID | Test Case Description                     | Test Data                                  | Expected result                                                     | Status   |
| ------------ | ----------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------- | -------- |
| TC01         | Enter weight with comma                   | Nome= Test, Height= 1.70 and Weight = 52,2 | The calculator should display an alert and ask for the weight again | :x: Fail |
| TC02         | Enter weight with non-numeric characters  | Nome= Test, Height= 1.70  Weight = 1abc    | The calculator should display an alert and ask for the weight again | :x: Fail |
| TC03         | Enter weight greater than 300             | Nome= Test, Height= 1.70  Weight = 1000    | The calculator should display an alert and ask for the weight again | :x: Fail |
| TC04         | Enter weight less than 10                 | Only Weight = 9                            | The calculator should display an alert and ask for the weight again | :x: Fail |
| TC05         | Enter a negative value for weight         | Only Weight = -60                          | The calculator should display an alert and ask for the weight again | :x: Fail |
| TC06         | Enter height with comma                   | Only Height = 1,70                         | The calculator should display an alert and ask for the height again | :x: Fail |
| TC07         | Enter height greater or equal to 3 meters | Only Height = 3                            | The calculator should display an alert and ask for the height again | :x: Fail |
| TC08         | Enter height less than 1                  | Only Height = 0.9                          | The calculator should display an alert and ask for the height again | :x: Fail |
| TC09         | Enter height with non-numeric characters  | Only Height = 1abc                         | The calculator should display an alert and ask for the height again | :x: Fail |
| TC10         | Enter a negative value for height         | Only Height = -60                          | The calculator should display an alert and ask for the height again | :x: Fail |
| TC11         | Blank fields                              | Blank field                                | The calculator should display an alert and ask for the field again  | :x: Fail |

<sub>
Test Techniques:

Equivalence partitioning (EP) 
Boundary Value Analysis (BVA) 
</sub>
