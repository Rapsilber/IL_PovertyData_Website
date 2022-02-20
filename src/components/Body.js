import PropTypes from 'prop-types'
import Button from './Button'

const onClick= () => {
    var visibility = document.getElementById("infographics");
    visibility.style.display = "block"
}

function jsonExport() {
    
    // Variable to store the final csv data
    var csv_data = [];
 
    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file 
    csvExport(csv_data);
}

function csvExport( csv_data ) {
    
    // Create CSV file object and feed
                // our csv_data into it
                CSVFile = new Blob([csv_data], {
                    type: "text/csv"
                });
 
                // Create to temporary link to initiate
                // download process
                var temp_link = document.createElement('a');
 
                // Download csv file
                temp_link.download = "document_request.csv";
                var url = window.URL.createObjectURL(CSVFile);
                temp_link.href = url;
 
                // This link should not be displayed
                temp_link.style.display = "none";
                document.body.appendChild(temp_link);
 
                // Automatically click the link to
                // trigger download
                temp_link.click();
                document.body.removeChild(temp_link);
}


function tableToJSON() {

    var data = [];
    var rows = document.getElementsByTagName('tr');
    // first row needs to be headers
    var headers = [];
    for (var i=0; i<rows[0].cells.length; i++) {
        headers[i] = rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<rows.length; i++) {

        var tableRow = rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }
    
    downloadJSONFile(data);
}


function downloadJSONFile(exportObj) {

    /*var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "document_request" + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();*/
     // Create CSV file object and feed
    // our csv_data into it
    JSONFile = new Blob([JSON.stringify(exportObj)], {
        type: "application/json"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "document_request.json";
    var url = window.URL.createObjectURL(JSONFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}


const Body = ({ title }) => {

    return ( //this holds the body of the page, description, selection fields, and infographics
        <body className='body'>
            <div className='description'>
                <h3>{title}</h3>
                <p>Here you are able to view the Income and Poverty data provided by
                     the US Census. Using the corresponding fields below, enter the
                     states and/or counties you would like to see data from. This tool
                     allows you to compare up to two states or two counties(from the
                     same state or different).</p>
            </div>
            <div className='filterTitles'>
                <p>County 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; County 2</p>
            </div>
            <div className='filterOptions'>
                <form action="/form-handler" method="POST">
                    <div>
                        <select id="source" name="input1">
                            <option value="">Select County</option>
                            <option value="Adams County, Illinois">Adams County</option>
                            <option value="Champaign County, Illinois">Champaign County</option>
                            <option value="Cook County, Illinois">Cook County</option>
                            <option value="DeKalb County, Illinois">DeKalb County</option>
                            <option value="DuPage County, Illinois">DuPage County</option>
                            <option value="Kane County, Illinois">Kane County</option>
                            <option value="Kankakee County, Illinois">	Kankakee County</option>
                            <option value="Kendall County, Illinois">Kendall County</option>
                            <option value="Lake County, Illinois">Lake County</option>
                            <option value="LaSalle County, Illinois">LaSalle County</option>
                            <option value="McHenry County, Illinois">McHenry County</option>
                            <option value="McLean County, Illinois">McLean County</option>
                            <option value="Macon County, Illinois">Macon County</option>
                            <option value="Madison County, Illinois">Madison County</option>
                            <option value="Peoria County, Illinois">Peoria County</option>
                            <option value="Rock Island County, Illinois">Rock Island County</option>
                            <option value="St. Clair County, Illinois">St. Clair County</option>
                            <option value="Sangamon County, Illinois">Sangamon County</option>
                            <option value="Tazewell County, Illinois">Tazewell County</option>
                            <option value="Vermilion County, Illinois">Vermilion County</option>
                            <option value="Will County, Illinois">Will County</option>
                            <option value="Williamson County, Illinois">Williamson County</option>
                            <option value="Winnebago County, Illinois">Winnebago County</option>
                        </select>
                        <select id="source" name="input2">
                            <option value="">Select County</option>
                            <option value="Adams County, Illinois">Adams County</option>
                            <option value="Champaign County, Illinois">Champaign County</option>
                            <option value="Cook County, Illinois">Cook County</option>
                            <option value="DeKalb County, Illinois">DeKalb County</option>
                            <option value="DuPage County, Illinois">DuPage County</option>
                            <option value="Kane County, Illinois">Kane County</option>
                            <option value="Kankakee County, Illinois">	Kankakee County</option>
                            <option value="Kendall County, Illinois">Kendall County</option>
                            <option value="Lake County, Illinois">Lake County</option>
                            <option value="LaSalle County, Illinois">LaSalle County</option>
                            <option value="McHenry County, Illinois">McHenry County</option>
                            <option value="McLean County, Illinois">McLean County</option>
                            <option value="Macon County, Illinois">Macon County</option>
                            <option value="Madison County, Illinois">Madison County</option>
                            <option value="Peoria County, Illinois">Peoria County</option>
                            <option value="Rock Island County, Illinois">Rock Island County</option>
                            <option value="St. Clair County, Illinois">St. Clair County</option>
                            <option value="Sangamon County, Illinois">Sangamon County</option>
                            <option value="Tazewell County, Illinois">Tazewell County</option>
                            <option value="Vermilion County, Illinois">Vermilion County</option>
                            <option value="Will County, Illinois">Will County</option>
                            <option value="Williamson County, Illinois">Williamson County</option>
                            <option value="Winnebago County, Illinois">Winnebago County</option>
                        </select>
                    </div>
                </form>
                <Button text="Submit" onClick={onClick} />
            </div>
            <div id="infographics">
                DATA INFOGRAPHICS HERE
                <section className="exportBtns">
                    <Button text="JSON" onClick={jsonExport}/>
                    <Button text="CSV" onClick={csvExport} />
                </section>
            </div>
        </body>
    )
}

Body.defaultProps = {
    title: 'Welcome to our website!',
}

Body.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Body
