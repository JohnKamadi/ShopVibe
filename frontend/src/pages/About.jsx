function About(){

    const headingstyles = {
        color: "red",
        fontSize: "50px",
        fontWeight: "bold"
    }

    const Paragraphstyles = {
        fontStyle: "italic",
        marginBottom: "20px"
    }

    const imageStyles = {
        width: "300px",
        height:"200px",
        borderRadius: "10px"
    }

    return(
        <div>
            <h1 style={headingstyles}>About ShopVibe!</h1>
            <p style={Paragraphstyles} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis qui obcaecati sequi eaque distinctio aperiam sunt, harum ea optio aspernatur mollitia enim odio dolor officia nemo dolorum a quibusdam dolores.
            Aliquid fugit reprehenderit eos sed quia assumenda et repudiandae beatae iusto corrupti inventore praesentium, repellat dolorum enim alias fugiat obcaecati? Ipsum explicabo culpa nesciunt laboriosam est nobis. Eum, soluta veniam.
            Tempora praesentium, adipisci aperiam quae quisquam eligendi ipsa blanditiis. Nemo eligendi, aliquid dicta voluptas mollitia quae doloribus commodi ex, fuga nobis veniam illum reiciendis vero veritatis maiores perferendis. Provident, quos!
            </p>
            <img src="images/car2.png" alt="" style={imageStyles}/>
            
        </div>
    );

}

export default About;