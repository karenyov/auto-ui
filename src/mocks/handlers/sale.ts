import { http, HttpResponse } from 'msw';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const salessHandlers = [
  http.get(`${API_BASE_URL}/sale`, () => {
      const data = `{
        "_embedded": {
            "purchaseResponses": [
                {
                    "idCompra": 3,
                    "dataCompra": "2024-12-20",
                    "valorCompra": 210000.0,
                    "metodoPagamento": "á vista",
                    "descricao": "dado um veiculo de como parte do pagamento no valor de 50 mil o restante pago no pix",
                    "dataCriacao": "2024-12-20",
                    "cliente": {
                        "clienteId": 4,
                        "nome": "george piter",
                        "cpf": "987.654.321-00",
                        "telefone": "11987651234",
                        "email": "carlos.souza@example.com",
                        "rua": "Avenida Central",
                        "numero": "456",
                        "bairro": "Centro",
                        "cidade": "Rio de Janeiro",
                        "estado": "RJ",
                        "cep": "12345-678"
                    },
                    "veiculo": {
                        "idVeiculo": 7,
                        "placa": "MNO9876",
                        "marca": "MERCEDES",
                        "modelo": "C-Class",
                        "anoFabricacao": 2020,
                        "anoModelo": 2021,
                        "cor": "Prata",
                        "precoVenda": 220000.00,
                        "precoCompra": 210000.00,
                        "tabelaFipe": 215000.00,
                        "quilometragem": 12000,
                        "categoria": "Sedan",
                        "nomeFornecedor": "MERCEDES BENZ BRASIL",
                        "telefoneFornecedor": "5566778899",
                        "opcionais": "Ar condicionado, Bancos em couro, Câmbio automático",
                        "valorIpva": 4000.00,
                        "vencimentoIpva": "2024-08-10",
                        "valorDevido": 1500.00,
                        "valorParcela": 3500.00,
                        "financiado": true,
                        "observacao": "Veículo com 36 parcelas restantes",
                        "dateVenda": "2024-12-20"
                    }
                },
                {
                    "idCompra": 4,
                    "dataCompra": "2024-12-20",
                    "valorCompra": 210000.0,
                    "metodoPagamento": "á vista",
                    "descricao": "dado um veiculo de como parte do pagamento no valor de 50 mil o restante pago no pix",
                    "dataCriacao": "2024-12-20",
                    "cliente": {
                        "clienteId": 5,
                        "nome": "Ana Costa",
                        "cpf": "123.456.789-01",
                        "telefone": "21987654321",
                        "email": "ana.costa@example.com",
                        "rua": "Rua das Flores",
                        "numero": "789",
                        "bairro": "Jardim das Palmeiras",
                        "cidade": "São Paulo",
                        "estado": "SP",
                        "cep": "98765-432"
                    },
                    "veiculo": {
                        "idVeiculo": 1,
                        "placa": "ABC1234",
                        "marca": "HONDA",
                        "modelo": "HRV",
                        "anoFabricacao": 2021,
                        "anoModelo": 2021,
                        "cor": "Vermelho",
                        "precoVenda": 85000.00,
                        "precoCompra": 78000.00,
                        "tabelaFipe": 82000.00,
                        "quilometragem": 12000,
                        "categoria": "Sedan",
                        "nomeFornecedor": "MARCIO VEICULOS LTDA",
                        "telefoneFornecedor": "123456789",
                        "opcionais": "COMPLETO",
                        "valorIpva": 2000.00,
                        "vencimentoIpva": "2024-10-15",
                        "valorDevido": 500.00,
                        "valorParcela": 1500.00,
                        "financiado": true,
                        "observacao": "Veículo faltando 24 parcelas para quitar",
                        "dateVenda": "2024-12-20"
                    }
                },
                {
                    "idCompra": 5,
                    "dataCompra": "2024-12-20",
                    "valorCompra": 220000.0,
                    "metodoPagamento": "á vista",
                    "descricao": "dado um veiculo de como parte do pagamento no valor de 60 mil o restante pago no pix",
                    "dataCriacao": "2024-12-20",
                    "cliente": {
                        "clienteId": 6,
                        "nome": "Roberto Lima",
                        "cpf": "456.789.012-34",
                        "telefone": "31987654321",
                        "email": "roberto.lima@example.com",
                        "rua": "Avenida Brasil",
                        "numero": "123",
                        "bairro": "Centro Histórico",
                        "cidade": "Belo Horizonte",
                        "estado": "MG",
                        "cep": "30123-456"
                    },
                    "veiculo": {
                        "idVeiculo": 2,
                        "placa": "XYZ5678",
                        "marca": "TOYOTA",
                        "modelo": "Corolla",
                        "anoFabricacao": 2020,
                        "anoModelo": 2021,
                        "cor": "Azul",
                        "precoVenda": 95000.00,
                        "precoCompra": 89000.00,
                        "tabelaFipe": 92000.00,
                        "quilometragem": 15000,
                        "categoria": "Sedan",
                        "nomeFornecedor": "AUTO VILLAGE",
                        "telefoneFornecedor": "987654321",
                        "opcionais": "Ar condicionado, Direção hidráulica, Vidros elétricos",
                        "valorIpva": 2500.00,
                        "vencimentoIpva": "2024-11-20",
                        "valorDevido": 1000.00,
                        "valorParcela": 1800.00,
                        "financiado": true,
                        "observacao": "Veículo em bom estado, faltando 18 parcelas para quitar",
                        "dateVenda": "2024-12-20"
                    }
                },
                {
                    "idCompra": 6,
                    "dataCompra": "2024-12-20",
                    "valorCompra": 230000.0,
                    "metodoPagamento": "parcelado",
                    "descricao": "pagamento parcelado com entrada de 50 mil e saldo financiado",
                    "dataCriacao": "2024-12-20",
                    "cliente": {
                        "clienteId": 7,
                        "nome": "Luciana Pereira",
                        "cpf": "321.654.987-65",
                        "telefone": "47987654321",
                        "email": "luciana.pereira@example.com",
                        "rua": "Rua Nova Esperança",
                        "numero": "321",
                        "bairro": "Vila Nova",
                        "cidade": "Florianópolis",
                        "estado": "SC",
                        "cep": "88050-890"
                    },
                    "veiculo": {
                        "idVeiculo": 3,
                        "placa": "LMN1234",
                        "marca": "FORD",
                        "modelo": "Focus",
                        "anoFabricacao": 2018,
                        "anoModelo": 2019,
                        "cor": "Preto",
                        "precoVenda": 70000.00,
                        "precoCompra": 65000.00,
                        "tabelaFipe": 69000.00,
                        "quilometragem": 45000,
                        "categoria": "Hatch",
                        "nomeFornecedor": "FORD MOTOR COMPANY",
                        "telefoneFornecedor": "1122334455",
                        "opcionais": "Ar condicionado, Bancos em couro, Roda de liga leve",
                        "valorIpva": 1500.00,
                        "vencimentoIpva": "2024-07-05",
                        "valorDevido": 1200.00,
                        "valorParcela": 2000.00,
                        "financiado": true,
                        "observacao": "Veículo com 12 parcelas restantes",
                        "dateVenda": "2024-12-20"
                    }
                }
            ]
        },
        "_links": {
            "self": {
                "href": "http://35a9-2804-7f0-9101-8ce3-d81f-d017-1f42-fbc7.ngrok-free.app/v1/sale?page=0&size=20"
            }
        },
        "page": {
            "size": 20,
            "totalElements": 4,
            "totalPages": 1,
            "number": 0
        }
    }`;
    
    return HttpResponse.json(JSON.parse(data), { status: 200 });
  }),
]