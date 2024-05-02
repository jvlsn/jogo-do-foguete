console.log("[DevJVL] Jogo do Foguete");

const sprites = new Image();
sprites.src = "img/Frame 1.png";

const som_HIT = new Audio();
som_HIT.src = "audios/explosaoTNT.mp3";
const som_XP = new Audio();
som_XP.src = "audios/upXP.mp3";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

// CONTROLES MOBILE
const cima = document.getElementById("cima");
const esquerda = document.getElementById("esquerda");
const direita = document.getElementById("direita");

const mensagemGetReady = {
  spriteX: 0,
  spriteY: 163,
  largura: 130,
  altura: 152,
  x: 105,
  y: 50,

  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.spriteX,
      mensagemGetReady.spriteY, // Spirte X, Spirte Y
      mensagemGetReady.largura,
      mensagemGetReady.altura, // Recorte na spirte
      mensagemGetReady.x,
      mensagemGetReady.y, // Posiçao da sprite na tela
      mensagemGetReady.largura,
      mensagemGetReady.altura // Tamanho do canvas na tela
    );
  },
};

function fazColisao(foguete, chao) {
  const fogueteY = foguete.y + foguete.altura;
  const chaoY = chao.y - chao.altura;

  if (fogueteY >= chaoY) {
    return true;
  }

  return false;
}

function fazColisao(foguete, chao) {
  const fogueteY = foguete.y - foguete.altura;
  const chaoY = 295;

  if (fogueteY >= chaoY) {
    return true;
  }
  return false;
}

function criaFoguete() {
  const foguete = {
    spriteX: 0,
    spriteY: 0,
    largura: 48,
    altura: 72,
    x: 145,
    y: 10, // 343
    voo: 4.6, // MEU AMIGO SE LIGA QUE A TELA TA DESSE TAMANHO PQ EU ALTEREI NO HTML (480) EU ACHO, E TIREI A FISICA AQUI MAIS EMBAIXO || MAIS UM DETALHE, TALVEZ ESSA COISA DE ACELERAÇAO NAO ESTEJA DANDO CERTO DEVIDO A TODO O CODIGO TER "CLICK", A FUNCAO LA EMBAIXO, LA NA TELAS.JOGO ...
    acelero: 1.2,
    gravidade: 0.25,
    velocidade: 0,
    velcoidadeLateral: 0,

    atualiza() {
      // ACHO QUE ERA PRA SER O BOTAO MOBILE DE VOAR
      function cim() {
        console.log(cim);
      }
      addEventListener("keydown", function (event) {
        if (event.key === "w" || event.key === "W") {
          // SUBIR COM ACALERACAO
          foguete.velocidade = -foguete.velocidade + foguete.acelero;
          foguete.y = foguete.y - foguete.velocidade;
          console.log(foguete.y);

          //foguete.velocidade = -foguete.voo;
          // TENTATIVA DE MUDAR SPRITE

          //
        }
      });

      if (fazColisao(foguete, chao)) {
        if (foguete.velocidade > 7) {
          som_HIT.play();
          mudaParaTela(Telas.DERROTA);
          explosao.desenha();
          console.log(`AINDA NAO FIZ COLISAO: ${foguete.y}`);
        } else {
          som_XP.play();
          mudaParaTela(Telas.VITORIA);
        }
      }
      foguete.velocidade = foguete.velocidade + foguete.gravidade;
      foguete.y = foguete.y + foguete.velocidade;
    },
    desenha() {
      contexto.drawImage(
        sprites,
        foguete.spriteX,
        foguete.spriteY, // Spirte X, Spirte Y
        foguete.largura,
        foguete.altura, // Recorte na spirte
        foguete.x,
        foguete.y, // Posiçao da sprite na tela
        foguete.largura,
        foguete.altura // Tamanho do canvas na tela
      );
    },
  };
  return foguete;
}

