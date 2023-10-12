$(document).ready(function() {
    // Define the API URL you want to fetch data from
    const apiUrl = 'http://localhost:3000/api/listContacts';

    // Use jQuery's $.ajax() to make the API request
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            // Iterate through the response data and append it to the table
            const tableBody = $('#data-table tbody');
            response.forEach(function(item) {
                tableBody.append(
                    `<tr>
                        <td>${item.contactId}</td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.email}</td>
                        <td>${item.Phone}</td> 
                        <td>${item.contactSource}</td>
                        <td>${item.contactType}</td>
                    </tr>`
                );
            });
        },
        error: function(error) {
            console.error('API request failed:', error);
        }
    });
});
