//fetch courses data 
const contentBody = $(".body__content .container");

fetch ('./api/courses.json')
    .then (response => response.json())
    .then (data => {
        console.log (data);
        let coursesArr = Array.from (data.courses);

        let html_content = data.type_course.map (content => {
            return `<div class="content" data-index="${content.id}">
                        <div class="content__course-title">
                            <h3 class="content__course-title__heading">
                                ${content.title}
                            </h3>
                            <span class="content__course-title__sub">${content.description}</span>
                        </div>
                        <div class="content__course-list">
                        </div>
                    </div>`
        }).join ('');
        contentBody.append (html_content);
        while (coursesArr.length != 0) {
            let course = coursesArr.shift();
            $(`.content[data-index="${course.type_id}"] .content__course-list`).append (hanldeHTMLCourse(course));
        }
    })