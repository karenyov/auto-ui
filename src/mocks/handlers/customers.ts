import { http, HttpResponse } from 'msw';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const customersHandlers = [
http.get(`${API_BASE_URL}/customer`, () => {
    const data = `{
      "_embedded": {
          "customerResponses": [
              {
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
              {
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
              {
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
              {
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
              {
                  "clienteId": 12,
                  "nome": "Maria Souza",
                  "cpf": "123.456.789-00",
                  "telefone": "(11) 98765-4321",
                  "email": "maria.souza@email.com",
                  "rua": "Rua das Laranjeiras",
                  "numero": "123",
                  "bairro": "Centro",
                  "cidade": "Rio de Janeiro",
                  "estado": "RJ",
                  "cep": "20000-000"
              },
              {
                  "clienteId": 14,
                  "nome": "Karen Teste",
                  "cpf": "42750767881",
                  "telefone": "12996729706",
                  "email": "karen@email.com",
                  "rua": "S/N",
                  "numero": "S/N",
                  "bairro": "S/N",
                  "cidade": "SJC",
                  "estado": "SP",
                  "cep": "-"
              }
          ]
      },
      "_links": {
          "self": {
              "href": "http://35a9-2804-7f0-9101-8ce3-d81f-d017-1f42-fbc7.ngrok-free.app/v1/customer?page=0&size=10"
          }
      },
      "page": {
          "size": 10,
          "totalElements": 6,
          "totalPages": 1,
          "number": 0
      }
  }`;

    return HttpResponse.json(JSON.parse(data), { status: 200 });
  }),
]