# Test Scenarios para Calculadora de IMC

## 01 - IMC Abaixo do Recomendado
| TC ID | Description               | Test Data                     | Expected result                                                   |
| ----- | ------------------------- | ----------------------------- | ----------------------------------------------------------------- |
| 1     | IMC abaixo de 18.4 kg/m²  | Altura = 1.70 e Peso = 49.13  | IMC=17kg/m² e deve exibir mensagem de IMC abaixo do recomendado   |
| 2     | IMC exatamente 18.4 kg/m² | Altura = 1.70 e Peso = 53.176 | IMC=18.4kg/m² e deve exibir mensagem de IMC abaixo do recomendado |

## 02 - IMC Excelente
| TC ID | Description                      | Test Data                     | Expected result                                       |
| ----- | -------------------------------- | ----------------------------- | ----------------------------------------------------- |
| 1     | IMC exatamente 18.5 kg/m²        | Altura = 1.70 e Peso = 53.465 | IMC=18.5kg/m² e deve exibir mensagem de IMC excelente |
| 2     | IMC entre 18.5kg/m² e 24.9 kg/m² | Altura = 1.70 e Peso = 57.8   | IMC=20kg/m² e deve exibir mensagem de IMC excelente   |
| 3     | IMC exatamente 24.9 kg/m²        | Altura = 1.70 e Peso = 71.961 | IMC=24.9kg/m² e deve exibir mensagem de IMC excelente |

## 03 - IMC Sobrepeso
| TC ID | Description                     | Test Data                     | Expected result                                       |
| ----- | ------------------------------- | ----------------------------- | ----------------------------------------------------- |
| 1     | IMC exatamente 25 kg/m²         | Altura = 1.70 e Peso = 72.25  | IMC=25kg/m² e deve exibir mensagem de IMC Sobrepeso   |
| 2     | IMC entre 25 kg/m² e 29.9 kg/m² | Altura = 1.70 e Peso = 75.14  | IMC=26kg/m² e deve exibir mensagem de IMC Sobrepeso   |
| 3     | IMC exatamente 29.9 kg/m²       | Altura = 1.70 e Peso = 86.411 | IMC=29.9kg/m² e deve exibir mensagem de IMC Sobrepeso |

## 04 - IMC Obesidade
 | TC ID | Description             | Test Data                    | Expected result                                     |
 | ----- | ----------------------- | ---------------------------- | --------------------------------------------------- |
 | 1     | IMC exatamente 30 kg/m² | Altura = 1.70 e Peso = 86.7  | IMC=30kg/m² e deve exibir mensagem de IMC Obesidade |
 | 2     | IMC acima de 30kg/m²    | Altura = 1.70 e Peso = 144.5 | IMC=50kg/m² e deve exibir mensagem de IMC Obesidade |

## 05 - Validações do formulário
| TC ID | Description                        | Test Data             | Expected result                                                |
| ----- | ---------------------------------- | --------------------- | -------------------------------------------------------------- |
| 1     | Peso com vírgula                   | Inserir peso = 52,2   | A calculadora deve exibir um alerta e pedir o peso novamente   |
| 2     | Peso com caractere não númericos   | Inserir peso = 1abc   | A calculadora deve exibir um alerta e pedir o peso novamente   |
| 3     | Peso acima de 300                  | Inserir peso = 300    | A calculadora deve exibir um alerta e pedir o peso novamente   |
| 4     | Peso menor que 10                  | Inserir peso = 10     | A calculadora deve exibir um alerta e pedir o peso novamente   |
| 5     | Peso negativo                      | Inserir peso = -60    | A calculadora deve exibir um alerta e pedir o peso novamente   |
| 6     | Altura com vírgula                 | Inserir altura = 1,70 | A calculadora deve exibir um alerta e pedir a altura novamente |
| 7     | Altura maior que 3 metros          | Inserir altura = 3    | A calculadora deve exibir um alerta e pedir a altura novamente |
| 8     | Altura menor que 1 metro           | Inserir altura = 1    | A calculadora deve exibir um alerta e pedir a altura novamente |
| 9     | Altura com caractere não númericos | Inserir altura = 1abc | A calculadora deve exibir um alerta e pedir a altura novamente |



