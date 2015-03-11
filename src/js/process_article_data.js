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
            for(var i = result.length-1; i>-1; i--) {
                var el = result.slice(i)[0];
                something.push(el);
        }
        console.log(something);
    }
});