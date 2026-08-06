# Camada pop-up do código de verificação

Janela pop-up do código de verificação com base no clique gráfico.

- Combinado com BoxX para implementar interação de janela pop-up e suporte ESC/close
- Clique no alvo com base na imagem de fundo
- Suporta desfazer clique passo e mecanismo de nova tentativa automática
- usar
  * Rede pública:`https://captcha.webc.pub`
  * Implantação privada: [captcha_srv](https://crates.io/crates/captcha_srv)

## Use a demonstração

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Após a verificação, envie o token para o backend
  console.log("Token de verificação aprovada:", token);
}
```

## valor de retorno

Chamar a função retorna `Promise<string | undefined>`:
- **Verificação aprovada**: Retorna a sequência de token do código de verificação codificado em Base64URL (sem preenchimento).
- **Fechar ou Cancelar**: retorne para `undefined`.

## Processo de verificação e baixa de back-end

1. **Validação de gatilho**: chamadas de front-end `Captcha()`.
2. **Obter gráfico**: `Captcha.js` Inicie `GET /` até `captcha_srv` para obter a imagem e o ID clicados.
3. **Verificação de coordenadas**: após o usuário concluir o clique, `Captcha.js` inicia `POST /` a `captcha_srv` para verificar as coordenadas. Se a verificação for bem-sucedida, um token codificado em Base64URL será retornado.
4. **Verificação de back-end**: O front-end envia o Token para o back-end do site, e o back-end chama `captcha_srv` e `GET /verify/{token}` para verificar e destruir o Token de uma só vez.

### Instruções de baixa de back-end

Após o backend do site receber o `token` enviado pelo front-end, ele precisa iniciar uma solicitação ao serviço `captcha_srv`:

- **Interface de solicitação**:`GET /verify/{token}`
- **Parâmetro de caminho**: `token` (string Base64URL retornada pelo front end)
- **Resultado retornado**: `1` significa que a verificação foi aprovada e válida (será destruída automaticamente); `0` significa inválido ou foi cancelado.