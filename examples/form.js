<div id="scottDiv" class="et_pb_module et_pb_contact_form_container clearfix et_pb_contact_form_0"><p>
</p><div id="et-pb-contact-message" class="et-pb-contact-message et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_2"> </div><p>
</p><div class="et_pb_contact"><p>
<form
id="scottForm"
name="insightly_web_to_lead"
class="et_pb_contact_form clearfix" >

</p><p class="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_half">
<label class="et_pb_contact_form_label" for="Title">
Title
</label>

</p><p>

</p><p class="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_half et_pb_contact_field_last">
<label class="et_pb_contact_form_label" for="OrganizationName">
Organization
</label>

</p><p>

</p><p class="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_half">
<label class="et_pb_contact_form_label" for="FirstName">
First Name
</label>

</p><p>

</p><p class="et_pb_contact_field et_pb_contact_field_3 et_pb_contact_field_half et_pb_contact_field_last">
<label class="et_pb_contact_form_label" for="LastName">
Last Name
</label>

</p><p>


<label class="et_pb_contact_form_label" for="email">
Email Address
</label>

</p><p>

</p><p class="et_pb_contact_field et_pb_contact_field_5 et_pb_contact_field_half et_pb_contact_field_last">
<label class="et_pb_contact_form_label" for="phone">
Phone
</label>

</p><p>



<input type="hidden" name="LeadSource" value="2699404"

<br />
</p><div class="et_contact_bottom_container">
<button id="scottFormSubmit" class="et_pb_contact_submit et_pb_button" type="submit">
Submit
</button>
</div><p>



</p></div><p>
</p></div><p>

var source = document.getElementById('scottDiv');</p><p>
var inner = source.innerHTML;</p><p>
document.getElementById('et_pb_contact_form_0').innerHTML = inner;</p><p>
source.remove();</p><p>

function validateEmail(email) {</p><p>
var re = /^(([^()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;</p><p>
return re.test(String(email).toLowerCase());</p><p>
}</p><p>

window.errTxt = document.getElementById("et-pb-contact-message");</p><p>
var submitBtn = document.getElementById('scottFormSubmit');</p><p>

window.processForm = function (e) {</p><p>
e.preventDefault();</p><p>
var hasError = false;</p><p>
var errList = [];</p><p>
document.querySelectorAll("input")</p><p>
.forEach(</p><p>
function(a) {</p><p>
if(a.type === "text"){</p><p>
if(a.value === "" && a.required === true) {</p><p>
hasError = true;</p><p>
if (!a.classList.contains("et_contact_error")) {</p><p>
a.classList.add("et_contact_error");</p><p>
}</p><p>
errList.push(a.name);</p><p>
} else if( typeof a !== "undefined"</p><p>
&& typeof a.dataset !== "undefined"</p><p>
&& typeof a.dataset.original_id !== "undefined"</p><p>
&& a.dataset.original_id === "email"</p><p>
&& validateEmail(a.value) !== true) {</p><p>
hasError = true;</p><p>
if (!a.classList.contains("et_contact_error")) {</p><p>
a.classList.add("et_contact_error");</p><p>
}</p><p>
errList.push(a.name);</p><p>
} else {</p><p>
a.classList.remove("et_contact_error");</p><p>
}</p><p>
}</p><p>
}</p><p>
);</p><p>
if(hasError === true) {</p><p>
window.errTxt.innerHTML = "</p><p class="et_pb_text_inner">There is a problem submitting the information you provided. Please correct the fields that have a red box around them.</p><p>";</p><p>
return false;</p><p>
}</p><p>


var formElement = document.getElementById('scottForm');</p><p>
var formData = new FormData(formElement);</p><p>
var request = new XMLHttpRequest();</p><p>

// This is a CORS request, so you cannot interact with the response</p><p>
// object.</p><p>
// If you create an API integration then you can find more information</p><p>
// about the submitted information.</p><p>
// If you are able to change</p><p>

request.onreadystatechange = function(a,b,c) {</p><p>
if (this.readyState!==4) return;</p><p>
window.errTxt.innerHTML = "</p><p class="et_pb_text_inner">Your information has been submitted. We will be in touch as soon as possible.</p><p>";</p><p>
document.querySelectorAll("input")</p><p>
.forEach(</p><p>
function(a) {</p><p>
if(a.type === "text"){</p><p>
a.value=""</p><p>
}</p><p>
}</p><p>
);</p><p>
return true;</p><p>
}</p><p>
request.open("POST", "https://crm.na1.insightly.com/WebToLead/Create");</p><p>
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");</p><p>
request.send(formData);</p><p>

window.errTxt.innerHTML = "</p><p class="et_pb_text_inner">Submitting your information.</p><p>";</p><p>
return false;</p><p>
}</p><p>

if (submitBtn.addEventListener) {</p><p>
submitBtn.addEventListener("click", window.processForm);</p><p>
}</p><p>

