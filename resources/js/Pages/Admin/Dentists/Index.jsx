import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function Index() {
    const dentists =
        [{ "id": 1, "full_name": "Madison Klamp", "practise_from": "5/4/2024", "gender": "Male", "rating": 4.3, "services": "Invisalign", "clinic": "Henderson", "phone": "289-220-1378", "email": "mklamp0@washingtonpost.com", "experience": 19 },
        { "id": 2, "full_name": "Phip Simkovitz", "practise_from": "12/6/2024", "gender": "Male", "rating": 3.6, "services": "Canal Tooth Extractions", "clinic": "Las Vegas", "phone": "226-240-2417", "email": "psimkovitz1@wp.com", "experience": 1 },
        { "id": 3, "full_name": "Sisile Dumphreys", "practise_from": "6/25/2024", "gender": "Female", "rating": 4.2, "services": "Regular Check-ups", "clinic": "Las Vegas", "phone": "693-306-4515", "email": "sdumphreys2@columbia.edu", "experience": 7 },
        { "id": 4, "full_name": "Shirleen Wong", "practise_from": "9/17/2024", "gender": "Female", "rating": 4.1, "services": "Over Dentures Root", "clinic": "Las Vegas", "phone": "835-456-8699", "email": "swong3@virginia.edu", "experience": 6 },
        { "id": 5, "full_name": "Valene Giller", "practise_from": "9/30/2024", "gender": "Female", "rating": 4.1, "services": "Sleep Apnea", "clinic": "Henderson", "phone": "955-532-2330", "email": "vgiller4@npr.org", "experience": 30 },
        { "id": 6, "full_name": "Thorin Blayney", "practise_from": "10/1/2024", "gender": "Male", "rating": 4.4, "services": "Teeth Whitening Dentures", "clinic": "Las Vegas", "phone": "751-347-7981", "email": "tblayney5@ibm.com", "experience": 26 },
        { "id": 7, "full_name": "Eduardo Dahlgren", "practise_from": "12/26/2024", "gender": "Male", "rating": 5.0, "services": "Mouth Guard", "clinic": "Henderson", "phone": "599-426-0439", "email": "edahlgren6@deliciousdays.com", "experience": 27 },
        { "id": 8, "full_name": "Arney Connechy", "practise_from": "6/2/2024", "gender": "Male", "rating": 3.8, "services": "Regular Check-ups", "clinic": "Henderson", "phone": "118-488-0595", "email": "aconnechy7@people.com.cn", "experience": 20 },
        { "id": 9, "full_name": "Philis Renbold", "practise_from": "12/27/2024", "gender": "Female", "rating": 3.6, "services": "Teeth Whitening Dentures", "clinic": "Las Vegas", "phone": "909-516-3692", "email": "prenbold8@marriott.com", "experience": 1 },
        { "id": 10, "full_name": "Koenraad Stapleford", "practise_from": "7/23/2024", "gender": "Male", "rating": 4.2, "services": "Dental Bridge", "clinic": "Las Vegas", "phone": "955-858-2472", "email": "kstapleford9@360.cn", "experience": 35 },
        { "id": 11, "full_name": "Dahlia Blanchflower", "practise_from": "6/4/2024", "gender": "Female", "rating": 3.7, "services": "Regular Check-ups", "clinic": "Las Vegas", "phone": "391-933-0889", "email": "dblanchflowera@abc.net.au", "experience": 12 },
        { "id": 12, "full_name": "Ellene Missen", "practise_from": "9/14/2024", "gender": "Female", "rating": 3.5, "services": "Night Guard", "clinic": "Las Vegas", "phone": "731-869-1449", "email": "emissenb@acquirethisname.com", "experience": 27 },
        { "id": 13, "full_name": "Law Burtenshaw", "practise_from": "6/19/2024", "gender": "Male", "rating": 4.7, "services": "Sleep Apnea", "clinic": "Las Vegas", "phone": "296-371-6054", "email": "lburtenshawc@creativecommons.org", "experience": 3 },
        { "id": 14, "full_name": "Jazmin Sheers", "practise_from": "11/19/2024", "gender": "Female", "rating": 3.9, "services": "Bone Graft", "clinic": "Henderson", "phone": "271-359-7024", "email": "jsheersd@freewebs.com", "experience": 35 },
        { "id": 15, "full_name": "Amii Mauvin", "practise_from": "10/22/2024", "gender": "Female", "rating": 3.4, "services": "Dental Implants", "clinic": "Las Vegas", "phone": "705-484-1626", "email": "amauvine@cyberchimps.com", "experience": 29 },
        { "id": 16, "full_name": "Buffy Kime", "practise_from": "10/11/2024", "gender": "Female", "rating": 3.7, "services": "Complete Smile Makeover", "clinic": "Henderson", "phone": "344-849-6532", "email": "bkimef@nytimes.com", "experience": 27 },
        { "id": 17, "full_name": "Max Give", "practise_from": "10/14/2024", "gender": "Female", "rating": 4.9, "services": "Canal Tooth Extractions", "clinic": "Las Vegas", "phone": "651-669-0163", "email": "mgiveg@rambler.ru", "experience": 31 },
        { "id": 18, "full_name": "Leia Hince", "practise_from": "8/19/2024", "gender": "Female", "rating": 4.8, "services": "Sleep Apnea", "clinic": "Henderson", "phone": "101-331-1702", "email": "lhinceh@noaa.gov", "experience": 5 },
        { "id": 19, "full_name": "Tally Mahaffey", "practise_from": "6/27/2024", "gender": "Non-binary", "rating": 4.4, "services": "Wisdom Tooth Removal", "clinic": "Henderson", "phone": "844-805-8280", "email": "tmahaffeyi@scientificamerican.com", "experience": 9 },
        { "id": 20, "full_name": "Katharine Pear", "practise_from": "2/6/2025", "gender": "Female", "rating": 4.2, "services": "Veneers", "clinic": "Henderson", "phone": "927-967-7744", "email": "kpearj@youtu.be", "experience": 2 },
        { "id": 21, "full_name": "Lynette Belliss", "practise_from": "11/27/2024", "gender": "Female", "rating": 4.2, "services": "Regular Check-ups", "clinic": "Henderson", "phone": "438-305-9268", "email": "lbellissk@cdc.gov", "experience": 30 },
        { "id": 22, "full_name": "Horten Simmill", "practise_from": "11/22/2024", "gender": "Male", "rating": 4.9, "services": "Professional Cleaning", "clinic": "Las Vegas", "phone": "590-583-4063", "email": "hsimmilll@princeton.edu", "experience": 2 },
        { "id": 23, "full_name": "Ginny Goroni", "practise_from": "9/18/2024", "gender": "Female", "rating": 4.7, "services": "Preventive Treatment", "clinic": "Henderson", "phone": "209-516-1628", "email": "ggoronim@tmall.com", "experience": 23 },
        { "id": 24, "full_name": "Stefa Kalinsky", "practise_from": "4/8/2024", "gender": "Female", "rating": 4.4, "services": "Complete Smile Makeover", "clinic": "Henderson", "phone": "649-595-3577", "email": "skalinskyn@scribd.com", "experience": 21 },
        { "id": 25, "full_name": "Alfons Atkin", "practise_from": "12/25/2024", "gender": "Male", "rating": 4.7, "services": "Invisalign", "clinic": "Las Vegas", "phone": "581-361-6521", "email": "aatkino@live.com", "experience": 3 },
        { "id": 26, "full_name": "Mario Hickford", "practise_from": "12/22/2024", "gender": "Male", "rating": 4.2, "services": "Night Guard", "clinic": "Henderson", "phone": "344-264-3511", "email": "mhickfordp@pinterest.com", "experience": 27 },
        { "id": 27, "full_name": "Jacob Plumtree", "practise_from": "3/4/2024", "gender": "Male", "rating": 4.4, "services": "Teeth Whitening Dentures", "clinic": "Las Vegas", "phone": "813-119-4266", "email": "jplumtreeq@blogspot.com", "experience": 20 },
        { "id": 28, "full_name": "Melissa Allon", "practise_from": "7/4/2024", "gender": "Female", "rating": 4.4, "services": "Sleep Apnea", "clinic": "Las Vegas", "phone": "476-456-5439", "email": "mallonr@cam.ac.uk", "experience": 33 },
        { "id": 29, "full_name": "Collette Ferby", "practise_from": "5/8/2024", "gender": "Female", "rating": 3.7, "services": "Wisdom Tooth Removal", "clinic": "Henderson", "phone": "999-278-9873", "email": "cferbys@amazon.co.uk", "experience": 31 },
        { "id": 30, "full_name": "Helge Rosie", "practise_from": "4/23/2024", "gender": "Agender", "rating": 3.2, "services": "Dental Fillings", "clinic": "Henderson", "phone": "734-110-4848", "email": "hrosiet@g.co", "experience": 6 },
        { "id": 31, "full_name": "Shaine De Zamudio", "practise_from": "2/9/2025", "gender": "Female", "rating": 5.0, "services": "Dental Bridge", "clinic": "Henderson", "phone": "488-923-1805", "email": "sdeu@fc2.com", "experience": 14 },
        { "id": 32, "full_name": "Melita Carn", "practise_from": "6/15/2024", "gender": "Female", "rating": 3.9, "services": "Over Dentures Root", "clinic": "Henderson", "phone": "309-612-6706", "email": "mcarnv@flavors.me", "experience": 23 },
        { "id": 33, "full_name": "Vida Adkins", "practise_from": "6/16/2024", "gender": "Female", "rating": 3.6, "services": "Veneers", "clinic": "Henderson", "phone": "242-138-7540", "email": "vadkinsw@ibm.com", "experience": 32 },
        { "id": 34, "full_name": "Demetre Dakin", "practise_from": "7/20/2024", "gender": "Male", "rating": 4.1, "services": "Professional Cleaning", "clinic": "Las Vegas", "phone": "804-526-0060", "email": "ddakinx@i2i.jp", "experience": 23 },
        { "id": 35, "full_name": "Lanette Hunstone", "practise_from": "11/13/2024", "gender": "Female", "rating": 4.7, "services": "Over Dentures Root", "clinic": "Las Vegas", "phone": "969-725-2572", "email": "lhunstoney@miibeian.gov.cn", "experience": 35 },
        { "id": 36, "full_name": "Merwin Kermitt", "practise_from": "4/24/2024", "gender": "Male", "rating": 4.4, "services": "Regular Check-ups", "clinic": "Las Vegas", "phone": "888-322-7230", "email": "mkermittz@about.me", "experience": 32 },
        { "id": 37, "full_name": "Meagan Fettiplace", "practise_from": "12/18/2024", "gender": "Female", "rating": 3.3, "services": "Canal Tooth Extractions", "clinic": "Las Vegas", "phone": "729-344-7550", "email": "mfettiplace10@nifty.com", "experience": 19 },
        { "id": 38, "full_name": "Ewart Overill", "practise_from": "1/11/2025", "gender": "Polygender", "rating": 4.9, "services": "Canal Tooth Extractions", "clinic": "Henderson", "phone": "215-294-7543", "email": "eoverill11@smh.com.au", "experience": 19 },
        { "id": 39, "full_name": "Leila Drennan", "practise_from": "2/25/2024", "gender": "Female", "rating": 3.3, "services": "Complete Smile Makeover", "clinic": "Henderson", "phone": "759-288-8453", "email": "ldrennan12@redcross.org", "experience": 7 },
        { "id": 40, "full_name": "Klarrisa Gibbons", "practise_from": "4/26/2024", "gender": "Female", "rating": 4.9, "services": "Sleep Apnea", "clinic": "Las Vegas", "phone": "503-461-8104", "email": "kgibbons13@cnet.com", "experience": 18 },
        { "id": 41, "full_name": "Cy Jurzyk", "practise_from": "6/15/2024", "gender": "Male", "rating": 3.6, "services": "Snoring Devices", "clinic": "Henderson", "phone": "500-217-3017", "email": "cjurzyk14@a8.net", "experience": 32 },
        { "id": 42, "full_name": "Jeremias O'Leagham", "practise_from": "5/14/2024", "gender": "Male", "rating": 4.6, "services": "Preventive Treatment", "clinic": "Henderson", "phone": "482-843-7342", "email": "joleagham15@addthis.com", "experience": 14 },
        { "id": 43, "full_name": "Scottie Caneo", "practise_from": "3/8/2024", "gender": "Male", "rating": 3.6, "services": "Regular Check-ups", "clinic": "Las Vegas", "phone": "321-279-6002", "email": "scaneo16@unblog.fr", "experience": 4 },
        { "id": 44, "full_name": "Hernando Schmidt", "practise_from": "5/31/2024", "gender": "Male", "rating": 3.9, "services": "Snoring Devices", "clinic": "Henderson", "phone": "487-498-4267", "email": "hschmidt17@wp.com", "experience": 10 },
        { "id": 45, "full_name": "Sheridan Duxbury", "practise_from": "1/18/2025", "gender": "Male", "rating": 4.0, "services": "Mouth Guard", "clinic": "Henderson", "phone": "680-322-7837", "email": "sduxbury18@newyorker.com", "experience": 25 },
        { "id": 46, "full_name": "Gris Lacaze", "practise_from": "6/16/2024", "gender": "Male", "rating": 3.6, "services": "Dental Bridge", "clinic": "Henderson", "phone": "445-747-9110", "email": "glacaze19@yelp.com", "experience": 16 },
        { "id": 47, "full_name": "Loralyn Gieves", "practise_from": "11/7/2024", "gender": "Female", "rating": 3.6, "services": "Dental Implants", "clinic": "Henderson", "phone": "680-822-2557", "email": "lgieves1a@answers.com", "experience": 5 },
        { "id": 48, "full_name": "Silvie Simioli", "practise_from": "4/10/2024", "gender": "Female", "rating": 4.9, "services": "Adult Braces", "clinic": "Henderson", "phone": "319-448-4631", "email": "ssimioli1b@reverbnation.com", "experience": 28 },
        { "id": 49, "full_name": "Esteban Kerswill", "practise_from": "11/22/2024", "gender": "Genderqueer", "rating": 3.7, "services": "Snoring Devices", "clinic": "Las Vegas", "phone": "507-625-3131", "email": "ekerswill1c@google.fr", "experience": 22 },
        { "id": 50, "full_name": "Kerri Locks", "practise_from": "8/2/2024", "gender": "Female", "rating": 3.9, "services": "Teeth Whitening Dentures", "clinic": "Las Vegas", "phone": "593-872-2675", "email": "klocks1d@gov.uk", "experience": 23 },
        { "id": 51, "full_name": "Glen Style", "practise_from": "8/22/2024", "gender": "Male", "rating": 4.8, "services": "Veneers", "clinic": "Las Vegas", "phone": "139-451-5568", "email": "gstyle1e@surveymonkey.com", "experience": 22 }];
    return (
        < AuthenticatedLayout
            header='Dentists'

        >
            <Head title="Dentists" />

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                    data-hs-datatables-options='{
                 "order": []
               }'>
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Services Offered</th>
                            <th>Clinic</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dentists.map((dentist, index) => (
                                <tr key={index}>
                                    <td>#{dentist.id}</td>
                                    
                                    <td>
                                        <a href="#!" className="d-flex align-items-center">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">
                                                    {dentist.full_name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{dentist.full_name}</span>
                                                <span class="d-block fs-5 text-body">{dentist.experience} Years of Experience | {dentist.rating}</span>
                                            </div>
                                        </a>

                                    </td>
                                    <td>
                                        <span class="d-block h5 mb-0">{dentist.phone}</span>
                                        <span class="d-block fs-5">{dentist.email}</span>
                                    </td>
                                    <td>{dentist.services}</td>
                                    <td>{dentist.clinic}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout >
    )
}