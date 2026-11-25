import '../css/Contact.css'

function Contact(){
    return(
        <div>
            <h1>Contact Us!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem impedit perferendis consectetur commodi consequuntur sint culpa architecto aliquam nemo blanditiis obcaecati, alias aspernatur? Vel iusto ratione ad similique quibusdam.
            Fuga enim et in eligendi magni eum expedita officia at deleniti repellendus deserunt sed magnam quia nostrum natus voluptatibus aut incidunt voluptatem facilis corrupti architecto, minima inventore. Aperiam, totam pariatur.
            Id vel recusandae consectetur repellendus ad tempora velit, cum saepe ea fuga architecto voluptatem eum beatae est reprehenderit quidem voluptate deleniti minus culpa ullam nesciunt sequi numquam molestiae nam. Tenetur.
            </p>

            <table className='table table-bordered container-fluid '>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Accomodation</th>
                    <th>Payment</th>
                </tr>

                <tr>
                    <td>John Kamadi</td>
                    <td>john@gmail.com</td>
                    <td>0700000000</td>
                    <td>YES</td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Jane Kariuki</td>
                    <td>janey@gmail.com</td>
                    <td>0712345678</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Samuel Tod</td>
                    <td>john@gmail.com</td>
                    <td>0732123498</td>
                    <td>No</td>
                    <td>Pending</td>
                </tr>

                <tr>
                    <td>Doris muhando</td>
                    <td>dorism@gmail.com</td>
                    <td>0789744324</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>James Karani</td>
                    <td>jemo@gmail.com</td>
                    <td>0709876523</td>
                    <td>No</td>
                    <td>Pending</td>
                </tr>







            </table>
            
        </div>
    );
}

export default Contact;