const add_new = document.getElementById("add_new");
const table = document.getElementById("table");
add_new.addEventListener('click',function(){
    let new_row = document.createElement('tr');
    let task = prompt("ادخل اسم المهمة");
    let isdone = prompt("هل تمت المهمة ؟");
    let create_time = document.createElement('td');
    let task_data = document.createElement('td');
    let task_done = document.createElement('td');
    let edit_butt = document.createElement('button');
    let remove = document.createElement('button');

    edit_butt.className = "js_button";
    remove.className = "js_button";
    edit_butt.textContent = "تعديل";
    remove.textContent = "حذف";

    if(task !== null && isdone !== null && task!=="" && isdone!==""){
        table.appendChild(new_row);
        new_row.appendChild(task_data);
        new_row.appendChild(task_done);
        new_row.appendChild(create_time);
        new_row.appendChild(remove);
        new_row.appendChild(edit_butt);
        remove.id = "remove";
        edit_butt.id = "edit";
        task_done.innerHTML = task;
        const date = new Date();
        let currentDay= String(date.getDate()).padStart(2, '0');
        
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        
        let currentYear = date.getFullYear();
    
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        create_time.innerHTML = currentDate;
        task_data.innerHTML = isdone;
        remove.addEventListener('click',function(){
            table.removeChild(new_row);
            Swal.fire({
                title:'تم حذف المهمة بنجاح',
                icon:'success',
            })
        })

    }
    else{
        Swal.fire({
            title:'الرجاء التاكد من المدخلات',
            icon:'error',
        })
    }
    edit_butt.addEventListener('click',function(){
        const date_html = document.getElementById("create_time_html");
        new_task = prompt("ادخل اسم المهمة");
        new_isdone = prompt("هل تمت المهمة المعدلة ؟");
        if(new_task !==null && new_isdone !==null &&new_task !=="" &&new_isdone!==""){
            task_data.innerHTML = new_task;
            task_done.innerHTML = new_isdone;
        }
        else{
            Swal.fire({
                title:'تاكد من المدخلات',
                icon:'error',
            })
            create_time.innerHTML = currentDate;
            date_html.innerHTML = "وقت التعديل";

        }
    })
})