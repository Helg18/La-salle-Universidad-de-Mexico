var app = angular.module('lasalle',['ui.bootstrap']);


app
    .controller('PostCtrl',function($scope, $http, $uibModal){

        $scope.posts = [];


        $scope.modalPost = function(post, title){

            if(!post){
                post = {
                    id: null,
                    parent_id: parent_id,
                    title: null,
                    subtitle: null,
                    paragraph_1: null,
                    paragraph_2: null,
                    paragraph_3: null,

                }
            }

            var modalInstance = $uibModal.open({

                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    title: function () {
                        return title;
                    },
                    post: function(){
                        return post;
                    },


                }
            });

            modalInstance.result.then(function (result) {
                var post = result.post,
                    files = result.files
                    ;

                console.log(post);
                //console.log(question);
                //console.log('f');
                //console.log(files);

                $http.post(url + 'angular/post', post).then(function(response){
                    bootbox.alert(response.data.message);


                    if(files){
                        var formData = new FormData();
                        angular.forEach(files, function (file) {
                            formData.append(file.name, file);
                        });

                        $http.post(url + 'angular/question/' + response.data.id + '/images', formData, {
                                transformRequest: angular.identity,
                                headers: { 'Content-Type': undefined }
                        })
                        .success(function (a, b, c) {
                            $scope.getQuestions();
                        })
                        .error(function (a, b, c) {
                            console.log('error');
                            console.log(a);
                        });
                    }else{
                        $scope.getPosts();
                    }

                },function(err,status){
                    bootbox.alert(err.data.message);
                });

            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });

        }




        $scope.getPosts = function(){
            $http.get(url + 'angular/' + parent_id + '/posts').then(function(response){
                console.log(response.data);
                $scope.posts = response.data;
            });
        }




        $scope.deletePost = function (post){
            $http.delete(url + 'angular/' + post.id + '/post' ).then(function(response){
                $scope.getPosts();
            });
        }

        $scope.getPosts();
    })

    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, title, post) {

        $scope.post = post;
        $scope.title = title;
        $scope.category_id = category_id;
        console.log(category_id);


        $scope.ok = function () {

            if(!$scope.post.title){
                bootbox.alert("Especifica el titulo");
                return false;
            }



            /*if($scope.question.type=='Opcion Multiple Imagen' || $scope.question.type=='Opcion Unica Imagen'){
                files = document.getElementById('files').files;

            }else if($scope.question.type=='Tache Paloma Imagen' || $scope.question.type=='Dibujar sobre Imagen'){
                files = document.getElementById('files2').files;
            }*/

            files = false;

            $uibModalInstance.close({ post: $scope.post, files: files});
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    })




;