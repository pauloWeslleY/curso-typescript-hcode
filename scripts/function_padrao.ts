function sendEmail(para: string, assunto: string = "Sem Assunto", remetente?: string): void {

   console.log({
      para,
      assunto,
      remetente
   })

}

sendEmail("weslley@backend.com.br")