/*
  Atitude Campeã — dados da página
  ------------------------------------------------------------
  Único arquivo a editar para mudar textos, prêmios, fotos ou indicadores.
  NÃO coloque aqui dados confidenciais (nomes, matrículas, contatos,
  códigos internos, valores financeiros, GGO, fórmulas ou limites).
  Fonte: Regulamento Atitude Campeã, versão 06 (fev/2026), em linguagem simples.

  Categorias de indicador (ícone): qualidade, produtividade, rendimento,
  recursos, estoque, clientes, prazo, gestao.
  Fotos de prêmio: tv, bicicleta, moto, airfryer, microondas, grill,
  ventilador, geladeira, maquina, ar  (pasta assets/premios).
*/
window.ATITUDE = {
  programa: {
    titulo: "Atitude Campeã",
    chamada: "Cada setor faz a sua parte. A unidade inteira sobe junto.",
    descricao:
      "Programa de reconhecimento da Minerva Foods. Todo mês os setores são avaliados em qualidade, produtividade, segurança e gestão de pessoas. Os campeões ganham prêmios sorteados entre a equipe, e as melhores unidades do ano recebem em salário.",
    proposito: "Criando conexões entre pessoas, alimentos e natureza.",
    numeros: [
      { valor: "9", texto: "setores na disputa" },
      { valor: "16", texto: "unidades no ranking" },
      { valor: "100%", texto: "do salário no prêmio anual" }
    ],
    valores: [
      { nome: "Orientação para resultados", img: "assets/marca/valor-orientacao-para-resultados.png" },
      { nome: "Comprometimento", img: "assets/marca/valor-comprometimento.png" },
      { nome: "Sustentabilidade", img: "assets/marca/valor-sustentabilidade.png" },
      { nome: "Inovação", img: "assets/marca/valor-inovacao.png" },
      { nome: "Reconhecimento", img: "assets/marca/valor-reconhecimento.png" }
    ],
    versao: "Regulamento 2026"
  },

  sorteio: [
    "Contratados até o dia 15 do mês.",
    "Sem faltas injustificadas no mês.",
    "Somente colaboradores diretos (terceiros não participam).",
    "Gerentes, coordenadores e supervisores não entram no sorteio mensal."
  ],

  anual: {
    podio: [
      { lugar: "1º lugar", valor: "100%" },
      { lugar: "2º lugar", valor: "50%" },
      { lugar: "3º lugar", valor: "25%" }
    ],
    pagamento: "Pagamento previsto para o 1º trimestre do ano seguinte.",
    direito: [
      "Admitidos até outubro recebem proporcional ao tempo trabalhado.",
      "Lideranças também participam do prêmio do ano.",
      "Transferidos recebem pelo tempo na unidade vencedora.",
      "Quem é desligado antes do pagamento perde o prêmio."
    ],
    descontos: [
      ["Até 3 faltas justificadas", "−25%"],
      ["4 a 6 faltas justificadas", "−50%"],
      ["7 a 9 faltas justificadas", "−70%"],
      ["Mais de 9 faltas justificadas", "−100%"],
      ["Até 2 faltas injustificadas", "−50%"],
      ["3 ou mais faltas injustificadas", "−100%"],
      ["Advertência por não usar EPI ou descumprir Regra de Ouro", "−100%"]
    ],
    abonos: "Não contam como falta: licença‑paternidade, casamento e falecimento de familiar direto."
  },

  melhorUnidade: [
    { nome: "Opção 1", premios: [[1, "Moto 125 cc", "moto"], [3, "Smart TVs 32\"", "tv"], [1, "Ar‑condicionado", "ar"], [1, "Ventilador", "ventilador"], [2, "Grills elétricos", "grill"]] },
    { nome: "Opção 2", premios: [[5, "Smart TVs 32\"", "tv"], [1, "Geladeira 240 L", "geladeira"], [2, "Ar‑condicionados", "ar"], [2, "Máquinas de lavar", "maquina"], [2, "Micro‑ondas", "microondas"], [3, "Air fryers", "airfryer"], [2, "Grills elétricos", "grill"]] }
  ],

  comuns: [
    { nome: "Segurança", cat: "seguranca", texto: "Zero acidente. Um acidente com afastamento zera este indicador no mês.", alerta: true },
    { nome: "Pessoas e Gestão", cat: "pessoas", texto: "Equipe estável, presença no trabalho, organização 5S e participação no CMQ." }
  ],

  setores: [
    {
      id: "abate", nome: "Abate", foto: "assets/fotos/campo.jpg", posFoto: "50% 45%",
      frase: "Onde tudo começa. Qualidade e cuidado desde a primeira etapa.",
      areas: ["Curral", "Abate", "Couros verdes", "Graxaria crua", "Romaneio", "Controle de qualidade"],
      premios: [[2, "Smart TVs 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [1, "Micro‑ondas", "microondas"], [2, "Grills elétricos", "grill"], [1, "Air fryer", "airfryer"], [3, "Ventiladores", "ventilador"]],
      indicadores: [
        ["Crédito Abate", "Resultado do abate frente ao planejado.", "rendimento"],
        ["Produtividade", "Animais abatidos por hora trabalhada.", "produtividade"],
        ["Furos e Raias", "Cuidado com o couro na esfola, sem furos nem raias.", "qualidade"],
        ["Qualidade", "Carcaças sem contaminação, esfola correta e boa qualidade microbiológica.", "qualidade"],
        ["Estoque Produtivo", "Manter o estoque do setor dentro da meta.", "estoque"]
      ]
    },
    {
      id: "desossa", nome: "Desossa", foto: "assets/fotos/desossa.jpg", posFoto: "50% 30%",
      frase: "Precisão em cada corte para tirar o melhor de cada peça.",
      areas: ["Desossa", "Embalagens e recortes", "Romaneio", "Controle de qualidade"],
      premios: [[3, "Smart TVs 32\"", "tv"], [2, "Bicicletas aro 29", "bicicleta"], [1, "Micro‑ondas", "microondas"], [3, "Grills elétricos", "grill"], [1, "Máquina de lavar", "maquina"]],
      indicadores: [
        ["Produtividade", "Quilos desossados por hora trabalhada.", "produtividade"],
        ["Quebra Geral", "Menor perda de peso entre o abate e a desossa.", "rendimento"],
        ["Embalagens", "Usar só a embalagem necessária.", "recursos"],
        ["Rendimento de Cortes", "Tirar o máximo de cada peça.", "rendimento"],
        ["Rendimento Geral", "Aproveitamento total da carne.", "rendimento"],
        ["Geração de Limpeza", "Recortes, gordura e membranas dentro do planejado.", "rendimento"],
        ["Aproveitamento de Marcas", "Peças nobres que saem como Estância, Angus e Cabaña Las Lilas.", "qualidade"],
        ["Reclamações de clientes", "Menos reclamações sobre produtos da desossa.", "clientes"]
      ]
    },
    {
      id: "cortes", nome: "Cortes", foto: "assets/fotos/cortes.jpg", posFoto: "50% 50%",
      frase: "Temperatura certa e perda mínima na câmara fria.",
      areas: ["Cortes", "Romaneio", "Controle de qualidade"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Grills elétricos", "grill"]],
      indicadores: [
        ["Quebra Frio", "Menor perda de peso na câmara fria.", "rendimento"],
        ["Qualidade", "Quartos chegando à desossa na temperatura certa.", "qualidade"]
      ]
    },
    {
      id: "embarque", nome: "Embarque", foto: "assets/fotos/embarque.jpg", posFoto: "50% 50%",
      frase: "O produto certo, no prazo, do jeito que o cliente espera.",
      areas: ["Paletização", "Câmaras", "Embarque", "Revisão de acabado", "Romaneio", "Controle de qualidade"],
      premios: [[2, "Smart TVs 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Grills elétricos", "grill"], [3, "Ventiladores", "ventilador"]],
      indicadores: [
        ["Estoque Produtivo", "Manter o estoque do setor dentro da meta.", "estoque"],
        ["Produtividade", "Quilos embarcados por hora trabalhada.", "produtividade"],
        ["Tempos de Embarque", "Carregar dentro do prazo.", "prazo"],
        ["WMS", "Produtos endereçados corretamente no sistema.", "estoque"],
        ["Reclamações de clientes", "Sem caixa faltando, avariada, fora da temperatura ou pallet tombado.", "clientes"]
      ]
    },
    {
      id: "graxaria", nome: "Graxaria", foto: "assets/fotos/graxaria.jpg", posFoto: "50% 50%",
      frase: "Aproveitamento total. Aqui nada se perde.",
      areas: ["Graxaria processada"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Grills elétricos", "grill"], [2, "Air fryers", "airfryer"]],
      indicadores: [
        ["Consumo de Vapor", "Usar menos vapor por tonelada produzida.", "recursos"],
        ["Extrato Etéreo", "Qualidade da farinha produzida.", "qualidade"],
        ["Reclamações", "Menos reclamações sobre farinha e sebo.", "clientes"],
        ["Rendimento Sebo", "Mais sebo da matéria‑prima recebida.", "rendimento"]
      ],
      nota: "A Graxaria tem ranking e premiação próprios, em paralelo ao ranking das unidades."
    },
    {
      id: "higienizacao", nome: "Higienização", foto: "assets/fotos/higienizacao.jpg", posFoto: "30% 50%",
      frase: "Área limpa é produto seguro. Tudo começa antes da produção.",
      areas: ["Higienização pré‑operacional"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Air fryers", "airfryer"], [2, "Grills elétricos", "grill"]],
      indicadores: [
        ["Qualidade da Higienização", "Superfícies e câmaras limpas e aprovadas antes da produção.", "qualidade"]
      ]
    },
    {
      id: "triparia", nome: "Triparia", foto: "assets/fotos/triparia.jpg", posFoto: "50% 40%",
      frase: "Aproveitar mais de cada animal, com qualidade de primeira.",
      areas: ["Triparia"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Grills elétricos", "grill"], [2, "Ventiladores", "ventilador"], [1, "Micro‑ondas", "microondas"]],
      indicadores: [
        ["Aproveitamento Tripa Fina", "Maços aproveitados por animal, no 1º e no 2º corte.", "rendimento"],
        ["1ª Qualidade Tripa Fina", "Mais metros classificados como 1ª qualidade.", "qualidade"],
        ["Metros Tripa Fina", "Comprimento aproveitado por maço.", "rendimento"],
        ["Aproveitamento Fundo e Mucosa", "Aproveitar mais de cada animal.", "rendimento"]
      ]
    },
    {
      id: "manutencao", nome: "Manutenção", foto: "assets/fotos/manutencao.jpg", posFoto: "50% 50%",
      frase: "Máquinas rodando, recursos bem usados e obras no prazo.",
      areas: ["Administração da manutenção", "Engenharia", "Mecânica", "Elétrica", "Civil", "Refrigeração", "Túnel de congelamento", "Caldeira", "ETA", "ETE", "Meio ambiente", "Conservação e jardinagem"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [2, "Air fryers", "airfryer"], [1, "Micro‑ondas", "microondas"], [2, "Grills elétricos", "grill"]],
      indicadores: [
        ["Água, Energia e Vapor", "Usar menos recursos por produto feito.", "recursos"],
        ["Projetos no Prazo", "Entregar obras e melhorias no prazo.", "prazo"],
        ["Quebra Frio", "Menor perda de peso na câmara fria.", "rendimento"],
        ["Disponibilidade", "Máquinas do Abate e da Desossa funcionando sem parar.", "produtividade"],
        ["Qualidade da Manutenção", "Instalações e equipamentos aprovados na auditoria mensal.", "qualidade"]
      ]
    },
    {
      id: "gerencial", nome: "Gerencial", foto: "assets/fotos/gerencial.jpg", posFoto: "70% 40%", semComuns: true,
      frase: "A gestão que move a unidade inteira.",
      areas: ["Administração da produção", "Administrativo", "Almoxarifado", "BEA", "Compra de gado", "Custos", "Gente e Gestão", "PCP", "Qualidade", "Rastreabilidade", "Romaneio", "Segurança patrimonial", "Segurança do trabalho", "TI"],
      premios: [[1, "Smart TV 32\"", "tv"], [1, "Bicicleta aro 29", "bicicleta"], [1, "Micro‑ondas", "microondas"], [1, "Air fryer", "airfryer"], [2, "Grills elétricos", "grill"], [2, "Ventiladores", "ventilador"]],
      indicadores: [
        ["Qualidade", "Qualidade dos produtos da unidade inteira.", "qualidade"],
        ["Rendimento", "Aproveitamento da matéria‑prima em toda a unidade.", "rendimento"],
        ["Produtividade", "Volume entregue frente ao planejado.", "produtividade"],
        ["Custos", "Gastos da unidade dentro do orçamento.", "recursos"],
        ["Pessoas", "Equipe do tamanho certo e projetos de melhoria.", "gestao"]
      ],
      nota: "O Gerencial ganha quando a unidade é a melhor no conjunto de indicadores de gestão da unidade (o TOP 13)."
    }
  ]
};
