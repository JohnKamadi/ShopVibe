function Upload(){

        const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();

    alert(result.message);
    e.target.reset();

    };




    return(
        <div>
            <h2>Upload Product</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic excepturi in fuga laboriosam. Sapiente reiciendis libero placeat, qui dolore id debitis aperiam quos beatae magnam nobis, illum, laboriosam excepturi.
            Necessitatibus accusantium quis eveniet placeat odit amet incidunt aliquam in, laudantium alias, perferendis quaerat blanditiis. Vel nam nulla sequi earum enim beatae. Reiciendis, non. Dignissimos sit ad fuga facilis eius.</p>


            <form action="" onSubmit={ handleSubmit } >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter name" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" id="quantity" name="quantity" className="form-control" placeholder="e.g 1" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" name="price" id="price" className="form-control" placeholder="e.g 500" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product Description</label>
                    <textarea name="description" className="form-control" id="description" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" className="btn btn-success">Upload Product</button>

                
            </form>

        </div>
    );

}

export default Upload;