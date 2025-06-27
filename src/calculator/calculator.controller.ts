/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) { }

  @Post("/imc")
  calcularImc(@Body() body: { peso: number, altura: number }) {
    return this.calculatorService.calcularImcCompleto(body.peso, body.altura)
  }

  @Post()
  calculadora(@Body() body: { numero1: number, numero2: number, operacao: string }) {
    return this.calculatorService.calculadora(body.numero1, body.numero2, body.operacao)
  }
}
