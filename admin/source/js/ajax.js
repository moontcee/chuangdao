var baseUrl = "http://www.cdcapital.net";
$.ajaxSetup({
	cache: false,
	success: function(data){
		if(data.state == 10001 ||data.detail=="用户未登录"){
			// alert("用户未登录");
			// window.location.href="/admin/pages/sign_in.html";
		}
	},
	error: function(){

	},

	traditional:true,
});

function getUsers(){
	var ajax = $.ajax({
		url: "../source/JSON/users.json",
		type: "GET"
	});
	return ajax;
}
//////////////////
function adminLogin(name,password){
	var ajax = $.ajax({
		url: baseUrl+"/adminLogin",
		data:{
			name:name,
			password:password,
		},
		type: "POST",
	});
	return ajax;
}
function isLogin(){
	var ajax = $.ajax({
		url: baseUrl+"/isLogin",
		type: "GET"
	});
	return ajax;
}
function logout(){
	var ajax = $.ajax({
		url: baseUrl+"/logout",
		type: "GET"
	});
	return ajax;
}


function editPassword(oPassword,nPassword){
	var ajax = $.ajax({
		url: baseUrl+"/editPassword",
		data:{
			oPassword:oPassword,
			nPassword:nPassword,
		},
		type: "POST",
	});
	return ajax;
}
//

function getImg(){
	var ajax = $.ajax({
		url: baseUrl+"/getImgList",
		type: "GET"
	});
	return ajax;
}
function uploadImg(file,name, filename){
	var fd = new FormData();
	if(filename){
		fd.append("file",file, filename);
	}
	else{
		fd.append("file",file);
	}
	fd.append("name",name);
	fd.append("type",1);
	var ajax = $.ajax({
		url: baseUrl+"/uploadFile",
		data: fd,
		processData: false,
    	contentType: false,
    	xhrFields: {
	        withCredentials: false
	    },
		type: "POST"
	});
	return ajax;
}
function uploadVideo(file,name,img){
	var fd = new FormData();
	fd.append("file",file);
	fd.append("name",name);
	fd.append("type",0);
	fd.append("img",img);
	var ajax = $.ajax({
		url: baseUrl+"/uploadFile",
		data: fd,
		processData: false,
    	contentType: false,
    	xhrFields: {
	        withCredentials: false
	    },
		type: "POST"
	});
	return ajax;
}
function uploadPdf(file,name){
	var fd = new FormData();
	fd.append("file",file);
	fd.append("name",name);
	fd.append("type",2);
	var ajax = $.ajax({
		url: baseUrl+"/uploadFile",
		data: fd,
		processData: false,
        	contentType: false,
        	xhrFields: {
		        withCredentials: false
		    },
		type: "POST"
	});
	return ajax;
}
//
function editVideo(id,url,img){
	var ajax = $.ajax({
		url: baseUrl+"/editVideo",
		data: {
			id:id,
			url:url,
			img:img,
		},
		type: "POST",
	});
	return ajax;
}
//

function deleteImg(url,type){
	var ajax = $.ajax({
		url: baseUrl+"/deleteFile",
		data:{
			url:url,
			type:type,
		},
		type: "POST"
	});
	return ajax;
}

function deletePdf(url,type){
	var ajax = $.ajax({
		url: baseUrl+"/deleteFile",
		data:{
			url:url,
			type:type,
		},
		type: "POST"
	});
	return ajax;
}
////

function getIntroduction(){
	var ajax = $.ajax({
		url: baseUrl+"/getIntroduction",
		type: "GET"
	});
	return ajax;
}
function editIntroduction(id,name,value,description,img){
	var ajax = $.ajax({
		url: baseUrl+"/editSetting",
		traditional:true,
		data:{
			id: id,
			name: name,
			value: value,
			description: description,
			img: img,
		},
		type: "POST"
	});
	return ajax;
}
//
function getTeam(){
	var ajax = $.ajax({
		url: baseUrl+"/getManagerTeamList",
		type: "GET"
	});
	return ajax;
}
function addTeam(name,spell,appellation,main_title,sub_title,description,img){
	var ajax = $.ajax({
		url: baseUrl+"/addManager",
		traditional:true,
		data:{
			name:name,
			spell:spell,
			appellation:appellation,
			main_title:main_title,
			sub_title:sub_title,
			description:description,
			img:img,
		},
		type: "POST"
	});
	return ajax;
}
function deleteTeam(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteManager",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function editTeam(id,name,spell,appellation,main_title,sub_title,description,img){
	var ajax = $.ajax({
		url: baseUrl+"/editManager",
		traditional:true,
		data:{
			id:id,
			name:name,
			spell:spell,
			appellation:appellation,
			main_title:main_title,
			sub_title:sub_title,
			description:description,
			img:img,
		},
		type: "POST"
	});
	return ajax;
}

