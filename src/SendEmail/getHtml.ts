export function ConfirmAccountHtml(code: string) {
  return `<!DOCTYPE html>
    <html lang="pt-BR" >
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirme seu Código</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0F1419; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFFFFF;">
      
      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0F1419; padding: 40px 20px;">
      <tr>
      <td align="center">
      
      <table width="100%" max-width="500px" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; background-color: #1A1F2E; border: 1px solid #2A2F3E; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
      
      <tr>
      <td align="center" style="padding: 30px 30px 10px 30px;">
      <div style="font-size: 24px; font-weight: bold; color: #00F5FF; letter-spacing: 1px;">
      </div>
      </td>
      </tr>
      
      <tr>
      <td style="padding: 0 30px;">
      <div style="border-top: 2px dashed #3A3F4E; height: 1px; line-height: 1px; font-size: 1px;">&nbsp;</div>
      </td>
      </tr>
      
      <tr>
          <td style="padding: 30px; ">
              <div style="text-align: center; margin-bottom: 15px;">
                <p style="color: #00F5FF; font-weight: bold; font-size: 20px; letter-spacing: 2px; margin: 0;">LEVEL UP - RPG STUDIES</p>
              </div>
              
              <h2 style="margin: 0 0 15px 0; font-size: 22px; font-weight: 600; text-align: center; color: #FFFFFF;">
                  Verifique seu endereço de e-mail
                </h2>
                
                  <p style="margin: 0 0 25px 0; font-size: 15px; line-height: 1.6; text-align: center; color: #9CA3AF;">
                  Olá! Obrigado por se cadastrar. Use o código de confirmação abaixo para validar sua conta e ter acesso total à nossa plataforma.
                  </p>
                  
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #252A3A; border-radius: 8px; border: 1px solid #2A2F3E;">
                  <tr>
                  <td align="center" style="padding: 20px;">
                  <div style="font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #00F5FF; padding-left: 8px;">
                  ${code}
                  </div>
                  </td>
                  </tr>
                  </table>
                  
                  <p style="margin: 20px 0 0 0; font-size: 13px; text-align: center; color: #F59E0B;">
                  *Este código expira em 5 minutos.
                  </p>
                  
                  </td>
                  </tr>
                  
                  <tr>
                  <td style="padding: 0 30px 30px 30px; text-align: center;">
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #9CA3AF;">
                  Não solicitou este código? Você pode ignorar este e-mail com segurança.
                  </p>
                 
                  </td>
                  </tr>
                  
                  </table>
                  
                  <table width="100%" max-width="500px" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; margin-top: 20px;">
                  <tr>
                  <td align="center" style="font-size: 12px; color: #9CA3AF; line-height: 1.5;">
                  © 2026 Sua Empresa Inc. <br>
                  Se tiver dúvidas, entre em contato com o nosso <a href="#" style="color: #00F5FF; text-decoration: none;">Suporte</a>.
                  </td>
                  </tr>
                  </table>
                  
                  </td>
                  </tr>
                  </table>
                  
                  </body>
                  </html>`;
}
export function ChangePasswordHtml(code: number) {
  return `<!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Código para Alterar Senha</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #0F1419; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFFFFF;">
            
            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0F1419; padding: 40px 20px;">
              <tr>
                <td align="center">
                  
                  <!-- Card Principal -->
                  <table width="100%" max-width="500px" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; background-color: #1A1F2E; border: 1px solid #2A2F3E; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                    
                    <!-- Header / Logo Exemplo -->
                    <tr>
                      <td align="center" style="padding: 30px 30px 10px 30px;">
                        <div style="font-size: 24px; font-weight: bold; color: #00F5FF; letter-spacing: 1px;">
                          <p style="color: #00F5FF; font-weight: bold; font-size: 20px; letter-spacing: 2px; margin: 0;">LEVEL UP - RPG STUDIES</p>
                        </div>
                      </td>
                    </tr>
            
                    <!-- Linha Divisória Pontilhada -->
                    <tr>
                      <td style="padding: 0 30px;">
                        <div style="border-top: 2px dashed #3A3F4E; height: 1px; line-height: 1px; font-size: 1px;">&nbsp;</div>
                      </td>
                    </tr>
            
                    <!-- Conteúdo -->
                    <tr>
                      <td style="padding: 30px;">
                        <h2 style="margin: 0 0 15px 0; font-size: 22px; font-weight: 600; text-align: center; color: #FFFFFF;">
                          Código de Segurança
                        </h2>
                        
                        <p style="margin: 0 0 25px 0; font-size: 15px; line-height: 1.6; text-align: center; color: #9CA3AF;">
                          Você solicitou a redefinição de senha no nosso aplicativo. Insira o código abaixo na tela do app para continuar:
                        </p>
            
                        <!-- Container do Código -->
                        <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #252A3A; border-radius: 8px; border: 1px solid #2A2F3E;">
                          <tr>
                            <td align="center" style="padding: 20px;">
                              <!-- Usei a cor monarchPurple (#8B5CF6) para diferenciar do e-mail de cadastro -->
                              <div style="font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #8B5CF6; padding-left: 8px;">
                                ${code}
                              </div>
                            </td>
                          </tr>
                        </table>
            
                        <!-- Alerta de Segurança (Warning) -->
                        <p style="margin: 20px 0 0 0; font-size: 13px; text-align: center; color: #F59E0B;">
                          *Este código expira em 10 minutos. Não o compartilhe com ninguém.
                        </p>
            
                      </td>
                    </tr>
            
                    <!-- Rodapé do Card -->
                    <tr>
                      <td style="padding: 0 30px 30px 30px; text-align: center;">
                        <div style="border-top: 1px solid #2A2F3E; padding-top: 20px;">
                          <p style="margin: 0; font-size: 13px; color: #9CA3AF; line-height: 1.5;">
                            Se você não solicitou essa alteração, pode ignorar este e-mail. Sua senha atual continuará segura e nenhuma ação será tomada.
                          </p>
                        </div>
                      </td>
                    </tr>
            
                  </table>
                  
                  <!-- Rodapé Geral -->
                  <table width="100%" max-width="500px" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; margin-top: 20px;">
                    <tr>
                      <td align="center" style="font-size: 12px; color: #9CA3AF; line-height: 1.5;">
                        © 2026 Sua Empresa Inc. <br>
                        Precisa de ajuda? Fale com nosso <a href="#" style="color: #00F5FF; text-decoration: none;">Suporte</a>.
                      </td>
                    </tr>
                  </table>
            
                </td>
              </tr>
            </table>
            
          </body>
          </html>`;
}
