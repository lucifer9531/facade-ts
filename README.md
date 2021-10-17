TodoList -> Component

index.html -> TodoList + Header + Footer + Carousel    

TodoList -> Input + List 


index.html -> index <- TodoList 
<div id="app"></div>

index入口文件 <- TodoList   
index: data, ElementWrapper   

TodoList -> todo-list <- input + list  
todoList -> todo-list -> ElementWrapper    

TodoList 组件 = input  + List 组件    
外观 -> index 组件接口   

TodoList 中介 -> input + list视图  + 功能集中管理 -> index

组件化 -> 组件结构 -> 外观模式   
