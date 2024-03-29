const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.port || 5411;

app.listen(port, () => console.log("its alive OoOOooOOoO ... Port"));

var ner = require("wink-ner");
// Create your instance of wink ner & use default config.
var myNER = ner();
// Define training data.
var trainingData = [
  { text: "Afghanistan", entityType: "country" },
  { text: "Åland Islands", entityType: "country" },
  { text: "Albania", entityType: "country" },
  { text: "Algeria", entityType: "country" },
  { text: "American Samoa", entityType: "country" },
  { text: "Andorra", entityType: "country" },
  { text: "Angola", entityType: "country" },
  { text: "Anguilla", entityType: "country" },
  { text: "Antarctica", entityType: "country" },
  { text: "Antigua and Barbuda", entityType: "country" },
  { text: "Argentina", entityType: "country" },
  { text: "Armenia", entityType: "country" },
  { text: "Aruba", entityType: "country" },
  { text: "Australia", entityType: "country" },
  { text: "Austria", entityType: "country" },
  { text: "Azerbaijan", entityType: "country" },
  { text: "Bahamas", entityType: "country" },
  { text: "Bahrain", entityType: "country" },
  { text: "Bangladesh", entityType: "country" },
  { text: "Barbados", entityType: "country" },
  { text: "Belarus", entityType: "country" },
  { text: "Belgium", entityType: "country" },
  { text: "Belize", entityType: "country" },
  { text: "Benin", entityType: "country" },
  { text: "Bermuda", entityType: "country" },
  { text: "Bhutan", entityType: "country" },
  { text: "Bolivia", entityType: "country" },
  { text: "Bonaire, Sint Eustatius and Saba", entityType: "country" },
  { text: "Bosnia and Herzegovina", entityType: "country" },
  { text: "Botswana", entityType: "country" },
  { text: "Bouvet Island", entityType: "country" },
  { text: "Brazil", entityType: "country" },
  { text: "British Indian Ocean Territory", entityType: "country" },
  { text: "Brunei Darussalam", entityType: "country" },
  { text: "Bulgaria", entityType: "country" },
  { text: "Burkina Faso", entityType: "country" },
  { text: "Burundi", entityType: "country" },
  { text: "Cabo Verde", entityType: "country" },
  { text: "Cambodia", entityType: "country" },
  { text: "Cameroon", entityType: "country" },
  { text: "Canada", entityType: "country" },
  { text: "Cayman Islands", entityType: "country" },
  { text: "Central African Republic", entityType: "country" },
  { text: "Chad", entityType: "country" },
  { text: "Chile", entityType: "country" },
  { text: "China", entityType: "country" },
  { text: "Christmas Island", entityType: "country" },
  { text: "Cocos Islands", entityType: "country" },
  { text: "Colombia", entityType: "country" },
  { text: "Comoros", entityType: "country" },
  { text: "Congo", entityType: "country" },
  { text: "Cook Islands", entityType: "country" },
  { text: "Costa Rica", entityType: "country" },
  { text: "Croatia", entityType: "country" },
  { text: "Cuba", entityType: "country" },
  { text: "Curaçao", entityType: "country" },
  { text: "Cyprus", entityType: "country" },
  { text: "Czechia", entityType: "country" },
  { text: "Côte d'Ivoire", entityType: "country" },
  { text: "Denmark", entityType: "country" },
  { text: "Djibouti", entityType: "country" },
  { text: "Dominica", entityType: "country" },
  { text: "Dominican Republic", entityType: "country" },
  { text: "Ecuador", entityType: "country" },
  { text: "Egypt", entityType: "country" },
  { text: "El Salvador", entityType: "country" },
  { text: "Equatorial Guinea", entityType: "country" },
  { text: "Eritrea", entityType: "country" },
  { text: "Estonia", entityType: "country" },
  { text: "Eswatini", entityType: "country" },
  { text: "Ethiopia", entityType: "country" },
  { text: "Falkland Islands", entityType: "country" },
  { text: "Faroe Islands", entityType: "country" },
  { text: "Fiji", entityType: "country" },
  { text: "Finland", entityType: "country" },
  { text: "France", entityType: "country" },
  { text: "French Guiana", entityType: "country" },
  { text: "French Polynesia", entityType: "country" },
  { text: "French Southern Territories", entityType: "country" },
  { text: "Gabon", entityType: "country" },
  { text: "Gambia", entityType: "country" },
  { text: "Georgia", entityType: "country" },
  { text: "Germany", entityType: "country" },
  { text: "Ghana", entityType: "country" },
  { text: "Gibraltar", entityType: "country" },
  { text: "Greece", entityType: "country" },
  { text: "Greenland", entityType: "country" },
  { text: "Grenada", entityType: "country" },
  { text: "Guadeloupe", entityType: "country" },
  { text: "Guam", entityType: "country" },
  { text: "Guatemala", entityType: "country" },
  { text: "Guernsey", entityType: "country" },
  { text: "Guinea", entityType: "country" },
  { text: "Guinea-Bissau", entityType: "country" },
  { text: "Guyana", entityType: "country" },
  { text: "Haiti", entityType: "country" },
  { text: "Heard Island and McDonald Islands", entityType: "country" },
  { text: "Holy See", entityType: "country" },
  { text: "Honduras", entityType: "country" },
  { text: "Hong Kong", entityType: "country" },
  { text: "Hungary", entityType: "country" },
  { text: "Iceland", entityType: "country" },
  { text: "India", entityType: "country" },
  { text: "Indonesia", entityType: "country" },
  { text: "Iran", entityType: "country" },
  { text: "Iraq", entityType: "country" },
  { text: "Ireland", entityType: "country" },
  { text: "Isle of Man", entityType: "country" },
  { text: "Israel", entityType: "country" },
  { text: "Italy", entityType: "country" },
  { text: "Jamaica", entityType: "country" },
  { text: "Japan", entityType: "country" },
  { text: "Jersey", entityType: "country" },
  { text: "Jordan", entityType: "country" },
  { text: "Kazakhstan", entityType: "country" },
  { text: "Kenya", entityType: "country" },
  { text: "Kiribati", entityType: "country" },
  { text: "South Korea", entityType: "country" },
  { text: "North Korea", entityType: "country" },
  { text: "Kuwait", entityType: "country" },
  { text: "Kyrgyzstan", entityType: "country" },
  { text: "Laos", entityType: "country" },
  { text: "Latvia", entityType: "country" },
  { text: "Lebanon", entityType: "country" },
  { text: "Lesotho", entityType: "country" },
  { text: "Liberia", entityType: "country" },
  { text: "Libya", entityType: "country" },
  { text: "Liechtenstein", entityType: "country" },
  { text: "Lithuania", entityType: "country" },
  { text: "Luxembourg", entityType: "country" },
  { text: "Macao", entityType: "country" },
  { text: "Madagascar", entityType: "country" },
  { text: "Malawi", entityType: "country" },
  { text: "Malaysia", entityType: "country" },
  { text: "Maldives", entityType: "country" },
  { text: "Mali", entityType: "country" },
  { text: "Malta", entityType: "country" },
  { text: "Marshall Islands (the)", entityType: "country" },
  { text: "Martinique", entityType: "country" },
  { text: "Mauritania", entityType: "country" },
  { text: "Mauritius", entityType: "country" },
  { text: "Mayotte", entityType: "country" },
  { text: "Mexico", entityType: "country" },
  { text: "Micronesia", entityType: "country" },
  { text: "Moldova", entityType: "country" },
  { text: "Monaco", entityType: "country" },
  { text: "Mongolia", entityType: "country" },
  { text: "Montenegro", entityType: "country" },
  { text: "Montserrat", entityType: "country" },
  { text: "Morocco", entityType: "country" },
  { text: "Mozambique", entityType: "country" },
  { text: "Myanmar", entityType: "country" },
  { text: "Namibia", entityType: "country" },
  { text: "Nauru", entityType: "country" },
  { text: "Nepal", entityType: "country" },
  { text: "Netherlands", entityType: "country" },
  { text: "New Caledonia", entityType: "country" },
  { text: "New Zealand", entityType: "country" },
  { text: "Nicaragua", entityType: "country" },
  { text: "Niger", entityType: "country" },
  { text: "Nigeria", entityType: "country" },
  { text: "Niue", entityType: "country" },
  { text: "Norfolk Island", entityType: "country" },
  { text: "Northern Mariana Islands", entityType: "country" },
  { text: "Norway", entityType: "country" },
  { text: "Oman", entityType: "country" },
  { text: "Pakistan", entityType: "country" },
  { text: "Palau", entityType: "country" },
  { text: "Palestine, State of", entityType: "country" },
  { text: "Panama", entityType: "country" },
  { text: "Papua New Guinea", entityType: "country" },
  { text: "Paraguay", entityType: "country" },
  { text: "Peru", entityType: "country" },
  { text: "Philippines (the)", entityType: "country" },
  { text: "Pitcairn", entityType: "country" },
  { text: "Poland", entityType: "country" },
  { text: "Portugal", entityType: "country" },
  { text: "Puerto Rico", entityType: "country" },
  { text: "Qatar", entityType: "country" },
  { text: "Republic of North Macedonia", entityType: "country" },
  { text: "Romania", entityType: "country" },
  { text: "Russian Federation (the)", entityType: "country" },
  { text: "Rwanda", entityType: "country" },
  { text: "Réunion", entityType: "country" },
  { text: "Saint Barthélemy", entityType: "country" },
  {
    text: "Saint Helena, Ascension and Tristan da Cunha",
    entityType: "country",
  },
  { text: "Saint Kitts and Nevis", entityType: "country" },
  { text: "Saint Lucia", entityType: "country" },
  { text: "Saint Martin", entityType: "country" },
  { text: "Saint Pierre and Miquelon", entityType: "country" },
  { text: "Saint Vincent and the Grenadines", entityType: "country" },
  { text: "Samoa", entityType: "country" },
  { text: "San Marino", entityType: "country" },
  { text: "Sao Tome and Principe", entityType: "country" },
  { text: "Saudi Arabia", entityType: "country" },
  { text: "Senegal", entityType: "country" },
  { text: "Serbia", entityType: "country" },
  { text: "Seychelles", entityType: "country" },
  { text: "Sierra Leone", entityType: "country" },
  { text: "Singapore", entityType: "country" },
  { text: "Sint Maarten (Dutch part)", entityType: "country" },
  { text: "Slovakia", entityType: "country" },
  { text: "Slovenia", entityType: "country" },
  { text: "Solomon Islands", entityType: "country" },
  { text: "Somalia", entityType: "country" },
  { text: "South Africa", entityType: "country" },
  {
    text: "South Georgia and the South Sandwich Islands",
    entityType: "country",
  },
  { text: "South Sudan", entityType: "country" },
  { text: "Spain", entityType: "country" },
  { text: "Sri Lanka", entityType: "country" },
  { text: "Sudan", entityType: "country" },
  { text: "Suriname", entityType: "country" },
  { text: "Svalbard and Jan Mayen", entityType: "country" },
  { text: "Sweden", entityType: "country" },
  { text: "Switzerland", entityType: "country" },
  { text: "Syrian Arab Republic", entityType: "country" },
  { text: "Taiwan", entityType: "country" },
  { text: "Tajikistan", entityType: "country" },
  { text: "Tanzania, United Republic of", entityType: "country" },
  { text: "Thailand", entityType: "country" },
  { text: "Timor-Leste", entityType: "country" },
  { text: "Togo", entityType: "country" },
  { text: "Tokelau", entityType: "country" },
  { text: "Tonga", entityType: "country" },
  { text: "Trinidad and Tobago", entityType: "country" },
  { text: "Tunisia", entityType: "country" },
  { text: "Turkey", entityType: "country" },
  { text: "Turkmenistan", entityType: "country" },
  { text: "Turks and Caicos Islands", entityType: "country" },
  { text: "Tuvalu", entityType: "country" },
  { text: "Uganda", entityType: "country" },
  { text: "Ukraine", entityType: "country" },
  { text: "United Arab Emirates", entityType: "country" },
  { text: "United Kingdom", entityType: "country" },
  { text: "The United Kingdom", entityType: "country" },
  { text: "UK", entityType: "country" },
  { text: "The United States", entityType: "country" },
  { text: "United States", entityType: "country" },
  { text: "US", entityType: "country" },
  { text: "USA", entityType: "country" },
  { text: "Uruguay", entityType: "country" },
  { text: "Uzbekistan", entityType: "country" },
  { text: "Vanuatu", entityType: "country" },
  { text: "Venezuela", entityType: "country" },
  { text: "Viet Nam", entityType: "country" },
  { text: "Virgin Islands", entityType: "country" },
  { text: "Wallis and Futuna", entityType: "country" },
  { text: "Western Sahara", entityType: "country" },
  { text: "Yemen", entityType: "country" },
  { text: "Zambia", entityType: "country" },
  { text: "Zimbabwe", entityType: "country" },
  { text: "Aberdeen", entityType: "UScountry" },
  { text: "Abilene", entityType: "UScountry" },
  { text: "Aguada", entityType: "UScountry" },
  { text: "Aguas", entityType: "UScountry" },
  { text: "Aibonito", entityType: "UScountry" },
  { text: "Akron", entityType: "UScountry" },
  { text: "Albany", entityType: "UScountry" },
  { text: "Albuquerque", entityType: "UScountry" },
  { text: "Alexandria", entityType: "UScountry" },
  { text: "Allentown", entityType: "UScountry" },
  { text: "Alta", entityType: "UScountry" },
  { text: "Alto", entityType: "UScountry" },
  { text: "Amarillo", entityType: "UScountry" },
  { text: "Anaheim", entityType: "UScountry" },
  { text: "Anchorage", entityType: "UScountry" },
  { text: "Ann Arbor", entityType: "UScountry" },
  { text: "Antioch", entityType: "UScountry" },
  { text: "Apple Valley", entityType: "UScountry" },
  { text: "Appleton", entityType: "UScountry" },
  { text: "Arlington", entityType: "UScountry" },
  { text: "Arroyo", entityType: "UScountry" },
  { text: "Arvada", entityType: "UScountry" },
  { text: "Asheville", entityType: "UScountry" },
  { text: "Athens", entityType: "UScountry" },
  { text: "Atlanta", entityType: "UScountry" },
  { text: "Atlantic City", entityType: "UScountry" },
  { text: "Augusta", entityType: "UScountry" },
  { text: "Aurora", entityType: "UScountry" },
  { text: "Austin", entityType: "UScountry" },
  { text: "Baja", entityType: "UScountry" },
  { text: "Bakersfield", entityType: "UScountry" },
  { text: "Baltimore", entityType: "UScountry" },
  { text: "Barceloneta", entityType: "UScountry" },
  { text: "Barnstable", entityType: "UScountry" },
  { text: "Baton Rouge", entityType: "UScountry" },
  { text: "Bayamón", entityType: "UScountry" },
  { text: "Beaumont", entityType: "UScountry" },
  { text: "Bel Air", entityType: "UScountry" },
  { text: "Bellevue", entityType: "UScountry" },
  { text: "Berkeley", entityType: "UScountry" },
  { text: "Bethlehem", entityType: "UScountry" },
  { text: "Billings", entityType: "UScountry" },
  { text: "Birmingham", entityType: "UScountry" },
  { text: "Bloomington", entityType: "UScountry" },
  { text: "Boise", entityType: "UScountry" },
  { text: "Boise City", entityType: "UScountry" },
  { text: "Bonita Springs", entityType: "UScountry" },
  { text: "Boston", entityType: "UScountry" },
  { text: "Boulder", entityType: "UScountry" },
  { text: "Bradenton", entityType: "UScountry" },
  { text: "Bremerton", entityType: "UScountry" },
  { text: "Bridgeport", entityType: "UScountry" },
  { text: "Brighton", entityType: "UScountry" },
  { text: "Brownsville", entityType: "UScountry" },
  { text: "Bryan", entityType: "UScountry" },
  { text: "Buffalo", entityType: "UScountry" },
  { text: "Burbank", entityType: "UScountry" },
  { text: "Burlington", entityType: "UScountry" },
  { text: "Cambridge", entityType: "UScountry" },
  { text: "Camuy", entityType: "UScountry" },
  { text: "Canton", entityType: "UScountry" },
  { text: "Cape Coral", entityType: "UScountry" },
  { text: "Carolina", entityType: "UScountry" },
  { text: "Carrollton", entityType: "UScountry" },
  { text: "Cary", entityType: "UScountry" },
  { text: "Cathedral City", entityType: "UScountry" },
  { text: "Cayey", entityType: "UScountry" },
  { text: "Cedar Rapids", entityType: "UScountry" },
  { text: "Champaign", entityType: "UScountry" },
  { text: "Chandler", entityType: "UScountry" },
  { text: "Charleston", entityType: "UScountry" },
  { text: "Charlotte", entityType: "UScountry" },
  { text: "Chattanooga", entityType: "UScountry" },
  { text: "Chesapeake", entityType: "UScountry" },
  { text: "Chicago", entityType: "UScountry" },
  { text: "Chula Vista", entityType: "UScountry" },
  { text: "Ciales", entityType: "UScountry" },
  { text: "Cincinnati", entityType: "UScountry" },
  { text: "Clarke County", entityType: "UScountry" },
  { text: "Clarksville", entityType: "UScountry" },
  { text: "Clearwater", entityType: "UScountry" },
  { text: "Cleveland", entityType: "UScountry" },
  { text: "Coamo", entityType: "UScountry" },
  { text: "College Station", entityType: "UScountry" },
  { text: "Colorado Springs", entityType: "UScountry" },
  { text: "Columbia", entityType: "UScountry" },
  { text: "Columbus", entityType: "UScountry" },
  { text: "Concord", entityType: "UScountry" },
  { text: "Coral Springs", entityType: "UScountry" },
  { text: "Corona", entityType: "UScountry" },
  { text: "Corozal", entityType: "UScountry" },
  { text: "Corpus Christi", entityType: "UScountry" },
  { text: "Costa Mesa", entityType: "UScountry" },
  { text: "Dallas", entityType: "UScountry" },
  { text: "Daly City", entityType: "UScountry" },
  { text: "Danbury", entityType: "UScountry" },
  { text: "Davenport", entityType: "UScountry" },
  { text: "Davidson County", entityType: "UScountry" },
  { text: "Dayton", entityType: "UScountry" },
  { text: "Daytona Beach", entityType: "UScountry" },
  { text: "Deltona", entityType: "UScountry" },
  { text: "Denton", entityType: "UScountry" },
  { text: "Denver", entityType: "UScountry" },
  { text: "Des Moines", entityType: "UScountry" },
  { text: "Detroit", entityType: "UScountry" },
  { text: "Dorado", entityType: "UScountry" },
  { text: "Downey", entityType: "UScountry" },
  { text: "Duluth", entityType: "UScountry" },
  { text: "Durham", entityType: "UScountry" },
  { text: "Díaz", entityType: "UScountry" },
  { text: "El Monte", entityType: "UScountry" },
  { text: "El Paso", entityType: "UScountry" },
  { text: "Elizabeth", entityType: "UScountry" },
  { text: "Elk Grove", entityType: "UScountry" },
  { text: "Elkhart", entityType: "UScountry" },
  { text: "Erie", entityType: "UScountry" },
  { text: "Escondido", entityType: "UScountry" },
  { text: "Eugene", entityType: "UScountry" },
  { text: "Evansville", entityType: "UScountry" },
  { text: "Fairfield", entityType: "UScountry" },
  { text: "Fargo", entityType: "UScountry" },
  { text: "Fayetteville", entityType: "UScountry" },
  { text: "Fitchburg", entityType: "UScountry" },
  { text: "Flint", entityType: "UScountry" },
  { text: "Florida", entityType: "UScountry" },
  { text: "Fontana", entityType: "UScountry" },
  { text: "Fort Collins", entityType: "UScountry" },
  { text: "Fort Lauderdale", entityType: "UScountry" },
  { text: "Fort Smith", entityType: "UScountry" },
  { text: "Fort Walton Beach", entityType: "UScountry" },
  { text: "Fort Wayne", entityType: "UScountry" },
  { text: "Fort Worth", entityType: "UScountry" },
  { text: "Frederick", entityType: "UScountry" },
  { text: "Fremont", entityType: "UScountry" },
  { text: "Fresno", entityType: "UScountry" },
  { text: "Fullerton", entityType: "UScountry" },
  { text: "Gainesville", entityType: "UScountry" },
  { text: "Garden Grove", entityType: "UScountry" },
  { text: "Garland", entityType: "UScountry" },
  { text: "Gastonia", entityType: "UScountry" },
  { text: "Germán", entityType: "UScountry" },
  { text: "Gilbert", entityType: "UScountry" },
  { text: "Glendale", entityType: "UScountry" },
  { text: "Grand Prairie", entityType: "UScountry" },
  { text: "Grand Rapids", entityType: "UScountry" },
  { text: "Grayslake", entityType: "UScountry" },
  { text: "Green Bay", entityType: "UScountry" },
  { text: "GreenBay", entityType: "UScountry" },
  { text: "Greensboro", entityType: "UScountry" },
  { text: "Greenville", entityType: "UScountry" },
  { text: "Guayanilla", entityType: "UScountry" },
  { text: "Gulfport-Biloxi", entityType: "UScountry" },
  { text: "Gurabo", entityType: "UScountry" },
  { text: "Hagerstown", entityType: "UScountry" },
  { text: "Hampton", entityType: "UScountry" },
  { text: "Harlingen", entityType: "UScountry" },
  { text: "Harrisburg", entityType: "UScountry" },
  { text: "Hartford", entityType: "UScountry" },
  { text: "Hatillo", entityType: "UScountry" },
  { text: "Havre de Grace", entityType: "UScountry" },
  { text: "Hayward", entityType: "UScountry" },
  { text: "Hemet", entityType: "UScountry" },
  { text: "Henderson", entityType: "UScountry" },
  { text: "Hesperia", entityType: "UScountry" },
  { text: "Hialeah", entityType: "UScountry" },
  { text: "Hickory", entityType: "UScountry" },
  { text: "High Point", entityType: "UScountry" },
  { text: "Hollywood", entityType: "UScountry" },
  { text: "Honolulu", entityType: "UScountry" },
  { text: "Houma", entityType: "UScountry" },
  { text: "Houston", entityType: "UScountry" },
  { text: "Howell", entityType: "UScountry" },
  { text: "Humacao", entityType: "UScountry" },
  { text: "Huntington", entityType: "UScountry" },
  { text: "Huntington Beach", entityType: "UScountry" },
  { text: "Huntsville", entityType: "UScountry" },
  { text: "Independence", entityType: "UScountry" },
  { text: "Indianapolis", entityType: "UScountry" },
  { text: "Inglewood", entityType: "UScountry" },
  { text: "Irvine", entityType: "UScountry" },
  { text: "Irving", entityType: "UScountry" },
  { text: "Isabel", entityType: "UScountry" },
  { text: "Jackson", entityType: "UScountry" },
  { text: "Jacksonville", entityType: "UScountry" },
  { text: "Jayuya", entityType: "UScountry" },
  { text: "Jefferson", entityType: "UScountry" },
  { text: "Jersey City", entityType: "UScountry" },
  { text: "Johnson City", entityType: "UScountry" },
  { text: "Joliet", entityType: "UScountry" },
  { text: "Juan", entityType: "UScountry" },
  { text: "Kailua", entityType: "UScountry" },
  { text: "Kalamazoo", entityType: "UScountry" },
  { text: "Kaneohe", entityType: "UScountry" },
  { text: "Kansas City", entityType: "UScountry" },
  { text: "Kennewick", entityType: "UScountry" },
  { text: "Kenosha", entityType: "UScountry" },
  { text: "Killeen", entityType: "UScountry" },
  { text: "Kissimmee", entityType: "UScountry" },
  { text: "Knoxville", entityType: "UScountry" },
  { text: "Lacey", entityType: "UScountry" },
  { text: "Lafayette", entityType: "UScountry" },
  { text: "Lajas", entityType: "UScountry" },
  { text: "Lake Charles", entityType: "UScountry" },
  { text: "Lakeland", entityType: "UScountry" },
  { text: "Lakewood", entityType: "UScountry" },
  { text: "Lancaster", entityType: "UScountry" },
  { text: "Lansing", entityType: "UScountry" },
  { text: "Laredo", entityType: "UScountry" },
  { text: "Las", entityType: "UScountry" },
  { text: "Las", entityType: "UScountry" },
  { text: "Las Cruces", entityType: "UScountry" },
  { text: "Las Vegas", entityType: "UScountry" },
  { text: "Layton", entityType: "UScountry" },
  { text: "Leominster", entityType: "UScountry" },
  { text: "Lewisville", entityType: "UScountry" },
  { text: "Lexington", entityType: "UScountry" },
  { text: "Lincoln", entityType: "UScountry" },
  { text: "Little Rock", entityType: "UScountry" },
  { text: "Loiza", entityType: "UScountry" },
  { text: "Long Beach", entityType: "UScountry" },
  { text: "Lorain", entityType: "UScountry" },
  { text: "Lorenzo", entityType: "UScountry" },
  { text: "Los Angeles", entityType: "UScountry" },
  { text: "Louisville", entityType: "UScountry" },
  { text: "Lowell", entityType: "UScountry" },
  { text: "Lubbock", entityType: "UScountry" },
  { text: "Macon", entityType: "UScountry" },
  { text: "Madison", entityType: "UScountry" },
  { text: "Manatí", entityType: "UScountry" },
  { text: "Manchester", entityType: "UScountry" },
  { text: "Marina", entityType: "UScountry" },
  { text: "Marysville", entityType: "UScountry" },
  { text: "Maunabo", entityType: "UScountry" },
  { text: "McAllen", entityType: "UScountry" },
  { text: "McHenry", entityType: "UScountry" },
  { text: "Medford", entityType: "UScountry" },
  { text: "Melbourne", entityType: "UScountry" },
  { text: "Memphis", entityType: "UScountry" },
  { text: "Merced", entityType: "UScountry" },
  { text: "Mesa", entityType: "UScountry" },
  { text: "Mesquite", entityType: "UScountry" },
  { text: "Miami", entityType: "UScountry" },
  { text: "Milwaukee", entityType: "UScountry" },
  { text: "Minneapolis", entityType: "UScountry" },
  { text: "Miramar", entityType: "UScountry" },
  { text: "Mission Viejo", entityType: "UScountry" },
  { text: "Mobile", entityType: "UScountry" },
  { text: "Moca", entityType: "UScountry" },
  { text: "Modesto", entityType: "UScountry" },
  { text: "Monroe", entityType: "UScountry" },
  { text: "Monterey", entityType: "UScountry" },
  { text: "Montgomery", entityType: "UScountry" },
  { text: "Moreno Valley", entityType: "UScountry" },
  { text: "Murfreesboro", entityType: "UScountry" },
  { text: "Murrieta", entityType: "UScountry" },
  { text: "Muskegon", entityType: "UScountry" },
  { text: "Myrtle Beach", entityType: "UScountry" },
  { text: "Naguabo", entityType: "UScountry" },
  { text: "Naperville", entityType: "UScountry" },
  { text: "Naples", entityType: "UScountry" },
  { text: "Nashua", entityType: "UScountry" },
  { text: "Nashville", entityType: "UScountry" },
  { text: "New Bedford", entityType: "UScountry" },
  { text: "New Haven", entityType: "UScountry" },
  { text: "New London", entityType: "UScountry" },
  { text: "New Orleans", entityType: "UScountry" },
  { text: "New York", entityType: "UScountry" },
  { text: "New York City", entityType: "UScountry" },
  { text: "Newark", entityType: "UScountry" },
  { text: "Newburgh", entityType: "UScountry" },
  { text: "Newport News", entityType: "UScountry" },
  { text: "Norfolk", entityType: "UScountry" },
  { text: "Normal", entityType: "UScountry" },
  { text: "Norman", entityType: "UScountry" },
  { text: "North Charleston", entityType: "UScountry" },
  { text: "North Las Vegas", entityType: "UScountry" },
  { text: "North Port", entityType: "UScountry" },
  { text: "Norwalk", entityType: "UScountry" },
  { text: "Norwich", entityType: "UScountry" },
  { text: "Oakland", entityType: "UScountry" },
  { text: "Ocala", entityType: "UScountry" },
  { text: "Oceanside", entityType: "UScountry" },
  { text: "Odessa", entityType: "UScountry" },
  { text: "Ogden", entityType: "UScountry" },
  { text: "Oklahoma City", entityType: "UScountry" },
  { text: "Olathe", entityType: "UScountry" },
  { text: "Olympia", entityType: "UScountry" },
  { text: "Omaha", entityType: "UScountry" },
  { text: "Ontario", entityType: "UScountry" },
  { text: "Orange", entityType: "UScountry" },
  { text: "Orem", entityType: "UScountry" },
  { text: "Orlando", entityType: "UScountry" },
  { text: "Orocovis", entityType: "UScountry" },
  { text: "Overland Park", entityType: "UScountry" },
  { text: "Oxnard", entityType: "UScountry" },
  { text: "Palm Bay", entityType: "UScountry" },
  { text: "Palm Springs", entityType: "UScountry" },
  { text: "Palmdale", entityType: "UScountry" },
  { text: "Panama City", entityType: "UScountry" },
  { text: "Pasadena", entityType: "UScountry" },
  { text: "Paterson", entityType: "UScountry" },
  { text: "Pembroke Pines", entityType: "UScountry" },
  { text: "Pensacola", entityType: "UScountry" },
  { text: "Peoria", entityType: "UScountry" },
  { text: "Peñuelas", entityType: "UScountry" },
  { text: "Philadelphia", entityType: "UScountry" },
  { text: "Phoenix", entityType: "UScountry" },
  { text: "Pittsburgh", entityType: "UScountry" },
  { text: "Plano", entityType: "UScountry" },
  { text: "Pomona", entityType: "UScountry" },
  { text: "Pompano Beach", entityType: "UScountry" },
  { text: "Port Arthur", entityType: "UScountry" },
  { text: "Port Orange", entityType: "UScountry" },
  { text: "Port Saint Lucie", entityType: "UScountry" },
  { text: "Port St. Lucie", entityType: "UScountry" },
  { text: "Portland", entityType: "UScountry" },
  { text: "Portsmouth", entityType: "UScountry" },
  { text: "Poughkeepsie", entityType: "UScountry" },
  { text: "Providence", entityType: "UScountry" },
  { text: "Provo", entityType: "UScountry" },
  { text: "Pueblo", entityType: "UScountry" },
  { text: "Punta Gorda", entityType: "UScountry" },
  { text: "Quebradillas", entityType: "UScountry" },
  { text: "Racine", entityType: "UScountry" },
  { text: "Raleigh", entityType: "UScountry" },
  { text: "Rancho Cucamonga", entityType: "UScountry" },
  { text: "Reading", entityType: "UScountry" },
  { text: "Redding", entityType: "UScountry" },
  { text: "Reno", entityType: "UScountry" },
  { text: "Richland", entityType: "UScountry" },
  { text: "Richmond", entityType: "UScountry" },
  { text: "Richmond County", entityType: "UScountry" },
  { text: "Rio", entityType: "UScountry" },
  { text: "Riverside", entityType: "UScountry" },
  { text: "Roanoke", entityType: "UScountry" },
  { text: "Rochester", entityType: "UScountry" },
  { text: "Rockford", entityType: "UScountry" },
  { text: "Rojo", entityType: "UScountry" },
  { text: "Roseville", entityType: "UScountry" },
  { text: "Round Lake Beach", entityType: "UScountry" },
  { text: "Sabana", entityType: "UScountry" },
  { text: "Sacramento", entityType: "UScountry" },
  { text: "Saginaw", entityType: "UScountry" },
  { text: "Saint Louis", entityType: "UScountry" },
  { text: "Saint Paul", entityType: "UScountry" },
  { text: "Saint Petersburg", entityType: "UScountry" },
  { text: "Salem", entityType: "UScountry" },
  { text: "Salinas", entityType: "UScountry" },
  { text: "Salinas", entityType: "UScountry" },
  { text: "Salt Lake City", entityType: "UScountry" },
  { text: "San Antonio", entityType: "UScountry" },
  { text: "San Bernardino", entityType: "UScountry" },
  { text: "San Buenaventura", entityType: "UScountry" },
  { text: "San Diego", entityType: "UScountry" },
  { text: "San Francisco", entityType: "UScountry" },
  { text: "San Jose", entityType: "UScountry" },
  { text: "Santa Ana", entityType: "UScountry" },
  { text: "Santa Barbara", entityType: "UScountry" },
  { text: "Santa Clara", entityType: "UScountry" },
  { text: "Santa Clarita", entityType: "UScountry" },
  { text: "Santa Cruz", entityType: "UScountry" },
  { text: "Santa Maria", entityType: "UScountry" },
  { text: "Santa Rosa", entityType: "UScountry" },
  { text: "Sarasota", entityType: "UScountry" },
  { text: "Savannah", entityType: "UScountry" },
  { text: "Scottsdale", entityType: "UScountry" },
  { text: "Scranton", entityType: "UScountry" },
  { text: "Seaside", entityType: "UScountry" },
  { text: "Seattle", entityType: "UScountry" },
  { text: "Sebastian", entityType: "UScountry" },
  { text: "Sebastián", entityType: "UScountry" },
  { text: "Shreveport", entityType: "UScountry" },
  { text: "Simi Valley", entityType: "UScountry" },
  { text: "Sioux City", entityType: "UScountry" },
  { text: "Sioux Falls", entityType: "UScountry" },
  { text: "South Bend", entityType: "UScountry" },
  { text: "South Lyon", entityType: "UScountry" },
  { text: "Spartanburg", entityType: "UScountry" },
  { text: "Spokane", entityType: "UScountry" },
  { text: "Springdale", entityType: "UScountry" },
  { text: "Springfield", entityType: "UScountry" },
  { text: "St. Louis", entityType: "UScountry" },
  { text: "St. Paul", entityType: "UScountry" },
  { text: "St. Petersburg", entityType: "UScountry" },
  { text: "Stamford", entityType: "UScountry" },
  { text: "Sterling Heights", entityType: "UScountry" },
  { text: "Stockton", entityType: "UScountry" },
  { text: "Sunnyvale", entityType: "UScountry" },
  { text: "Syracuse", entityType: "UScountry" },
  { text: "Tacoma", entityType: "UScountry" },
  { text: "Tallahassee", entityType: "UScountry" },
  { text: "Tampa", entityType: "UScountry" },
  { text: "Temecula", entityType: "UScountry" },
  { text: "Tempe", entityType: "UScountry" },
  { text: "Thornton", entityType: "UScountry" },
  { text: "Thousand Oaks", entityType: "UScountry" },
  { text: "Toledo", entityType: "UScountry" },
  { text: "Topeka", entityType: "UScountry" },
  { text: "Torrance", entityType: "UScountry" },
  { text: "Trenton", entityType: "UScountry" },
  { text: "Tucson", entityType: "UScountry" },
  { text: "Tulsa", entityType: "UScountry" },
  { text: "Tuscaloosa", entityType: "UScountry" },
  { text: "Facebook", entityType: "UScountry" },
  { text: "Tyler", entityType: "UScountry" },
  { text: "Utica", entityType: "UScountry" },
  { text: "Vallejo", entityType: "UScountry" },
  { text: "Vancouver", entityType: "UScountry" },
  { text: "Vega", entityType: "UScountry" },
  { text: "Vega", entityType: "UScountry" },
  { text: "Vero Beach", entityType: "UScountry" },
  { text: "Victorville", entityType: "UScountry" },
  { text: "Vieques", entityType: "UScountry" },
  { text: "Virginia Beach", entityType: "UScountry" },
  { text: "Visalia", entityType: "UScountry" },
  { text: "Waco", entityType: "UScountry" },
  { text: "Warren", entityType: "UScountry" },
  { text: "Washington", entityType: "UScountry" },
  { text: "Waterbury", entityType: "UScountry" },
  { text: "Waterloo", entityType: "UScountry" },
  { text: "West Covina", entityType: "UScountry" },
  { text: "West Valley City", entityType: "UScountry" },
  { text: "Westminster", entityType: "UScountry" },
  { text: "Wichita", entityType: "UScountry" },
  { text: "Wilmington", entityType: "UScountry" },
  { text: "Winston", entityType: "UScountry" },
  { text: "Winter Haven", entityType: "UScountry" },
  { text: "Worcester", entityType: "UScountry" },
  { text: "Yabucoa", entityType: "UScountry" },
  { text: "Yakima", entityType: "UScountry" },
  { text: "Yauco", entityType: "UScountry" },
  { text: "Yonkers", entityType: "UScountry" },
  { text: "York", entityType: "UScountry" },
  { text: "Youngstown", entityType: "UScountry" },
  { text: "ALABAMA", entityType: "UScountry" },
  { text: "ALASKA", entityType: "UScountry" },
  { text: "AMERICAN SAMOA", entityType: "UScountry" },
  { text: "ARIZONA", entityType: "UScountry" },
  { text: "ARKANSAS", entityType: "UScountry" },
  { text: "CALIFORNIA", entityType: "UScountry" },
  { text: "COLORADO", entityType: "UScountry" },
  { text: "CONNECTICUT", entityType: "UScountry" },
  { text: "DELAWARE", entityType: "UScountry" },
  { text: "DISTRICT OF COLUMBIA", entityType: "UScountry" },
  { text: "FEDERATED STATES OF MICRONESIA", entityType: "UScountry" },
  { text: "FLORIDA", entityType: "UScountry" },
  { text: "GEORGIA", entityType: "UScountry" },
  { text: "GUAM", entityType: "UScountry" },
  { text: "HAWAII", entityType: "UScountry" },
  { text: "IDAHO", entityType: "UScountry" },
  { text: "ILLINOIS", entityType: "UScountry" },
  { text: "INDIANA", entityType: "UScountry" },
  { text: "IOWA", entityType: "UScountry" },
  { text: "KANSAS", entityType: "UScountry" },
  { text: "KENTUCKY", entityType: "UScountry" },
  { text: "LOUISIANA", entityType: "UScountry" },
  { text: "MAINE", entityType: "UScountry" },
  { text: "MARSHALL ISLANDS", entityType: "UScountry" },
  { text: "MARYLAND", entityType: "UScountry" },
  { text: "MASSACHUSETTS", aentityType: "UScountry" },
  { text: "MINNESOTA", entityType: "UScountry" },
  { text: "MICHIGAN", entityType: "UScountry" },
  { text: "MISSISSIPPI", entityType: "UScountry" },
  { text: "MISSOURI", entityType: "UScountry" },
  { text: "MONTANA", entityType: "UScountry" },
  { text: "NEBRASKA", entityType: "UScountry" },
  { text: "NEVADA", entityType: "UScountry" },
  { text: "NEW HAMPSHIRE", entityType: "UScountry" },
  { text: "NEW JERSEY", entityType: "UScountry" },
  { text: "NEW MEXICO", entityType: "UScountry" },
  { text: "NEW YORK", entityType: "UScountry" },
  { text: "NORTH CAROLINA", entityType: "UScountry" },
  { text: "NORTH DAKOTA", entityType: "UScountry" },
  { text: "NORTHERN MARIANA ISLANDS", entityType: "UScountry" },
  { text: "OHIO", entityType: "UScountry" },
  { text: "OKLAHOMA", entityType: "UScountry" },
  { text: "OREGON", entityType: "UScountry" },
  { text: "PALAU", entityType: "UScountry" },
  { text: "PENNSYLVANIA", entityType: "UScountry" },
  { text: "PUERTO RICO", entityType: "UScountry" },
  { text: "RHODE ISLAND", entityType: "UScountry" },
  { text: "SOUTH CAROLINA", entityType: "UScountry" },
  { text: "SOUTH DAKOTA", entityType: "UScountry" },
  { text: "TENNESSEE", entityType: "UScountry" },
  { text: "TEXAS", entityType: "UScountry" },
  { text: "UTAH", entityType: "UScountry" },
  { text: "VERMONT", entityType: "UScountry" },
  { text: "VIRGIN ISLANDS", entityType: "UScountry" },
  { text: "VIRGINIA", entityType: "UScountry" },
  { text: "WASHINGTON", entityType: "UScountry" },
  { text: "WEST VIRGINIA", entityType: "UScountry" },
  { text: "WISCONSIN", entityType: "UScountry" },
  { text: "WYOMING", entityType: "UScountry" },
];

