const add_new = document.getElementById("add_new");
const table = document.getElementById("table");
add_new.addEventListener('click',function(){
    let new_row = document.createElement('tr');
    let task = prompt("ادخل اسم المهمة");
    let create_time = document.createElement('td');
    let task_data = document.createElement('input');
    let task_done = document.createElement('td');
    let edit_butt = document.createElement('button');
    let remove = document.createElement('button');

    task_data.type = "checkbox";

    edit_butt.className = "js_button";
    remove.className = "js_button";
    edit_butt.textContent = "تعديل";
    remove.textContent = "حذف";
    task_done.innerHTML = false;
    
    if(task !== null && task!==""){
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
        task_data.innerHTML = false;
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
        new_task = prompt("ادخل اسم المهمة");
        if(new_task !==null&&new_task !==""){
            task_done.innerHTML = new_task;
        }
        else{
            Swal.fire({
                title:'تاكد من المدخلات',
                icon:'error',
            })
            create_time.innerHTML = currentDate;

        }
    })
})