function criaPlacar() {
  const placar = {
    pontuacao: 0,
    desenha() {
      contexto.font = "55px VT323";
      contexto.fillStyle = "white";
      contexto.fillText(`${placar.pontuacao}`, 250, 40);
    },
    atualiza() {
      setInterval(() => {}, 1000);
      placar.pontuacao = placar.pontuacao + 1;
    },
  };
  return placar;
}

/* function criaPlacarDois() {
  const placarDois = {
    desenha() {
      contexto.font = "55px VT323";
      contexto.fillStyle = "white";
      contexto.fillText(`${globais.placar.pontuacao}`, 250, 40);
    },
    atualiza() {
      contexto.fillText(`${globais.placar.pontuacao}`, 250, 40)
    }
  };
  return placarDois;
} */

const fogueteVoando = {
  spriteX: 0,
  spriteY: 73,
  largura: 48,
  altura: 86,
  x: 145,
  y: 320,

  desenha() {
    contexto.drawImage(
      sprites,
      fogueteVoando.spriteX,
      fogueteVoando.spriteY, // Spirte X, Spirte Y
      fogueteVoando.largura,
      fogueteVoando.altura, // Recorte na spirte
      fogueteVoando.x,
      fogueteVoando.y, // Posiçao da sprite na tela
      fogueteVoando.largura,
      fogueteVoando.altura // Tamanho do canvas na tela
    );
  },
};

const fogueteQuebrado = {
  spriteX: 236,
  spriteY: 1,
  largura: 77,
  altura: 55,
  x: 130, // 130
  y: 395, // 380

  desenha() {
    contexto.drawImage(
      sprites,
      fogueteQuebrado.spriteX,
      fogueteQuebrado.spriteY, // Spirte X, Spirte Y
      fogueteQuebrado.largura,
      fogueteQuebrado.altura, // Recorte na spirte
      fogueteQuebrado.x,
      fogueteQuebrado.y, // Posiçao da sprite na tela
      fogueteQuebrado.largura,
      fogueteQuebrado.altura // Tamanho do canvas na tela
    );
  },
};

const explosao = {
  spriteX: 238,
  spriteY: 71,
  largura: 106,
  altura: 99,
  x: 120,
  y: 320,

  desenha() {
    contexto.drawImage(
      sprites,
      explosao.spriteX,
      explosao.spriteY, // Spirte X, Spirte Y
      explosao.largura,
      explosao.altura, // Recorte na spirte
      explosao.x,
      explosao.y, // Posiçao da sprite na tela
      explosao.largura,
      explosao.altura // Tamanho do canvas na tela
    );
  },
};

const orb = {
  spriteX: 247,
  spriteY: 271,
  largura: 36,
  altura: 36,
  x: 70,
  y: 40,

  desenha() {
    contexto.drawImage(
      sprites,
      orb.spriteX,
      orb.spriteY, // Spirte X, Spirte Y
      orb.largura,
      orb.altura, // Recorte na spirte
      orb.x,
      orb.y, // Posiçao da sprite na tela
      orb.largura,
      orb.altura // Tamanho do canvas na tela
    );
    contexto.drawImage(
      sprites,
      orb.spriteX,
      orb.spriteY, // Spirte X, Spirte Y
      orb.largura,
      orb.altura, // Recorte na spirte
      orb.x + 160,
      orb.y, // Posiçao da sprite na tela
      orb.largura,
      orb.altura // Tamanho do canvas na tela
    );
  },
};

const ganhouWIN = {
  spriteX: 134,
  spriteY: 163,
  largura: 103,
  altura: 146,
  x: 105,
  y: 50,

  desenha() {
    contexto.drawImage(
      sprites,
      ganhouWIN.spriteX,
      ganhouWIN.spriteY, // Spirte X, Spirte Y
      ganhouWIN.largura,
      ganhouWIN.altura, // Recorte na spirte
      ganhouWIN.x,
      ganhouWIN.y, // Posiçao da sprite na tela
      ganhouWIN.largura,
      ganhouWIN.altura // Tamanho do canvas na tela
    );
  },
};

