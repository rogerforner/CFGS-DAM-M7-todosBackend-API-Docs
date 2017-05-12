
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CreatePasswordResetsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreatePasswordResetsTable.html">CreatePasswordResetsTable</a>                    </div>                </li>                            <li data-name="class:CreateTasksTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateTasksTable.html">CreateTasksTable</a>                    </div>                </li>                            <li data-name="class:CreateUsersTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateUsersTable.html">CreateUsersTable</a>                    </div>                </li>                            <li data-name="class:DatabaseSeeder" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="DatabaseSeeder.html">DatabaseSeeder</a>                    </div>                </li>                            <li data-name="class:TasksTableSeeder" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="TasksTableSeeder.html">TasksTableSeeder</a>                    </div>                </li>                            <li data-name="class:UsersTableSeeder" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="UsersTableSeeder.html">UsersTableSeeder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                            <li data-name="class:App_Exceptions_IncorrectModelException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/IncorrectModelException.html">IncorrectModelException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_ForgotPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ForgotPasswordController.html">ForgotPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_LoginController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/LoginController.html">LoginController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_RegisterController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/RegisterController.html">RegisterController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_ResetPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ResetPasswordController.html">ResetPasswordController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_TasksController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/TasksController.html">TasksController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_UserTasksController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/UserTasksController.html">UserTasksController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_UsersController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/UsersController.html">UsersController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_EncryptCookies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_BroadcastServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/BroadcastServiceProvider.html">BroadcastServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Repositories" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repositories.html">Repositories</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Repositories_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repositories/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Repositories_Contracts_Repository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Repositories/Contracts/Repository.html">Repository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Repositories_TaskRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repositories/TaskRepository.html">TaskRepository</a>                    </div>                </li>                            <li data-name="class:App_Repositories_UserRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repositories/UserRepository.html">UserRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Transformers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Transformers.html">Transformers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Transformers_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Transformers/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Transformers_Contracts_Transformer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Transformers/Contracts/Transformer.html">Transformer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Transformers_TaskTransformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Transformers/TaskTransformer.html">TaskTransformer</a>                    </div>                </li>                            <li data-name="class:App_Transformers_Transformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Transformers/Transformer.html">Transformer</a>                    </div>                </li>                            <li data-name="class:App_Transformers_UserTransformer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Transformers/UserTransformer.html">UserTransformer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Task" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Task.html">Task</a>                    </div>                </li>                            <li data-name="class:App_User" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/Repositories.html", "name": "App\\Repositories", "doc": "Namespace App\\Repositories"},{"type": "Namespace", "link": "App/Repositories/Contracts.html", "name": "App\\Repositories\\Contracts", "doc": "Namespace App\\Repositories\\Contracts"},{"type": "Namespace", "link": "App/Transformers.html", "name": "App\\Transformers", "doc": "Namespace App\\Transformers"},{"type": "Namespace", "link": "App/Transformers/Contracts.html", "name": "App\\Transformers\\Contracts", "doc": "Namespace App\\Transformers\\Contracts"},
            {"type": "Interface", "fromName": "App\\Repositories\\Contracts", "fromLink": "App/Repositories/Contracts.html", "link": "App/Repositories/Contracts/Repository.html", "name": "App\\Repositories\\Contracts\\Repository", "doc": "&quot;Interface Repository.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\Contracts\\Repository", "fromLink": "App/Repositories/Contracts/Repository.html", "link": "App/Repositories/Contracts/Repository.html#method_find", "name": "App\\Repositories\\Contracts\\Repository::find", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "App\\Transformers\\Contracts", "fromLink": "App/Transformers/Contracts.html", "link": "App/Transformers/Contracts/Transformer.html", "name": "App\\Transformers\\Contracts\\Transformer", "doc": "&quot;Interface Transformer.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Transformers\\Contracts\\Transformer", "fromLink": "App/Transformers/Contracts/Transformer.html", "link": "App/Transformers/Contracts/Transformer.html#method_transform", "name": "App\\Transformers\\Contracts\\Transformer::transform", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Transformers\\Contracts\\Transformer", "fromLink": "App/Transformers/Contracts/Transformer.html", "link": "App/Transformers/Contracts/Transformer.html#method_transformCollections", "name": "App\\Transformers\\Contracts\\Transformer::transformCollections", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;Class Kernel.&quot;"},
                    
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;Class Handler.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/IncorrectModelException.html", "name": "App\\Exceptions\\IncorrectModelException", "doc": "&quot;Class IncorrectModelException.&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "doc": "&quot;Class ForgotPasswordController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/LoginController.html", "name": "App\\Http\\Controllers\\Auth\\LoginController", "doc": "&quot;Class LoginController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\LoginController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/RegisterController.html", "name": "App\\Http\\Controllers\\Auth\\RegisterController", "doc": "&quot;Class RegisterController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\RegisterController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "doc": "&quot;Class ResetPasswordController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;Class Controller.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Controller", "fromLink": "App/Http/Controllers/Controller.html", "link": "App/Http/Controllers/Controller.html#method___construct", "name": "App\\Http\\Controllers\\Controller::__construct", "doc": "&quot;Controller constructor.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/TasksController.html", "name": "App\\Http\\Controllers\\TasksController", "doc": "&quot;Class TasksController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method___construct", "name": "App\\Http\\Controllers\\TasksController::__construct", "doc": "&quot;TasksController constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_index", "name": "App\\Http\\Controllers\\TasksController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_create", "name": "App\\Http\\Controllers\\TasksController::create", "doc": "&quot;Show the form for creating a new resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_store", "name": "App\\Http\\Controllers\\TasksController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_show", "name": "App\\Http\\Controllers\\TasksController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_edit", "name": "App\\Http\\Controllers\\TasksController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_update", "name": "App\\Http\\Controllers\\TasksController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\TasksController", "fromLink": "App/Http/Controllers/TasksController.html", "link": "App/Http/Controllers/TasksController.html#method_destroy", "name": "App\\Http\\Controllers\\TasksController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/UserTasksController.html", "name": "App\\Http\\Controllers\\UserTasksController", "doc": "&quot;Class UserTasksController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method___construct", "name": "App\\Http\\Controllers\\UserTasksController::__construct", "doc": "&quot;UserTasksController constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_index", "name": "App\\Http\\Controllers\\UserTasksController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_create", "name": "App\\Http\\Controllers\\UserTasksController::create", "doc": "&quot;Show the form for creating a new resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_store", "name": "App\\Http\\Controllers\\UserTasksController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_show", "name": "App\\Http\\Controllers\\UserTasksController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_edit", "name": "App\\Http\\Controllers\\UserTasksController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_update", "name": "App\\Http\\Controllers\\UserTasksController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UserTasksController", "fromLink": "App/Http/Controllers/UserTasksController.html", "link": "App/Http/Controllers/UserTasksController.html#method_destroy", "name": "App\\Http\\Controllers\\UserTasksController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/UsersController.html", "name": "App\\Http\\Controllers\\UsersController", "doc": "&quot;Class UsersController.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method___construct", "name": "App\\Http\\Controllers\\UsersController::__construct", "doc": "&quot;UsersController constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_index", "name": "App\\Http\\Controllers\\UsersController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_create", "name": "App\\Http\\Controllers\\UsersController::create", "doc": "&quot;Show the form for creating a new resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_store", "name": "App\\Http\\Controllers\\UsersController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_show", "name": "App\\Http\\Controllers\\UsersController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_edit", "name": "App\\Http\\Controllers\\UsersController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_update", "name": "App\\Http\\Controllers\\UsersController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_destroy", "name": "App\\Http\\Controllers\\UsersController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;Class Kernel.&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/EncryptCookies.html", "name": "App\\Http\\Middleware\\EncryptCookies", "doc": "&quot;Class EncryptCookies.&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;Class RedirectIfAuthenticated.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;Class VerifyCsrfToken.&quot;"},
                    
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;Class AppServiceProvider.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;Class AuthServiceProvider.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Register any authentication \/ authorization services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/BroadcastServiceProvider.html", "name": "App\\Providers\\BroadcastServiceProvider", "doc": "&quot;Class BroadcastServiceProvider.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\BroadcastServiceProvider", "fromLink": "App/Providers/BroadcastServiceProvider.html", "link": "App/Providers/BroadcastServiceProvider.html#method_boot", "name": "App\\Providers\\BroadcastServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;Class EventServiceProvider.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;Class RouteServiceProvider.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Repositories\\Contracts", "fromLink": "App/Repositories/Contracts.html", "link": "App/Repositories/Contracts/Repository.html", "name": "App\\Repositories\\Contracts\\Repository", "doc": "&quot;Interface Repository.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\Contracts\\Repository", "fromLink": "App/Repositories/Contracts/Repository.html", "link": "App/Repositories/Contracts/Repository.html#method_find", "name": "App\\Repositories\\Contracts\\Repository::find", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Repositories", "fromLink": "App/Repositories.html", "link": "App/Repositories/TaskRepository.html", "name": "App\\Repositories\\TaskRepository", "doc": "&quot;Class TaskRepository.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\TaskRepository", "fromLink": "App/Repositories/TaskRepository.html", "link": "App/Repositories/TaskRepository.html#method_find", "name": "App\\Repositories\\TaskRepository::find", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Repositories", "fromLink": "App/Repositories.html", "link": "App/Repositories/UserRepository.html", "name": "App\\Repositories\\UserRepository", "doc": "&quot;Class UserRepository.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\UserRepository", "fromLink": "App/Repositories/UserRepository.html", "link": "App/Repositories/UserRepository.html#method_find", "name": "App\\Repositories\\UserRepository::find", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Task.html", "name": "App\\Task", "doc": "&quot;Class Task.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Task", "fromLink": "App/Task.html", "link": "App/Task.html#method_user", "name": "App\\Task::user", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Transformers\\Contracts", "fromLink": "App/Transformers/Contracts.html", "link": "App/Transformers/Contracts/Transformer.html", "name": "App\\Transformers\\Contracts\\Transformer", "doc": "&quot;Interface Transformer.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Transformers\\Contracts\\Transformer", "fromLink": "App/Transformers/Contracts/Transformer.html", "link": "App/Transformers/Contracts/Transformer.html#method_transform", "name": "App\\Transformers\\Contracts\\Transformer::transform", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Transformers\\Contracts\\Transformer", "fromLink": "App/Transformers/Contracts/Transformer.html", "link": "App/Transformers/Contracts/Transformer.html#method_transformCollections", "name": "App\\Transformers\\Contracts\\Transformer::transformCollections", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Transformers", "fromLink": "App/Transformers.html", "link": "App/Transformers/TaskTransformer.html", "name": "App\\Transformers\\TaskTransformer", "doc": "&quot;Class TaskTransformer.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Transformers\\TaskTransformer", "fromLink": "App/Transformers/TaskTransformer.html", "link": "App/Transformers/TaskTransformer.html#method_transform", "name": "App\\Transformers\\TaskTransformer::transform", "doc": "&quot;Transform a task.&quot;"},
            
            {"type": "Class", "fromName": "App\\Transformers", "fromLink": "App/Transformers.html", "link": "App/Transformers/Transformer.html", "name": "App\\Transformers\\Transformer", "doc": "&quot;Class Transformer.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Transformers\\Transformer", "fromLink": "App/Transformers/Transformer.html", "link": "App/Transformers/Transformer.html#method_transformCollections", "name": "App\\Transformers\\Transformer::transformCollections", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Transformers", "fromLink": "App/Transformers.html", "link": "App/Transformers/UserTransformer.html", "name": "App\\Transformers\\UserTransformer", "doc": "&quot;Class UserTransformer.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Transformers\\UserTransformer", "fromLink": "App/Transformers/UserTransformer.html", "link": "App/Transformers/UserTransformer.html#method_transform", "name": "App\\Transformers\\UserTransformer::transform", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/User.html", "name": "App\\User", "doc": "&quot;Class User.&quot;"},
                                                        {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_tasks", "name": "App\\User::tasks", "doc": "&quot;&quot;"},
            
            {"type": "Class",  "link": "CreatePasswordResetsTable.html", "name": "CreatePasswordResetsTable", "doc": "&quot;Class CreatePasswordResetsTable.&quot;"},
                                                        {"type": "Method", "fromName": "CreatePasswordResetsTable", "fromLink": "CreatePasswordResetsTable.html", "link": "CreatePasswordResetsTable.html#method_up", "name": "CreatePasswordResetsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreatePasswordResetsTable", "fromLink": "CreatePasswordResetsTable.html", "link": "CreatePasswordResetsTable.html#method_down", "name": "CreatePasswordResetsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateTasksTable.html", "name": "CreateTasksTable", "doc": "&quot;Class CreateTasksTable.&quot;"},
                                                        {"type": "Method", "fromName": "CreateTasksTable", "fromLink": "CreateTasksTable.html", "link": "CreateTasksTable.html#method_up", "name": "CreateTasksTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateTasksTable", "fromLink": "CreateTasksTable.html", "link": "CreateTasksTable.html#method_down", "name": "CreateTasksTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateUsersTable.html", "name": "CreateUsersTable", "doc": "&quot;Class CreateUsersTable.&quot;"},
                                                        {"type": "Method", "fromName": "CreateUsersTable", "fromLink": "CreateUsersTable.html", "link": "CreateUsersTable.html#method_up", "name": "CreateUsersTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateUsersTable", "fromLink": "CreateUsersTable.html", "link": "CreateUsersTable.html#method_down", "name": "CreateUsersTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "DatabaseSeeder.html", "name": "DatabaseSeeder", "doc": "&quot;Class DatabaseSeeder.&quot;"},
                                                        {"type": "Method", "fromName": "DatabaseSeeder", "fromLink": "DatabaseSeeder.html", "link": "DatabaseSeeder.html#method_run", "name": "DatabaseSeeder::run", "doc": "&quot;Run the database seeds.&quot;"},
            
            {"type": "Class",  "link": "TasksTableSeeder.html", "name": "TasksTableSeeder", "doc": "&quot;Class TasksTableSeeder.&quot;"},
                                                        {"type": "Method", "fromName": "TasksTableSeeder", "fromLink": "TasksTableSeeder.html", "link": "TasksTableSeeder.html#method_run", "name": "TasksTableSeeder::run", "doc": "&quot;Run the database seeds.&quot;"},
            
            {"type": "Class",  "link": "UsersTableSeeder.html", "name": "UsersTableSeeder", "doc": "&quot;Class UsersTableSeeder.&quot;"},
                                                        {"type": "Method", "fromName": "UsersTableSeeder", "fromLink": "UsersTableSeeder.html", "link": "UsersTableSeeder.html#method_run", "name": "UsersTableSeeder::run", "doc": "&quot;Run the database seeds.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


