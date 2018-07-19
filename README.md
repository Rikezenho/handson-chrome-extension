# Hands-on: Chrome Extensions

Uma extensão funcional criada para o hands-on de Chrome Extensions para a equipe de front-end da NS.

---

## Instalando

1.  Abra o endereço `chrome://extensions` no seu Chrome
2.  Ative o Modo de Desenvolvedor
3.  Clique em "Carregar sem compactação" e selecione a pasta `/ext` do projeto, OU arraste a pasta `/ext` para esta tela.

**Nota: é importante que seja a `/ext`, pois é ela que possui o `manifest.json`!**

---

## Fluxo

1.  Entre em uma página de busca da Netshoes, por exemplo: https://www.netshoes.com.br/busca?nsCat=Natural&q=tenis
2.  Clique no ícone da extensão na barra do navegador
3.  Clique no botão "Aplicar Cage"
4.  Veja a mágica do script de `popup.js` se comunicando com o `inject.js`, que interage com a página e manipula as imagens. :)

---

## Apresentação

https://docs.google.com/presentation/d/1UmRFc42uj51DZdg7Oyy86iNqb-DOtUlPjQK9gv_V_R4/edit?usp=sharing
