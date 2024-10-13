const cl = console.log;

const blogContainer = document.getElementById("blogContainer");
const blogForm = document.getElementById("blogForm");
const title = document.getElementById("title");
const blog = document.getElementById("content");


const swal =(title, icon) => {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
      });
}


let blogArr = [
    {
        title : "HTML",
        content: "HyperText Markup Language"
    },
    {
        title : "CSS",
        content: "Cascading StyleSheet"
    }
];

const createBlog = (obj) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() >= 0.3 ? false : true;
        if(!err){
            blogArr.push(obj);
            resolve(blogArr);
        }else{
            reject(`Something is wrong while creating Blog`);
        }
        }, 1000);
    })
};

const fetchBlog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() >= 0.3 ? false : true;
            if(!err){
                let data = blogArr;
                resolve(data)
            }else{
                reject(`Something went wrong while fetching Blogs`);
            }
        }, 1000);
    })
}

const template = (arr) => {
    let result = arr.map(ele => {
        return ` <div class="col-md-3">
                    <div class="card">
                        <div class="card-header">${ele.title}</div>
                        <div class="card-body">${ele.content}</div>
                        <div class="card-footer d-flex justify-content-between">
                            <button class="btn btn-primary">edit</button>
                            <button class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`
    }).join("");
    blogContainer.innerHTML = result;
}



const onBlogAdd = (e) => {
    e.preventDefault();
    let obj = {
        title : title.value,
        content : content.value
    };

    createBlog(obj)
                .then(res => {
                    return fetchBlog();
                })
                .then(res => {
                    template(res)
                    swal("Blog Created SuccessFully!!!", "success")
                })
                .catch(err => {
                    swal(err, "error");
                })

}



blogForm.addEventListener("submit", onBlogAdd);