////
function getDevelopment(){
	var ajax = $.ajax({
		url: baseUrl+"/getDevelopmentList",
		type: "GET"
	});
	return ajax;
}
function getDevelopment_detail(id){
	var ajax = $.ajax({
		url: baseUrl+"/getDevelopment",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}

function deleteArticle(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteArticle",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function addArticle(time,title,summary,text,img,type,url){
	var ajax = $.ajax({
		url: baseUrl+"/addArticle",
		data:{
			time:time,
			title:title,
			summary:summary,
			text:text,
			img:img,
			type:type,
			url:url,
		},
		type: "POST"
	});
	return ajax;
}
function editArticle(id,time,title,summary,text,img,type,url){
	var ajax = $.ajax({
		url: baseUrl+"/editArticle",
		traditional:true,
		data:{
			id:id,
			time:time,
			title:title,
			summary:summary,
			text:text,
			img:img,
			type:type,
			url:url,
		},
		type: "POST"
	});
	return ajax;
}

////
function getHoldingcompany(){
	var ajax = $.ajax({
		url: baseUrl+"/getHoldingCompanyList",
		type: "GET"
	});
	return ajax;
}
function addHoldingCompany(img,name,description){
	var ajax = $.ajax({
		url: baseUrl+"/addHoldingCompany",
		data:{
			img:img,
			name:name,
			description:description,
		},
		type: "POST"
	});
	return ajax;
}
function deleteHoldingCompany(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteHoldingCompany",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function editHoldingCompany(id,img,name,description){
	var ajax = $.ajax({
		url: baseUrl+"/editHoldingCompany",
		data:{
			id:id,
			img:img,
			name:name,
			description:description,
		},
		type: "POST"
	});
	return ajax;
}
//////////////////
function getCredential(){
	var ajax = $.ajax({
		url: baseUrl+"/getHonorList",
		type: "GET"
	});
	return ajax;
}
function addCredential(title,img){
	var ajax = $.ajax({
		url: baseUrl+"/addHonor",
		data:{
			title:title,
			img:img,
		},
		type: "POST"
	});
	return ajax;
}
function deleteCredential(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteHonor",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function editCredential(id,title,img){
	var ajax = $.ajax({
		url: baseUrl+"/editHonor",
		data:{
			id:id,
			title: title,
			img:img,
		},
		type: "POST"
	});
	return ajax;
}
////
function getPartner(){
	var ajax = $.ajax({
		url: baseUrl+"/getPartnerList",
		type: "GET"
	});
	return ajax;
}
function addPartner(name,img,turn_url){
	var ajax = $.ajax({
		url: baseUrl+"/addPartner",
		data:{
			name:name,
			img:img,
			turn_url:turn_url,
		},
		type: "POST"
	});
	return ajax;
}
function deletePartner(id){
	var ajax = $.ajax({
		url: baseUrl+"/deletePartner",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function editPartner(id,name,img,turn_url){
	var ajax = $.ajax({
		url: baseUrl+"/editPartner",
		data:{
			id:id,
			name: name,
			img:img,
			turn_url:turn_url,
		},
		type: "POST"
	});
	return ajax;
}
////
function getProshow(){
	var ajax = $.ajax({
		url: baseUrl+"/getGalleryList",
		type: "GET"
	});
	return ajax;
}

function getPro_content(id){
	var ajax = $.ajax({
		url: baseUrl+"/getGallery",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function getProdynamic(){
	var ajax = $.ajax({
		url: baseUrl+"/getDynamicList",
		type: "GET"
	});
	return ajax;
}
//
function getSearchinput(){
	var ajax = $.ajax({
		url: baseUrl+"/getReportList",
		type: "GET"
	});
	return ajax;
}
function getSearchobserve(){
	var ajax = $.ajax({
		url: baseUrl+"/getObservationList",
		type: "GET"
	});
	return ajax;
}
//
function getAnnouncement(){
	var ajax = $.ajax({
		url: baseUrl+"/getAnnouncementList",
		type: "GET"
	});
	return ajax;
}
function deleteAnnouncement(id){
	var ajax = $.ajax({
		url: baseUrl+"/deletePartner",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
//
function getCompanynews(){
	var ajax = $.ajax({
		url: baseUrl+"/getCompanyNewsList",
		type: "GET"
	});
	return ajax;
}
function getIndustrynews(){
	var ajax = $.ajax({
		url: baseUrl+"/getIndustryNewsList",
		type: "GET"
	});
	return ajax;
}
function getRecruitment(){
	var ajax = $.ajax({
		url: baseUrl+"/getRecruitmentList",
		type: "GET"
	});
	return ajax;
}
function addRecruitment(position,duty,requirement,place,email){
	var ajax = $.ajax({
		url: baseUrl+"/addRecruitment",
		traditional:true,
		data:{
			position:position,
			duty:duty,
			requirement:requirement,
			place:place,
			email:email,
		},
		type: "POST"
	});
	return ajax;
}
function deleteRecruitment(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteRecruitment",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function editCrucitement(id,position,duty,requirement,place,email){
	var ajax = $.ajax({
		url: baseUrl+"/editRecruitment",
		data:{
			id:id,
			position:position,
			duty:duty,
			requirement:requirement,
			place:place,
			email:email,
		},
		type: "POST"
	});
	return ajax;
}

//
function getContactus(){
	var ajax = $.ajax({
		url: baseUrl+"/getContact",
		type: "GET"
	});
	return ajax;
}

//
function getFindus(){
	var ajax = $.ajax({
		url: baseUrl+"/getFind",
		type: "GET"
	});
	return ajax;
}
function addFindUs(name,value){
	var ajax = $.ajax({
		url: baseUrl+"/addFindUs",
		data:{
			name:name,
			value:value,
		},
		type: "POST"
	});
	return ajax;
}
function editFindUs(id,value,type_this){
	var ajax = $.ajax({
		url: baseUrl+"/editFindUs",
		data:{
			id:id,
			value:value,
			type:type_this,
		},
		type: "POST"
	});
	return ajax;
}

//
function getUser(){
	var ajax = $.ajax({
		url: baseUrl+"/getUserList",
		type: "GET"
	});
	return ajax;
}
function getVideo(){
	var ajax = $.ajax({
		url: baseUrl+"/getVideoList",
		type: "GET"
	});
	return ajax;
}
function getPdfList(){
	var ajax = $.ajax({
		url: baseUrl+"/getPdfList",
		type: "GET"
	});
	return ajax;
}


//
function getLink(){
	var ajax = $.ajax({
		url: baseUrl+"/getLinks",
		type: "GET"
	});
	return ajax;
}
////
function getHomeimgList(){
	var ajax = $.ajax({

		url: baseUrl+"/getHomeImg",
		type: "GET"
	});
	return ajax;
}
function editHomeimgList(urls){
	var ajax = $.ajax({
		traditional:true,
		url: baseUrl+"/setHomeImgs",
		data:{
			urls:urls
		},
		type: "POST"
	});
	return ajax;
}
function getArticleSquare(){
	var ajax = $.ajax({
		url: baseUrl+"/getArticleSquareTitle",
		type: "GET"
	});
	return ajax;
}
function editArticleSquare(titles){
	var ajax = $.ajax({
		traditional:true,
		url: baseUrl+"/setArticleSquares",
		data:{
			titles:titles
		},
		type: "POST"
	});
	return ajax;
}
////
function getCarouselList(){
	var ajax = $.ajax({

		url: baseUrl+"/getCarouselList",
		type: "GET"
	});
	return ajax;
}
function deleteCarousel(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteCarousel",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function addCarousel(img,url,order){
	var ajax = $.ajax({
		url: baseUrl+"/addCarousel",
		data:{
			img:img,
			url:url,
			order:order,
		},
		type: "POST"
	});
	return ajax;
}
function editCarousel(id,img,url,order){
	var ajax = $.ajax({
		url: baseUrl+"/editCarousel",
		data:{
			id:id,
			img:img,
			url:url,
			order:order,
		},
		type: "POST"
	});
	return ajax;
}
//
function getHomeVideo(){
	var ajax = $.ajax({

		url: baseUrl+"/getHomeVideo",
		type: "GET"
	});
	return ajax;
}
function setHomeVideo(id){
	var ajax = $.ajax({
		url: baseUrl+"/setHomeVideo",
		data:{
			id:id,
		},
		type: "POST"
	});
	return ajax;
}
function getHomeArticle(){
	var ajax = $.ajax({
		url: baseUrl+"/getHomeArticle",
		type: "GET"
	});
	return ajax;
}
function getResponsibility(){
	var ajax = $.ajax({
		url: baseUrl+"/getResponsibility",
		type: "GET"
	});
	return ajax;
}
//
function addSetting(name,value,description,img){
	var ajax = $.ajax({
		url: baseUrl+"/addSetting",
		data:{
			name: name,
			value: value,
			description: description,
			img: img,
		},
		type: "POST"
	});
	return ajax;
}
function deleteSetting(id){
	var ajax = $.ajax({
		url: baseUrl+"/deleteSetting",
		data:{
			id: id,
		},
		type: "POST"
	});
	return ajax;
}
//
function getMagazineList(){
	var ajax = $.ajax({
		url: baseUrl+"/getMagazineList",
		type: "GET"
	});
	return ajax;
}
function searchArticle(keyWord){
	var ajax = $.ajax({
		url: baseUrl+"/searchArticle",
		data:{
			keyWord: keyWord,
		},
		type: "POST"
	});
	return ajax;
}