// Recieve and Send Article Data
app.post("/sendData", (req, res) => {
  var monkey = req.body.map((x) => x.title);
  var keys = req.body.map((x) => x.publishedAt);
  var info = req.body.map((x) => {
    return {
      image: x.urlToImage,
      title: x.title,
      desc: x.description,
      pub: x.publishedAt,
      auth: x.author,
      url: x.url,
    };
  });

  // Learn from the training data.
  myNER.learn(trainingData);
  // Since recognize() requires tokens, use wink-tokenizer.
  var winkTokenizer = require("wink-tokenizer");
  // Instantiate it and extract tokenize() api.
  var tokenize = winkTokenizer().tokenize;
  // Tokenize the sentence.

  var tokens = tokenize(`${monkey[0]}`);
  var tokensone = tokenize(`${monkey[1]}`);
  var tokenstwo = tokenize(`${monkey[2]}`);
  var tokensthree = tokenize(`${monkey[3]}`);
  var tokensfour = tokenize(`${monkey[4]}`);
  var tokensfive = tokenize(`${monkey[5]}`);
  var tokenssix = tokenize(`${monkey[6]}`);
  var tokensseven = tokenize(`${monkey[7]}`);
  var tokenseight = tokenize(`${monkey[8]}`);
  var tokensnine = tokenize(`${monkey[9]}`);
  var tokensten = tokenize(`${monkey[10]}`);
  var tokenseleven = tokenize(`${monkey[11]}`);
  var tokenstwelve = tokenize(`${monkey[12]}`);
  var tokensthirteen = tokenize(`${monkey[13]}`);
  var tokensfourteen = tokenize(`${monkey[14]}`);
  var tokensfifteen = tokenize(`${monkey[15]}`);
  var tokenssixteen = tokenize(`${monkey[16]}`);
  var tokensseventeen = tokenize(`${monkey[17]}`);
  var tokenseighteen = tokenize(`${monkey[18]}`);
  var tokensnineteen = tokenize(`${monkey[19]}`);

  // Simply Detect entities!
  tokens = myNER.recognize(tokens);
  tokensone = myNER.recognize(tokensone);
  tokens = myNER.recognize(tokenstwo);
  tokens = myNER.recognize(tokensthree);
  tokens = myNER.recognize(tokensfour);
  tokens = myNER.recognize(tokensfive);
  tokens = myNER.recognize(tokenssix);
  tokens = myNER.recognize(tokensseven);
  tokens = myNER.recognize(tokenseight);
  tokens = myNER.recognize(tokensnine);
  tokens = myNER.recognize(tokensten);
  tokens = myNER.recognize(tokenseleven);
  tokens = myNER.recognize(tokenstwelve);
  tokens = myNER.recognize(tokensthirteen);
  tokens = myNER.recognize(tokensfourteen);
  tokens = myNER.recognize(tokensfifteen);
  tokens = myNER.recognize(tokenssixteen);
  tokens = myNER.recognize(tokensseventeen);
  tokens = myNER.recognize(tokenseighteen);
  tokens = myNER.recognize(tokensnineteen);

  let locationType = tokens.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });

  let locationType1 = tokensone.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType2 = tokenstwo.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType3 = tokensthree.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType4 = tokensfour.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType5 = tokensfive.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType6 = tokenssix.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType7 = tokensseven.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType8 = tokenseight.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType9 = tokensnine.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType10 = tokensten.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });

  let locationType11 = tokenseleven.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType12 = tokenstwelve.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType13 = tokensthirteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType14 = tokensfourteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType15 = tokensfifteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType16 = tokenssixteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType17 = tokensseventeen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType18 = tokenseighteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });
  let locationType19 = tokensnineteen.map((x) => {
    if (x.entityType === "country" || "UScountry") {
      return x.originalSeq;
    }
  });

  //let place = locationType.toString()

  let spot = locationType.filter((x) => typeof x === "object");
  let spot1 = locationType1.filter((x) => typeof x === "object");
  let spot2 = locationType2.filter((x) => typeof x === "object");
  let spot3 = locationType3.filter((x) => typeof x === "object");
  let spot4 = locationType4.filter((x) => typeof x === "object");
  let spot5 = locationType5.filter((x) => typeof x === "object");
  let spot6 = locationType6.filter((x) => typeof x === "object");
  let spot7 = locationType7.filter((x) => typeof x === "object");
  let spot8 = locationType8.filter((x) => typeof x === "object");
  let spot9 = locationType9.filter((x) => typeof x === "object");
  let spot10 = locationType10.filter((x) => typeof x === "object");
  let spot11 = locationType11.filter((x) => typeof x === "object");
  let spot12 = locationType12.filter((x) => typeof x === "object");
  let spot13 = locationType13.filter((x) => typeof x === "object");
  let spot14 = locationType14.filter((x) => typeof x === "object");
  let spot15 = locationType15.filter((x) => typeof x === "object");
  let spot16 = locationType16.filter((x) => typeof x === "object");
  let spot17 = locationType17.filter((x) => typeof x === "object");
  let spot18 = locationType18.filter((x) => typeof x === "object");
  let spot19 = locationType19.filter((x) => typeof x === "object");

  console.log(info);

  let placesArr = [
    [
      spot[0],
      info[0].content,
      info[0].image,
      info[0].desc,
      info[0].auth,
      info[0].title,
      info[0].pub,
      info[0].url,
    ],
    [
      spot1[0],
      info[1].content,
      info[1].image,
      info[1].desc,
      info[1].auth,
      info[1].title,
      info[1].pub,
      info[1].url,
    ],
    [
      spot2[0],
      info[2].content,
      info[2].image,
      info[2].desc,
      info[2].auth,
      info[2].title,
      info[2].pub,
      info[2].url,
    ],
    [
      spot3[0],
      info[3].content,
      info[3].image,
      info[3].desc,
      info[3].auth,
      info[3].title,
      info[3].pub,
      info[3].url,
    ],
    [
      spot4[0],
      info[4].content,
      info[4].image,
      info[4].desc,
      info[4].auth,
      info[4].title,
      info[4].pub,
      info[4].url,
    ],
    [
      spot5[0],
      info[5].content,
      info[5].image,
      info[5].desc,
      info[5].auth,
      info[5].title,
      info[5].pub,
      info[5].url,
    ],
    [
      spot6[0],
      info[6].content,
      info[6].image,
      info[6].desc,
      info[6].auth,
      info[6].title,
      info[6].pub,
      info[6].url,
    ],
    [
      spot7[0],
      info[7].content,
      info[7].image,
      info[7].desc,
      info[7].auth,
      info[7].title,
      info[7].pub,
      info[7].url,
    ],
    [
      spot8[0],
      info[8].content,
      info[8].image,
      info[8].desc,
      info[8].auth,
      info[8].title,
      info[8].pub,
      info[8].url,
    ],
    [
      spot9[0],
      info[9].content,
      info[9].image,
      info[9].desc,
      info[9].auth,
      info[9].title,
      info[9].pub,
      info[9].url,
    ],
    [
      spot10[0],
      info[10].content,
      info[10].image,
      info[10].desc,
      info[10].auth,
      info[10].title,
      info[10].pub,
      info[10].url,
    ],
    [
      spot11[0],
      info[11].content,
      info[11].image,
      info[11].desc,
      info[11].auth,
      info[11].title,
      info[11].pub,
      info[11].url,
    ],
    [
      spot12[0],
      info[12].content,
      info[12].image,
      info[12].desc,
      info[12].auth,
      info[12].title,
      info[12].pub,
      info[12].url,
    ],
    [
      spot13[0],
      info[13].content,
      info[13].image,
      info[13].desc,
      info[13].auth,
      info[13].title,
      info[13].pub,
      info[13].url,
    ],
    [
      spot14[0],
      info[14].content,
      info[14].image,
      info[14].desc,
      info[14].auth,
      info[14].title,
      info[14].pub,
      info[14].url,
    ],
    [
      spot15[0],
      info[15].content,
      info[15].image,
      info[15].desc,
      info[15].auth,
      info[15].title,
      info[15].pub,
      info[15].url,
    ],
    [
      spot16[0],
      info[16].content,
      info[16].image,
      info[16].desc,
      info[16].auth,
      info[16].title,
      info[16].pub,
      info[16].url,
    ],
    [
      spot17[0],
      info[17].content,
      info[17].image,
      info[17].desc,
      info[17].auth,
      info[17].title,
      info[17].pub,
      info[17].url,
    ],
    [
      spot18[0],
      info[18].content,
      info[18].image,
      info[18].desc,
      info[18].auth,
      info[18].title,
      info[18].pub,
      info[18].url,
    ],
    [
      spot19[0],
      info[19].content,
      info[19].image,
      info[19].desc,
      info[19].auth,
      info[19].title,
      info[19].pub,
      info[19].url,
    ],
  ];

  res.status(200).send(placesArr);
});
