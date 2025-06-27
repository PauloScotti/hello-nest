/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {

    calcularImc(peso: number, altura: number) {
        return (peso / (altura * altura)).toFixed(2);
    }

    classificarImc(imc: number) {
        if (imc < 18.5) {
            return "Baixo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }

    calcularImcCompleto(peso: number, altura: number) {
        const imc = Number(this.calcularImc(peso, altura));
        const classificacao = this.classificarImc(imc);

        return {
            peso,
            altura,
            imc,
            classificacao,
        };
    }

    calculadora(numero1: number, numero2: number, operacao: string) {
        let resultado = 0;
        let message = "";

        switch (operacao) {
            case (operacao = "+"):
                resultado = numero1 + numero2;
                break;
            case (operacao = "-"):
                resultado = numero1 - numero2;
                break;
            case (operacao = "/"):
                resultado = numero1 / numero2;
                break;
            case (operacao = "*"):
                resultado = numero1 * numero2;
                break;
            default:
                message = "Operação não suportada";
                break;
        }

        return resultado ? { resultado } : { message };
    }
}
