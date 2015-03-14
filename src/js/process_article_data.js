/**
 * Created by Hachiko on 2015.03.11..
 */
something = [];
$.ajax({
    type: "GET",
    url: "../backend/get_article_data.php",
    dataType: "json",
    header: ('Content-type: text/html'),
    error: function () {
        console.log('Error while getting data from server!');
    },
    success: function (result) {
        result.forEach(function(article){
            something.push({id: article[0], title: article[1], body: article[2], created: article[3], modified: article[4]})
        });
        for(var i = something.length-1; i>-1; i--) {
            var lastModified;
            if (something[i].modified !== null){
                lastModified = 'Modified: ' + something[i].modified;
            } else {
                lastModified = something[i].created;
            }
            $('<div class="left-content left-expanded" data-id="'+something[i].id+'"> <h2>'+something[i].title+'</h2><p class="time-created"><i>'+lastModified+'</i></p><p>'+something[i].body+' </p><div id="article-controls-container" class="article-controls-container"></div></div> ').appendTo('.append-content');

            $('<h4 data-id="'+something[i].id+'">'+something[i].title+'</h4><p class="time-created"><i>'+lastModified+'</i></p><br>').appendTo('.recent-posts');
        }
    }
});