const perdeuLOSE = {
  spriteX: 363,
  spriteY: 40,
  largura: 115,
  altura: 241,
  x: 105,
  y: 50,

  desenha() {
    contexto.drawImage(
      sprites,
      perdeuLOSE.spriteX,
      perdeuLOSE.spriteY, // Spirte X, Spirte Y
      perdeuLOSE.largura,
      perdeuLOSE.altura, // Recorte na spirte
      perdeuLOSE.x,
      perdeuLOSE.y, // Posiçao da sprite na tela
      perdeuLOSE.largura,
      perdeuLOSE.altura // Tamanho do canvas na tela
    );
  },
};

const chao = {
  spriteX: 0,
  spriteY: 324,
  largura: 484,
  altura: 41,
  x: 0,
  y: 440,

  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX,
      chao.spriteY, // Spirte X, Spirte Y
      chao.largura,
      chao.altura, // Recorte na spirte
      chao.x,
      chao.y, // Posiçao da sprite na tela
      chao.largura,
      chao.altura // Tamanho do canvas na tela
    );
  },
};

const nuvem = {
  spriteX: 49,
  spriteY: 0,
  largura: 174,
  altura: 121,
  x: 380,
  y: 30,

  desenha() {
    contexto.drawImage(
      sprites,
      nuvem.spriteX,
      nuvem.spriteY, // Spirte X, Spirte Y
      nuvem.largura,
      nuvem.altura, // Recorte na spirte
      nuvem.x,
      nuvem.y, // Posiçao da sprite na tela
      nuvem.largura,
      nuvem.altura // Tamanho do canvas na tela
    );
  },
  atualiza() {
    nuvem.x = nuvem.x - 1;

    if (nuvem.x < -280) {
      // SE A NUVEM SAIR DA TELA ELA APARECE NO OTRO LADO
      nuvem.x = 380;
    }
  },
};

const planoDeFundo = {
  desenha() {
    contexto.fillStyle = "#70c5ce";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
  },
};

//
// Telas
//
const globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;

  if (telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
}

const Telas = {
  INICIO: {
    inicializa() {
      globais.foguete = criaFoguete();
      globais.placar = criaPlacar();
    },
    desenha() {
      planoDeFundo.desenha();
      nuvem.desenha();
      mensagemGetReady.desenha();
      chao.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {
      nuvem.atualiza();
    },
  },
};

Telas.JOGO = {
  desenha() {
    planoDeFundo.desenha();
    //fogueteQuebrado.desenha();
    nuvem.desenha();
    globais.foguete.desenha();
    globais.placar.desenha();
    orb.desenha();
    chao.desenha();
  },
  voa() {
    globais.foguete.voa();
  },
  atualiza() {
    globais.foguete.atualiza();
    globais.placar.atualiza();
    nuvem.atualiza();
  },
};

Telas.VITORIA = {
  inicializa() {
    globais.foguete = criaFoguete();
  },
  desenha() {
    planoDeFundo.desenha();
    nuvem.desenha();
    globais.foguete.desenha();
    chao.desenha();
    ganhouWIN.desenha();
  },
  click() {
    mudaParaTela(Telas.JOGO);
  },
  atualiza() {
    nuvem.atualiza();
  },
};
Telas.DERROTA = {
  inicializa() {
    globais.foguete = criaFoguete();
    globais.placar = criaPlacar();
    //globais.placarDois = criaPlacarDois();
  },
  desenha() {
    planoDeFundo.desenha();
    nuvem.desenha();
    fogueteQuebrado.desenha();
    chao.desenha();
    perdeuLOSE.desenha();
    // globais.placarDois.desenha();
  },
  click() {
    mudaParaTela(Telas.JOGO);
  },
  atualiza() {
    nuvem.atualiza();
  },
};

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();

  requestAnimationFrame(loop);
}

window.addEventListener("click", function () {
  if (telaAtiva.click) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();
