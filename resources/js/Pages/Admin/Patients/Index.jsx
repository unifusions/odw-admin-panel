
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function SecondOpinion(second) {
    const PATIENTSLIST = [{ "id": 1, "full_name": "Griffin Bayliss", "phone": "898-956-9852", "email": "gbayliss0@zdnet.com", "age": 8, "gender": "Male", "services": "Dental Implants", "clinic": "Gangba", "reg_date": "2/13/2025" },
    { "id": 2, "full_name": "Mario Greenwell", "phone": "707-520-5321", "email": "mgreenwell1@printfriendly.com", "age": 47, "gender": "Male", "services":  "Dental Implants", "clinic": "Santa Rosa", "reg_date": "1/27/2025" },
    { "id": 3, "full_name": "Adamo Connah", "phone": "459-539-0234", "email": "aconnah2@soup.io", "age": 29, "gender": "Male", "services": "Dentures", "clinic": "Pasirreungit", "reg_date": "2/3/2025" },
    { "id": 4, "full_name": "Shantee Gwinnel", "phone": "352-209-4209", "email": "sgwinnel3@php.net", "age": 18, "gender": "Female", "services": "Root Canal", "clinic": "Kipini", "reg_date": "1/23/2025" },
    { "id": 5, "full_name": "Karin Bulfit", "phone": "627-280-7303", "email": "kbulfit4@imgur.com", "age": 61, "gender": "Female", "services": "Bone Graft, Adult Braces", "clinic": "Rueil-Malmaison", "reg_date": "2/11/2025" },
    { "id": 6, "full_name": "Devland Heindrick", "phone": "879-190-8044", "email": "dheindrick5@webs.com", "age": 35, "gender": "Male", "services": "Root Canal", "clinic": "Zhongguan", "reg_date": "2/4/2025" },
    { "id": 7, "full_name": "Margalit Chenery", "phone": "717-762-5035", "email": "mchenery6@163.com", "age": 22, "gender": "Female", "services": "Veneers", "clinic": "Paccho", "reg_date": "2/21/2025" },
    { "id": 8, "full_name": "Alastair Aird", "phone": "421-284-6171", "email": "aaird7@google.cn", "age": 32, "gender": "Male", "services": "Sleep Apnea & Snoring Devices", "clinic": "Sena Madureira", "reg_date": "2/21/2025" },
    { "id": 9, "full_name": "Suzette Sydry", "phone": "580-646-7659", "email": "ssydry8@cbslocal.com", "age": 47, "gender": "Female", "services": "null", "clinic": "Shanglu", "reg_date": "2/16/2025" },
    { "id": 10, "full_name": "Waldon Hunte", "phone": "920-901-4274", "email": "whunte9@163.com", "age": 19, "gender": "Male", "services": "null", "clinic": "Ungaran", "reg_date": "2/16/2025" },
    { "id": 11, "full_name": "Mercedes Halfpenny", "phone": "243-885-6534", "email": "mhalfpennya@sakura.ne.jp", "age": 5, "gender": "Female", "services": "Mouth Guard & Night Guard", "clinic": "Sanxi", "reg_date": "1/24/2025" },
    { "id": 12, "full_name": "Marita Jennison", "phone": "278-992-0956", "email": "mjennisonb@tmall.com", "age": 35, "gender": "Female", "services": "Wisdom Tooth Removal", "clinic": "Mojomulyokrajan", "reg_date": "1/10/2025" },
    { "id": 13, "full_name": "Leicester Ceresa", "phone": "340-865-8475", "email": "lceresac@nhs.uk", "age": 17, "gender": "Male", "services": null, "clinic": "Iporã", "reg_date": "2/7/2025" },
    { "id": 14, "full_name": "Hardy Shubotham", "phone": "366-144-8985", "email": "hshubothamd@ibm.com", "age": 35, "gender": "Agender", "services": null, "clinic": "Sainte-Anne-des-Plaines", "reg_date": "1/26/2025" },
    { "id": 15, "full_name": "Davy Blencoe", "phone": "603-242-9861", "email": "dblencoee@yahoo.co.jp", "age": 61, "gender": "Male", "services": null, "clinic": "Argel", "reg_date": "1/7/2025" },
    { "id": 16, "full_name": "Rozalin McCluin", "phone": "958-435-8860", "email": "rmccluinf@hud.gov", "age": 56, "gender": "Female", "services": null, "clinic": "Langkou", "reg_date": "2/7/2025" },
    { "id": 17, "full_name": "Debee Haverson", "phone": "985-710-3386", "email": "dhaversong@discovery.com", "age": 41, "gender": "Female", "services": null, "clinic": "Filiatrá", "reg_date": "1/28/2025" },
    { "id": 18, "full_name": "Maggi Knight", "phone": "433-338-9061", "email": "mknighth@youtu.be", "age": 31, "gender": "Female", "services": null, "clinic": "Boucinhas", "reg_date": "1/10/2025" },
    { "id": 19, "full_name": "Victoir Simmers", "phone": "918-757-6745", "email": "vsimmersi@yelp.com", "age": 34, "gender": "Male", "services": null, "clinic": "Telnice", "reg_date": "2/2/2025" },
    { "id": 20, "full_name": "Arie Halliberton", "phone": "867-989-1406", "email": "ahallibertonj@t.co", "age": 51, "gender": "Male", "services": null, "clinic": "Santa Catalina", "reg_date": "2/3/2025" },
    { "id": 21, "full_name": "Kaia Howsam", "phone": "375-778-2669", "email": "khowsamk@globo.com", "age": 17, "gender": "Female", "services": null, "clinic": "Lyon", "reg_date": "1/8/2025" },
    { "id": 22, "full_name": "Blancha Wooton", "phone": "534-190-7777", "email": "bwootonl@sitemeter.com", "age": 4, "gender": "Female", "services": null, "clinic": "Dongsheng", "reg_date": "1/9/2025" },
    { "id": 23, "full_name": "Sharai Conibear", "phone": "427-177-4238", "email": "sconibearm@friendfeed.com", "age": 14, "gender": "Female", "services": null, "clinic": "Yintang", "reg_date": "2/20/2025" },
    { "id": 24, "full_name": "Donni Pearce", "phone": "603-432-7113", "email": "dpearcen@google.nl", "age": 35, "gender": "Bigender", "services": null, "clinic": "Shcherbinka", "reg_date": "2/11/2025" },
    { "id": 25, "full_name": "Shellie Hacquoil", "phone": "332-697-9213", "email": "shacquoilo@php.net", "age": 21, "gender": "Female", "services": null, "clinic": "Limbalod", "reg_date": "1/30/2025" },
    { "id": 26, "full_name": "Ravid Stanley", "phone": "948-443-4444", "email": "rstanleyp@senate.gov", "age": 9, "gender": "Male", "services": null, "clinic": "Fontem", "reg_date": "2/6/2025" },
    { "id": 27, "full_name": "Bambi Micheu", "phone": "961-416-9528", "email": "bmicheuq@cnbc.com", "age": 56, "gender": "Female", "services": null, "clinic": "Fílla", "reg_date": "1/23/2025" },
    { "id": 28, "full_name": "Melodee Cottingham", "phone": "435-846-2536", "email": "mcottinghamr@github.com", "age": 54, "gender": "Female", "services": null, "clinic": "Shicha", "reg_date": "1/16/2025" },
    { "id": 29, "full_name": "Zane Jewel", "phone": "348-530-7271", "email": "zjewels@joomla.org", "age": 65, "gender": "Male", "services": null, "clinic": "Raymond", "reg_date": "1/11/2025" },
    { "id": 30, "full_name": "Corie Darlasson", "phone": "832-170-8170", "email": "cdarlassont@weibo.com", "age": 23, "gender": "Genderfluid", "services": null, "clinic": "Peixing", "reg_date": "1/15/2025" },
    { "id": 31, "full_name": "Hakim Carss", "phone": "231-444-6120", "email": "hcarssu@bloglines.com", "age": 16, "gender": "Male", "services": null, "clinic": "Maiyema", "reg_date": "2/14/2025" },
    { "id": 32, "full_name": "Molli Shier", "phone": "664-479-8663", "email": "mshierv@vimeo.com", "age": 59, "gender": "Female", "services": null, "clinic": "Ulan Us", "reg_date": "2/15/2025" },
    { "id": 33, "full_name": "Burr Dring", "phone": "214-659-3057", "email": "bdringw@deliciousdays.com", "age": 8, "gender": "Male", "services": null, "clinic": "Dallas", "reg_date": "1/3/2025" },
    { "id": 34, "full_name": "Cleavland Belton", "phone": "249-229-9768", "email": "cbeltonx@ed.gov", "age": 35, "gender": "Male", "services": null, "clinic": "Laranjeiras do Sul", "reg_date": "1/27/2025" },
    { "id": 35, "full_name": "Eldon Kinchin", "phone": "157-850-4982", "email": "ekinchiny@storify.com", "age": 53, "gender": "Male", "services": null, "clinic": "Asenovgrad", "reg_date": "1/15/2025" },
    { "id": 36, "full_name": "Barri Keighly", "phone": "800-303-2319", "email": "bkeighlyz@squarespace.com", "age": 61, "gender": "Male", "services": null, "clinic": "New Kingston", "reg_date": "1/27/2025" },
    { "id": 37, "full_name": "Otis Kent", "phone": "330-750-9294", "email": "okent10@yellowpages.com", "age": 32, "gender": "Male", "services": null, "clinic": "Atamyrat", "reg_date": "1/11/2025" },
    { "id": 38, "full_name": "Neysa Antonietti", "phone": "923-684-6130", "email": "nantonietti11@dot.gov", "age": 59, "gender": "Female", "services": null, "clinic": "Barr", "reg_date": "1/29/2025" },
    { "id": 39, "full_name": "Penny Marley", "phone": "811-978-9559", "email": "pmarley12@cisco.com", "age": 56, "gender": "Female", "services": null, "clinic": "Rozhdestveno", "reg_date": "1/25/2025" },
    { "id": 40, "full_name": "Wilhelm Hainning", "phone": "547-922-2423", "email": "whainning13@technorati.com", "age": 6, "gender": "Polygender", "services": null, "clinic": "Luyang", "reg_date": "2/11/2025" },
    { "id": 41, "full_name": "Anissa Chrippes", "phone": "633-194-7709", "email": "achrippes14@washington.edu", "age": 55, "gender": "Genderfluid", "services": null, "clinic": "Caujul", "reg_date": "2/6/2025" },
    { "id": 42, "full_name": "Johan Hyett", "phone": "243-727-5331", "email": "jhyett15@gmpg.org", "age": 42, "gender": "Male", "services": null, "clinic": "Pierreville", "reg_date": "1/1/2025" },
    { "id": 43, "full_name": "Etta Falshaw", "phone": "500-196-8073", "email": "efalshaw16@people.com.cn", "age": 38, "gender": "Female", "services": null, "clinic": "Cruz das Almas", "reg_date": "1/24/2025" },
    { "id": 44, "full_name": "Montgomery Hurll", "phone": "852-992-8344", "email": "mhurll17@amazon.co.jp", "age": 52, "gender": "Male", "services": null, "clinic": "Wufeng", "reg_date": "1/8/2025" },
    { "id": 45, "full_name": "Natalya Neasam", "phone": "803-764-3770", "email": "nneasam18@gov.uk", "age": 64, "gender": "Female", "services": null, "clinic": "Kupusina", "reg_date": "1/1/2025" },
    { "id": 46, "full_name": "Rhianon Batrim", "phone": "154-515-9887", "email": "rbatrim19@businessinsider.com", "age": 1, "gender": "Female", "services": null, "clinic": "Shaxi", "reg_date": "1/25/2025" },
    { "id": 47, "full_name": "Andrea Penas", "phone": "617-538-6505", "email": "apenas1a@com.com", "age": 14, "gender": "Agender", "services": null, "clinic": "Jiangwei", "reg_date": "2/1/2025" },
    { "id": 48, "full_name": "Horatio Waeland", "phone": "837-401-6866", "email": "hwaeland1b@cam.ac.uk", "age": 36, "gender": "Male", "services": null, "clinic": "Junín", "reg_date": "2/5/2025" },
    { "id": 49, "full_name": "Kalvin Lackney", "phone": "647-766-0320", "email": "klackney1c@miibeian.gov.cn", "age": 19, "gender": "Male", "services": null, "clinic": "Kokopo", "reg_date": "1/2/2025" },
    { "id": 50, "full_name": "Benjamin Reeson", "phone": "730-546-5135", "email": "breeson1d@etsy.com", "age": 33, "gender": "Male", "services": null, "clinic": "Longwan", "reg_date": "1/6/2025" }];
    return (
        < AuthenticatedLayout
            header='Patients'

        >
            <Head title="Registered Patients" />

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                    data-hs-datatables-options='{
                 "order": []
               }'>
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Registration Date</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Services Availed</th>
                            <th>Clinic</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            PATIENTSLIST.map((patient, index) => (
                                <tr>
                                    <td>#{patient.id}</td>
                                    <td>{patient.reg_date}</td>
                                    <td>
                                        <a href="#!" className="d-flex align-items-center">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">
                                                    {patient.full_name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{patient.full_name}</span>
                                                <span class="d-block fs-5 text-body">{patient.age} / {patient.gender}</span>
                                            </div>
                                        </a>

                                    </td>
                                    <td>
                                        <span class="d-block h5 mb-0">{patient.phone}</span>
                                        <span class="d-block fs-5">{patient.email}</span>
                                    </td>
                                    <td>{patient.services}</td>
                                    <td>{patient.clinic}</td>
                                </tr>
                            ))
                        }
                     
                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout >
    )
}