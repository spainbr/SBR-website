

// DOM Ready =============================================================
$(document).ready(function() {
    // Populate the user table on initial page load
    populateTable();

    appendTable();

    initializeGmaps();

    google.maps.event.addDomListener(window, 'load', initializeGmaps);
});

// Scrolling
function appendTable() {
var lastX = 0;
var currentX = 0;
var page = 1;
var maxPages = 10;

$("#sidebar").scroll(function () {
    if (page < maxPages) {
        currentX = $("#sidebar").scrollTop();
        if (currentX - lastX > $("#sidebar").height() * page) {
            lastX = currentX;
            page++;

            // jQuery AJAX call for JSON
            $.getJSON( '/properties/list/' + page, function( data ) {

            // For each item in our JSON, add a table row and cells to the content string

            tableContent = createTable(data);

            // Append the whole content string into our existing HTML table
            $('#propertyList').append(tableContent);
            console.log("data append: %O", data);
            });
        }
    }
});
};

// Functions =============================================================

// Fill table with data
function populateTable() {

    // jQuery AJAX call for JSON
    $.getJSON( '/properties/list', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        tableContent = createTable(data);

        // Inject the whole content string into our existing HTML table
        $('#propertyList').html(tableContent);

        console.log("data populate: %O", data);
        window.data = data;
    });
};

function createTable(data) {
                // Empty content string
                var tableContent = '';
                var i = 0;
                $.each(data, function(){

                tableContent += '<div class="panel-table-container col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                //tableContent += '<a href="#myModal" data-toggle="modal" data-target="#myModal" onclick=\'$("#myModal").modal("show");\'>';
                tableContent += '<a href="#myModal" data-toggle="modal" data-target="#myModal" id="propertyClick" data-id="'+i+'">';
                tableContent += '<table class="panel-table">';
                tableContent += '<tbody><tr><th><div>' + 
                                '<img src="' + this.images.image[0].url + '" class="img-responsive">' +
                                '</div></th></tr>';
                tableContent += '<tr class="body"><td><div>';
                tableContent += '<strong>';
                tableContent += this.id + ' - ';
                tableContent += this.subtype.uk + ' ';
                tableContent += this.type.uk + ', ';
                tableContent += this.town + '<br>';
                tableContent += '</strong>';
                //tableContent += this.province + '<br>';
                tableContent += this.description.uk.substring(0,50) + '... <br>';
                tableContent += '</div></td></tr>';
                tableContent += '<tr class="footer"><td>Price: ' + this.price + " " + this.currency + '</td></tr>';
                tableContent += '</tbody></table></a></div>';
                i++;
                });
            return unescape(tableContent);
}


