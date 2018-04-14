//get JASON data from a real web service
$(document).ready(function () {
    $.ajax({
        url: 'https://sporadic.nz/2018a_web_assignment_service/Articles',
        type: 'GET',
        success:function (msg) {
            // the msg contains: id, title, content, imageUrl
            for(var i = 0; i < msg.length; i++){
                //set the articles
                var articleID = "#article" + msg[i].id;
                $(articleID).find('.card-title').text(msg[i].title);
                $(articleID).find('.thumbnail').attr('src', msg[i].imageUrl);
                $(articleID).find('.card-text').text(msg[i].content);

                // set the text of links on sidebar
                var linkID = "#link" + msg[i].id;
                $(linkID).text(msg[i].title);

                // set the text of the item on navbar
                // However, the titles from the msg are too long so that I still use article 1, article 2 instead.
                // var j = i + 1;
                // $('.nav-item').eq(j).text(msg[i].title);
            }
        }
    });
});