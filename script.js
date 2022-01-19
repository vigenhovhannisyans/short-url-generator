$(document).ready(()=>{
     $('#get-url-btn').click((e)=>{
        let getValue = $('#url-input').val();
        let slice = getValue.slice(8,0)
        let randomString = (Math.random() + 1).toString(36).substring(2);
        const result = slice+''+randomString
        $('#url').text('https://'+result)
        $('#url').attr('href',getValue)
        $('#url-clip').text('https://'+result)
        $('#url-clip').attr('href',getValue)
        $('#copy-clip').removeClass('copy-clip-bloced')
        $('#get-url-btn').addClass('url-btn-block') 
        console.log();
    })
    $('#url-input').keyup((e)=>{
        if(e.target.value.length>1){
            $('#get-url-btn').removeClass('url-btn-block')  
        }else{
            $('#get-url-btn').addClass('url-btn-block')  
        }
    })
    $('#copy-clip').click(()=>{
        navigator.clipboard.writeText(`${$('#url').text()}`)
        $('#btn-back-url').addClass('active-btn-back-url')
        setTimeout(() => {
            $('#btn-back-url').removeClass('active-btn-back-url')
        }, 1000);
    })
})