!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(146),i=[t];i.push(n(148)),i.push(n(154)),i.push(n(157)),i.push(n(160)),i.push(n(162)),i.push(n(172)),i.push(n(175)),i.push(n(177)),i.push(n(180)),i.push(n(183)),i.push(n(187)),i.push(n(190)),i.push(n(194)),i.push(n(198)),i.push(n(203)),i.push(n(204)),i.push(n(205)),i.push(n(208)),i.push(n(209)),i.push(n(213)),i.push(n(218)),i.push(n(221)),i.push(n(222)),g.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(82),a=n(23),o=n(16);n(126);var s=o.get("stores/directive"),c=n(88);if(!c.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var u,l=n(128),d=n(116),f=n(129),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8261443030"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Georgia Tech Program Pricing", "bucketingStrategy": null, "variations": [{"id": "8258751536", "actions": [{"viewId": "8261443030", "changes": [{"selector": "li:nth-of-type(9) > .block-list__desc", "dependencies": [], "attributes": {"html": "Free to try or pursue the MicroMasters credential for $1500"}, "type": "attribute", "id": "B8ADAA18-232C-4BDC-A5ED-9B080489B07C", "css": {}}]}], "name": "Updated Pricing"}], "audienceIds": null, "changes": null, "id": "8254051035", "integrationSettings": null}], "id": "8248626618", "weightDistributions": null, "name": "Georgia Tech Program Pricing", "groupId": null, "commitId": "8262440925", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8562284423"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Hide Review Courses", "bucketingStrategy": null, "variations": [{"id": "9662632332", "actions": [{"viewId": "8562284423", "changes": [{"value": function($){function hideReviewCourses() {
  // Put all review course ids here. Can easily be updated.
  var review_course_ids = [
    "course-v1\\:MITx\\+6\\.002\\.3x_1_review\\+2T2016",
    "course-v1\\:MITx\\+8\\.370\\.1x_review\\+1T2018",
    "course-v1\\:MITx\\+8\\.370\\.2x_review\\+1T2018",
    "course-v1\\:MITx\\+8\\.370\\.3x_review\\+1T2018"
  ];
  for (var i = 0; i < review_course_ids.length; i++) {
    var id = review_course_ids[i];
    var review_course_card = $("#course-title-" + id);
    if (review_course_card) {
      $(review_course_card.closest(".course-item")).remove();
    }
  }
}

var numCoursesBefore = $(".course-item").length;
var intervalID = setInterval(function() {
  var numCoursesAfter = $(".course-item").length;
  if (numCoursesBefore === numCoursesAfter) {
    clearInterval(intervalID);
    hideReviewCourses();
  } else {
    numCoursesBefore = numCoursesAfter;
  }
}, 100);
}, "dependencies": [], "type": "custom_code", "id": "3E8E3769-922B-49CF-A7D4-95AE89562EF1"}]}], "name": "Hide Review Courses"}], "audienceIds": null, "changes": null, "id": "9665742865", "integrationSettings": null}], "id": "9667832193", "weightDistributions": null, "name": "Hide Review Courses", "groupId": null, "commitId": "10163791146", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"google_universal_analytics": {"universal_analytics_tracker": "", "universal_analytics_slot": "86"}}, "integrationStringVersion": 2, "viewIds": ["10318510742", "10339411686"], "experiments": [{"weightDistributions": [{"entityId": "10313172556", "endOfRange": 1000}, {"entityId": "10321262054", "endOfRange": 10000}], "audienceName": "EdX Preferred Language is English", "name": "GE Interviews", "bucketingStrategy": null, "variations": [{"id": "10313172556", "actions": [{"viewId": "10318510742", "changes": []}], "name": "Original"}, {"id": "10321262054", "actions": [{"viewId": "10318510742", "changes": [{"value": "<img src=\"https://prod-edx-mktg-edit.edx.org/sites/default/files/ge_monogram_primary_blue_rgb-1.png\" width=120px;>\n     \n     <p>Get an interview with GE! If you complete and pass the program in 2018, GE will guarantee you an interview in Boston for an internship or full-time role. Simply enroll in the program and email edX@ge.com when you've completed all the courses and passed the program or if you have any questions. Open to Massachusetts residents only.</p>", "selector": ".endorser", "dependencies": [], "operator": "after", "type": "append", "id": "528CE74F-5A98-4737-8B37-4D4E08EDDA84"}, {"selector": "blockquote > img", "dependencies": [], "attributes": {"style": "margin-top: 25px; margin-left:-35px"}, "type": "attribute", "id": "75CD75DA-576C-4F5B-9576-C545CD58D91F", "css": {}}, {"selector": "blockquote > p", "dependencies": [], "attributes": {"style": "margin-top: 20px"}, "type": "attribute", "id": "8C128627-B0AC-4EF5-84CA-54E9CD49CBF4", "css": {}}]}, {"viewId": "10339411686", "changes": [{"value": "<p>Get an interview with GE! If you complete and pass the program in 2018, GE will guarantee you an interview in Boston for an internship or full-time role. Simply enroll in the program and email edX@ge.com when you've completed all the courses and passed the program or if you have any questions. Open to Massachusetts residents only.</p>", "selector": ".endorsement", "dependencies": [], "operator": "after", "type": "append", "id": "A819EFE1-8905-4093-86BB-6B8789F71275"}]}], "name": "GE Interview"}], "audienceIds": ["or", "8430051876"], "changes": null, "id": "10308011595", "integrationSettings": null}], "id": "10313432355", "weightDistributions": null, "name": "GE Interviews", "groupId": null, "commitId": "10306019504", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10890170513", "10896190779", "10896520899", "10936032353"], "experiments": [{"weightDistributions": [{"entityId": "11387141596", "endOfRange": 10000}], "audienceName": "Not Enterprise,Not On Campus", "name": "Paid Only Program Courses", "bucketingStrategy": null, "variations": [{"id": "10865800442", "actions": [{"viewId": "10896190779", "changes": [{"dependencies": [], "type": "custom_code", "id": "5F3FB0FA-17F8-40F4-8976-7A02400712BB", "value": function($){var utils = window['optimizely'].get('utils');

window.trackPageView("about");

utils.waitForElement('[data-field="price"]').then(function(){
  var courseId = jQuery('main').data('course-id'),
      certPrice = window.verifiedOnly.certPrices[courseId],
      certSku = window.verifiedOnly.certSkus[courseId],
      selection = '<a href="https://ecommerce.edx.org/basket/add?sku=' + certSku + '" class="btn btn-cta txt-center purchase-button">Enroll Now (' + certPrice + ')</a>';
  utils.waitForElement('.course-side-area .js-enroll-btn').then(function(){
    var courseId = jQuery('main').data('course-id'),
        eventProps = {course_id: courseId};
    if (jQuery('.already-enrolled').length === 0) {
      jQuery('.js-enroll-btn').hide();
      jQuery('.course-side-area .js-enroll-btn').before(selection);
      window.experimentTrackLink('.course-side-area .purchase-button', 'edx.bi.experiments.verified_only.course_about_upgrade_click', eventProps);
      window.experimentTrackLink('.course-side-area .purchase-button', 'edx.bi.experiments.verified_only.upgrade_click', eventProps);
      window.experimentTrackLink('.course-side-area .purchase-button', 'edx.bi.experiments.verified_only.enroll_click', eventProps);
    }
  });
  utils.waitForElement('.course-main-area .js-enroll-btn').then(function(){
    var courseId = jQuery('main').data('course-id'),
        eventProps = {course_id: courseId};
    if (jQuery('.already-enrolled').length === 0) {
      jQuery('.js-enroll-btn').hide();
      jQuery('.course-main-area .js-enroll-btn').before(selection);
      window.experimentTrackLink('.course-main-area .purchase-button', 'edx.bi.experiments.verified_only.course_about_upgrade_click', eventProps);
      window.experimentTrackLink('.course-main-area .purchase-button', 'edx.bi.experiments.verified_only.upgrade_click', eventProps);
      window.experimentTrackLink('.course-main-area .purchase-button', 'edx.bi.experiments.verified_only.enroll_click', eventProps);
    }
  });
  jQuery('[data-field="price"]').after('<li class="newPrice"><span class="block-list__label"><span aria-hidden="true" class="fa fa-tag fa-lg"></span>Price:</span><span class="block-list__desc"><span class="uppercase">' + certPrice + '</span><br>Includes a Verified Certificate</span></li>');
  jQuery('li[data-field="price"]').remove();
  utils.waitForElement('[data-field="price"]').then(function(){
    if (jQuery('.newPrice').length===0) {
		  jQuery('[data-field="price"]').after('<li class="newPrice"><span class="block-list__label"><span aria-hidden="true" class="fa fa-tag fa-lg"></span>Price:</span><span class="block-list__desc"><span class="uppercase">' + certPrice + '</span><br>Includes a Verified Certificate</span></li>');
    }
  });
});
utils.waitForElement('#enroll-type-section .verified-list__desc').then(function(){
  jQuery('#enroll-type-section .verified-list__desc:last').text("EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally");
});
}}, {"value": "<style>.js-enroll-btn {\n\tdisplay: none;\n}\n\n.already-enrolled {\n\tdisplay: inline-block !important;\n}\n\nli[data-field=\"price\"] {\n\tdisplay: none;\n}\n\n.js-course-side-area .js-select-run {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "CA87239A-B4DC-42BE-8D6E-BEB8128529BD"}]}, {"viewId": "10896520899", "changes": [{"dependencies": [], "type": "custom_code", "id": "7984F529-66AC-486F-8584-A587C34F7E99", "value": function($){var courseId = JSON.parse($('#user-metadata').text()).course_id;
window.location.href='https://courses.edx.org/courses/' + courseId + '/course/';
}}]}, {"viewId": "10936032353", "changes": [{"dependencies": [], "type": "custom_code", "id": "876DAAFF-1480-46AD-AFDD-781E01234225", "value": function($){var utils = window['optimizely'].get('utils');
utils.waitForElement('#financial-assistance-course').then(function(){
  var options = [];
  $.each(window.verifiedOnly.courseNames, function(courseId, courseName) {
    if ($('#financial-assistance-course').html().indexOf(courseId) === -1) {
			options.push('<option value="' + courseId + '">' + courseName + '</option>');
    }
  });
  $.each(options, function(index, value) {
    if ($('#financial-assistance-course').children().length > 0) {
      $('#financial-assistance-course').children().last().after(value);
    } else {
      $('#financial-assistance-course').html(value);
    }
  });
});
}}]}, {"viewId": "10890170513", "changes": [{"dependencies": [], "type": "custom_code", "id": "442C2D4B-4A0C-42B4-9CFA-0BCAF757237D", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    certSku = window.verifiedOnly.certSkus[courseId],
    redirectLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : window.verifiedOnly.aboutPages[courseId];
if (metadata.enrollment_mode !== "verified") {
        window.location.href = redirectLink;
}
}}]}], "name": "No Preview"}, {"id": "10876260554", "actions": [{"viewId": "10896520899", "changes": [{"dependencies": [], "type": "custom_code", "id": "0290F61F-0AD4-4F89-A2CB-6D70434BD33D", "value": function($){$ = jQuery;
var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : null,
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    upgradeLink = metadata.upgrade_link,
    eventProps = {course_id: courseId},
    utils = window['optimizely'].get('utils');

window.trackPageView('track_selection');
window.updateKeyValueStore('enrolled_' + courseId, 'true');

utils.waitForElement('.register-choice-certificate.v1').then(function(){
  var courseId = JSON.parse($('#user-metadata').text()).course_id;
    $($('.register-choice-certificate.v1 li')[3]).html('<li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally</li>');
  $('.register-choice-certificate.v1 .title').text('Pursue a Verified Certificate and Unlock the Full Course');
  if (window.location.search.indexOf('paywall') === -1) {
    window.experimentEmitEvent('edx.bi.experiments.verified_only.regular_track_selection', eventProps);
    //$('.register-choice-audit [name="audit_mode"]').after('<div style="margin-top: 10px;">Expires 48 Hours after selecting<br>audit or viewing the course</div>');
    $('.register-choice-audit.v1 .title').text('48-Hour Trial');
    $('.register-choice-audit.v1 .copy').html('<p>Try this course for free and have complete access to all the course material, activities, tests, and forums for the first 48 hours.</p>');
    $('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
  } else {
    window.experimentEmitEvent('edx.bi.experiments.verified_only.end_of_trial_track_selection', eventProps);
    var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
    previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>You have reached the end of your 48-hour trial in ' + courseTitle + '. Upgrade to unlock the course and pursue a Verified Certificate.</div> </div>';
    $('.register-choice-audit.v1').hide();
    $('.deco-divider.v1').hide();
    $('.page-header').hide();
    $('.register-choice-certificate.v1').before(previewAlert);
    $('.container').css('padding-top', 0);
  }
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.verified_only.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.verified_only.upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.verified_only.trial_click', eventProps);
});
}}]}, {"viewId": "10890170513", "changes": [{"dependencies": [], "type": "custom_code", "id": "A70FBA9B-67BB-4111-A679-4F84ECB4D39A", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {course_id: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.verifiedOnly.certSkus[courseId],
		upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    paywallUrl = 'https://courses.edx.org/course_modes/choose/' + courseId + '?paywall',
    utils = window['optimizely'].get('utils'),
    previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>To end the preview and access the full course, choose an option below.</div> </div>',
    previewBanner =  '<div style="max-width: 720px; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div style="margin-right: 15px;"><i class="fa fa-2x fa-info-circle" style=""></i></div><div><div style="font-weight: 600;font-size: 16px;font-family: &quot;Open Sans&quot;;">Course Trial</div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">There are ' + '<span style="color:#636C72" id="countdown"><span><span class="hours"> hours </span></span><span><span class="minutes"> minutes </span></span></span>' +  ' left in your trial.&nbsp;&nbsp;</span><br><a class="preview-banner-body" style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade to unlock the course and pursue a Verified Certificate</a></div></div>',
    previewBannerEnd =  '<div style="max-width: 720px; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div style="margin-right: 15px;"><i class="fa fa-2x fa-info-circle" style=""></i></div><div><div style="font-weight: 600;font-size: 16px;font-family: &quot;Open Sans&quot;;">End of Trial</div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">You have reached the end of your 48-hour trial in this course. <br><a class="preview-banner-body" style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade to unlock the course and pursue a Verified Certificate</a></div></div>';

function getTimeRemaining(end) {
    now  = new Date();
    diff = end - now;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
  	hh = hours;
    mm = mins  - hours * 60;

  return {
    'total': diff,
    'hours': hh,
    'minutes': mm
  };
}

function initializeClock(id, end) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(end);

    if (t.hours > 1) {
    	$(minutesSpan).hide();
    } else {
      $(hoursSpan).hide();
    	$(minutesSpan).show();
    }
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ' Hours ';
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)  + ' Minutes ';

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 10000);
}

var utils = window['optimizely'].get('utils');
window.trackPageView("courseware");

utils.waitForElement('.course-message').then(function(){
  $('.course-message').hide();
});
utils.waitForElement('.page-content-main').then(function(){
  $.ajax({ type: "GET",   
          url: "https://courses.edx.org/api/experiments/v0/data/",   
          async: false,
          success : function(response)
          {
            var end = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 * 2),
            		arrayLength = response.results.length,
                hasPreview = false,
                noDate = true;
            for (var i = 0; i < arrayLength; i++) {
              if (response.results[i].key.indexOf('timer_') > -1) {
                end = new Date(response.results[i].value);
                if (new Date() > end){
                  noDate = false;
                  previewBanner = previewBannerEnd;
                } else {
                	noDate = false;
                }
              }	
            }
            if (noDate) {
            	window.updateKeyValueStore('timer_' + courseId, end);
            }
            $('.page-content-main').prepend(previewBanner);
            window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.verified_only.banner_upgrade_click', eventProps);
            window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.verified_only.upgrade_click', eventProps);
            initializeClock('countdown', end);
          }
  });
});

utils.waitForElement('.sequence-nav').then(function(){
  $.ajax({ type: "GET",   
          url: "https://courses.edx.org/api/experiments/v0/data/",   
          async: false,
          success : function(response)
          {
            var end = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 * 2),
            		arrayLength = response.results.length,
                hasPreview = true,
                noDate = true,
                url;
            for (var i = 0; i < arrayLength; i++) {
              if (response.results[i].key.indexOf('timer_') > -1) {
                end = new Date(response.results[i].value);
                if (new Date() > end){
                  noDate = false;
                  hasPreview = false;
                  url = 'https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
						 			window.location.href=url;
                } else {
                	noDate = false;
                }
              }	
            }
            if (noDate) {
            	window.updateKeyValueStore('timer_' + courseId, end);
            }
            if (hasPreview) {
              $('.sequence-nav').after(previewBanner);
              window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.verified_only.banner_upgrade_click', eventProps);
              window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.verified_only.upgrade_click', eventProps);
              initializeClock('countdown', end);
            }
          }
  });
});
}}, {"value": "<style>.date-summary-verified-upgrade-deadline .localized-datetime {\n\tdisplay: none;\n}\n#certDIV_1 {\n    background-position: 100% 50%;\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    display: flex;\n    height: 310px;\n    max-width: 720px;\n    background: rgb(255, 255, 255) url(\"https://prod-edx-mktg-edit.edx.org/sites/default/files/gettyimages-638640762-edited-cert.jpg?\") no-repeat scroll 100% 50% / 80% padding-box border-box;\n    border: 1px solid rgb(211, 211, 211);\n    border-radius: 5px 5px 5px 5px;\n    font: normal normal 400 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 15px 0px;\n    padding: 10px 10px 10px 20px;\n}/*#certDIV_1*/\n\n#certDIV_2 {\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    height: 288px;\n    min-height: auto;\n    min-width: auto;\n    text-decoration: none solid rgb(51, 51, 51);\n    width: 213.109px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    height: 40px;\n    text-decoration: none solid rgb(51, 51, 51);\n    width: 300px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 28px / 40px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}/*#certDIV_3*/\n\n#certDIV_4 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    height: 209px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 213.109px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}/*#certDIV_4*/\n\n#certSTYLE_5, #certLINK_6 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    text-decoration: none solid rgb(25, 125, 29);\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}/*#certSTYLE_5, #certLINK_6*/\n\n#certDIV_7, #certDIV_10, #certDIV_13 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    height: 34px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 193.109px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 10px;\n}/*#certDIV_7, #certDIV_10, #certDIV_13*/\n\n#certI_8 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    display: inline-block;\n    height: 18px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 15.4375px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n    margin: 0px 15px 0px 2px;\n}/*#certI_8*/\n\n#certI_8:before {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    content: '\"\uf0a3\"';\n    text-decoration: none solid rgb(25, 125, 29);\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n}/*#certI_8:before*/\n\n#certBUTTON_9 {\n    color: rgb(25, 125, 29);\n    cursor: pointer;\n    height: 34px;\n    text-decoration: none solid rgb(25, 125, 29);\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 72.7188px;\n    user-select: none;\n    background: rgb(220, 236, 221) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(220, 236, 221);\n    border-radius: 17px 17px 17px 17px;\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 6px 12px;\n    transition: background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_9*/\n\n#certI_11 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    display: inline-block;\n    height: 18px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 18px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n    margin: 0px 15px 0px 0px;\n}/*#certI_11*/\n\n#certI_11:before {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    content: '\"\uf1d8\"';\n    text-decoration: none solid rgb(25, 125, 29);\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n}/*#certI_11:before*/\n\n#certBUTTON_12 {\n    color: rgb(25, 125, 29);\n    cursor: pointer;\n    height: 34px;\n    text-decoration: none solid rgb(25, 125, 29);\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 135.906px;\n    user-select: none;\n    background: rgb(220, 236, 221) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(220, 236, 221);\n    border-radius: 17px 17px 17px 17px;\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 6px 12px;\n    transition: background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_12*/\n\n#certI_14 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    display: inline-block;\n    height: 18px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 16.7188px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n    margin: 0px 15px 0px 2px;\n}/*#certI_14*/\n\n#certI_14:before {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    content: '\"\uf164\"';\n    text-decoration: none solid rgb(25, 125, 29);\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 400 normal 18px / 18px FontAwesome;\n}/*#certI_14:before*/\n\n#certBUTTON_15 {\n    color: rgb(25, 125, 29);\n    cursor: pointer;\n    height: 34px;\n    text-decoration: none solid rgb(25, 125, 29);\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 96.5156px;\n    user-select: none;\n    background: rgb(220, 236, 221) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(220, 236, 221);\n    border-radius: 17px 17px 17px 17px;\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 6px 12px;\n    transition: background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_15*/\n\n#certDIV_16 {\n    box-sizing: border-box;\n    color: rgb(117, 117, 117);\n    height: 17px;\n    text-decoration: none solid rgb(117, 117, 117);\n    width: 213.109px;\n    border: 0px none rgb(117, 117, 117);\n    font: normal normal 400 normal 12px / 17.1429px \"Open Sans\";\n    margin: 20px 0px 0px;\n}/*#certDIV_16*/\n\n#certDIV_17 {\n    box-sizing: border-box;\n    color: rgb(25, 125, 29);\n    height: 20px;\n    text-decoration: none solid rgb(25, 125, 29);\n    width: 300px;\n    border: 0px none rgb(25, 125, 29);\n    font: normal normal 600 normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 30px 0px 0px;\n}/*#certDIV_17*/\n\n#certA_18 {\n    background-position: 0px 0px;\n    box-sizing: border-box;\n    color: rgb(255, 255, 255);\n    text-decoration: none solid rgb(255, 255, 255);\n    touch-action: manipulation;\n    background: rgb(0, 129, 0) none repeat scroll 0px 0px / auto padding-box border-box;\n    border: 0px none rgb(0, 129, 0);\n    border-radius: 5px 5px 5px 5px;\n    font: normal normal 500 normal 13px / 20px \"Open Sans\";\n    padding: 10px 20px;\n    font-size: 14px;\n}/*#certA_18*/\n\n#buttonDIV_1 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 2px;\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    height: 60px;\n    left: 0px;\n    position: fixed;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: auto;\n    z-index: 1000000100;\n    background: rgb(239, 239, 239) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    margin: 0 0 10px 75px;\n    overflow: hidden;\n    transition: height 0.6s ease-in-out 0s, all 0.25s ease 0s;\n}/*#buttonDIV_1*/\n\n#buttonsvg_2 {\n    color: rgb(51, 51, 51);\n    display: none;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    overflow: hidden;\n}/*#buttonsvg_2*/\n\n#buttonsymbol_3 {\n    color: rgb(51, 51, 51);\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    overflow: hidden;\n}/*#buttonsymbol_3*/\n\n#buttontitle_4 {\n    color: rgb(51, 51, 51);\n    display: inline;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttontitle_4*/\n\n#buttonpolygon_5 {\n    color: rgb(51, 51, 51);\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: rgb(10, 255, 252);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonpolygon_5*/\n\n#buttonDIV_6 {\n    color: rgb(51, 51, 51);\n    display: none;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_6*/\n\n#buttonSPAN_7, #buttonSPAN_8 {\n    color: rgb(51, 51, 51);\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonSPAN_7, #buttonSPAN_8*/\n\n#buttonsvg_9 {\n    color: rgb(51, 51, 51);\n    display: none;\n    float: right;\n    height: 28.5px;\n    left: -2px;\n    position: relative;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: -4.5px;\n    width: 28.5px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    overflow: hidden;\n    transition: left 0.3s ease-in 0s, all 0s ease 0s;\n}/*#buttonsvg_9*/\n\n#buttonpath_10 {\n    color: rgb(51, 51, 51);\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: none;\n    stroke: rgb(255, 255, 255);\n    stroke-miterlimit: 10;\n    stroke-width: 2px;\n    d: path('M 8.7 7.1 l 3.4 3.6 M 8.7 12.8 l 3.4 -3.5');\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    transition: stroke 0.3s ease-in 0s, all 0s ease 0s;\n}/*#buttonpath_10*/\n\n#buttonDIV_11 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    height: 60px;\n    left: 1146.61px;\n    position: absolute;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    width: 23.3906px;\n    z-index: 1000;\n    background: rgb(173, 173, 173) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_11*/\n\n#buttonsvg_12 {\n    bottom: 23px;\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    display: block;\n    height: 14px;\n    left: 11.6875px;\n    position: absolute;\n    right: 7.20312px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 30px;\n    width: 9px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    margin: -7px 0px 0px -4.5px;\n    overflow: hidden;\n}/*#buttonsvg_12*/\n\n#buttong_13 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: none;\n    fill-rule: evenodd;\n    stroke: rgb(255, 255, 255);\n    stroke-linecap: square;\n    stroke-width: 3px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttong_13*/\n\n#buttonpath_14 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: none;\n    fill-rule: evenodd;\n    stroke: rgb(255, 255, 255);\n    stroke-linecap: square;\n    stroke-width: 3px;\n    d: path('M 6.583 11.545 L 2.417 7 M 2.417 7 l 4.166 -4.545');\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonpath_14*/\n\n#buttonsvg_15 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    display: none;\n    height: 14px;\n    left: 50%;\n    position: absolute;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 50%;\n    width: 9px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    margin: -7px 0px 0px -4.5px;\n    overflow: hidden;\n}/*#buttonsvg_15*/\n\n#buttontitle_16 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    display: inline;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttontitle_16*/\n\n#buttong_17 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: none;\n    fill-rule: evenodd;\n    stroke: rgb(255, 255, 255);\n    stroke-linecap: square;\n    stroke-width: 3px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttong_17*/\n\n#buttonpath_18 {\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    text-decoration: none solid rgb(51, 51, 51);\n    fill: none;\n    fill-rule: evenodd;\n    stroke: rgb(255, 255, 255);\n    stroke-linecap: square;\n    stroke-width: 3px;\n    d: path('M 2.417 2.455 L 6.583 7 M 6.583 7 l -4.166 4.545');\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonpath_18*/\n\n#buttonDIV_19 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    height: 60px;\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    z-index: 999;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    padding: 10px 0px;\n    transition: opacity 0.25s ease-in 0s, all 0s ease 0s;\n}/*#buttonDIV_19*/\n\n#buttonDIV_20 {\n    color: rgb(51, 51, 51);\n    height: 60px;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_20*/\n\n#buttonDIV_21 {\n    bottom: 4px;\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 60px;\n    left: 2px;\n    position: relative;\n    right: -2px;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: -4px;\n    width: 117px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    padding: 6px 4px 4px;\n}/*#buttonDIV_21*/\n\n#buttonH3_22 {\n    color: rgb(45, 45, 45);\n    height: 17px;\n    text-align: center;\n    text-decoration: none solid rgb(45, 45, 45);\n    width: 109px;\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 500 normal 24px / 17px franklin-normal-500, sans-serif;\n    margin: 0px 0px 8px;\n}/*#buttonH3_22*/\n\n#buttonP_23 {\n    color: rgb(45, 45, 45);\n    height: 16px;\n    text-align: center;\n    text-decoration: none solid rgb(45, 45, 45);\n    text-transform: uppercase;\n    width: 109px;\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 600 normal 9px / 16px nyt-franklin, \"Helvetica Neue\", Arial, sans-serif, sans-serif;\n    margin: 0px 0px 9px;\n}/*#buttonP_23*/\n\n#buttonP_24 {\n    color: rgb(45, 45, 45);\n    display: none;\n    text-align: center;\n    text-decoration: none solid rgb(45, 45, 45);\n    text-transform: uppercase;\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 600 normal 9px / 16px nyt-franklin, \"Helvetica Neue\", Arial, sans-serif, sans-serif;\n    margin: 0px 0px 9px;\n}/*#buttonP_24*/\n\n#buttonDIV_25 {\n    bottom: 10px;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 60px;\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: -10px;\n    width: 1px;\n    background: rgb(204, 204, 204) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_25*/\n\n#buttonDIV_26 {\n    bottom: -6px;\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 40px;\n    left: 0px;\n    letter-spacing: 0.016px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 6px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    padding: 0px 23.3906px;\n}/*#buttonDIV_26*/\n\n#buttonP_27 {\n    color: rgb(46, 46, 46);\n    height: 16px;\n    letter-spacing: 0.016px;\n    text-align: left;\n    text-decoration: none solid rgb(46, 46, 46);\n    border: 0px none rgb(46, 46, 46);\n    font: normal normal 500 normal 18px / 16px franklin-normal-500, sans-serif;\n    margin: 0px 0px 18px;\n    padding: 6px 0px 0px;\n}/*#buttonP_27*/\n\n#buttonSPAN_28 {\n    color: rgb(46, 46, 46);\n    letter-spacing: 0.016px;\n    text-align: left;\n    text-decoration: none solid rgb(46, 46, 46);\n    border: 0px none rgb(46, 46, 46);\n    font: normal normal 700 normal 18px / 16px franklin-normal-700, sans-serif;\n}/*#buttonSPAN_28*/\n\n#buttonSPAN_29 {\n    color: rgb(45, 45, 45);\n    display: none;\n    letter-spacing: 0.016px;\n    text-align: left;\n    text-decoration: none solid rgb(45, 45, 45);\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 300 normal 16px / normal franklin-normal-300, sans-serif;\n}/*#buttonSPAN_29*/\n\n#buttonSPAN_30 {\n    color: rgb(45, 45, 45);\n    letter-spacing: 0.016px;\n    text-align: left;\n    text-decoration: none solid rgb(45, 45, 45);\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 600 normal 16px / normal franklin-normal-600, sans-serif;\n}/*#buttonSPAN_30*/\n\n#buttonA_31 {\n    color: rgb(50, 104, 145);\n    display: none;\n    letter-spacing: 0.016px;\n    text-align: left;\n    text-decoration: none solid rgb(50, 104, 145);\n    border: 0px none rgb(50, 104, 145);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonA_31*/\n\n#buttonDIV_32 {\n    bottom: 37px;\n    color: rgb(51, 51, 51);\n    height: 34px;\n    left: 65%;\n    position: absolute;\n    right: 56px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 9px;\n    width: 182px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_32*/\n\n#buttonDIV_33 {\n    bottom: -4px;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 34px;\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 4px;\n    width: 182px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_33*/\n\n#buttonA_34, #buttonA_38, #buttonA_47 {\n    color: rgb(50, 104, 145);\n    text-decoration: none solid rgb(50, 104, 145);\n    border: 0px none rgb(50, 104, 145);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonA_34, #buttonA_38, #buttonA_47*/\n\n#buttonBUTTON_35 {\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    height: 34px;\n    text-decoration: none solid rgb(255, 255, 255);\n    text-transform: uppercase;\n    vertical-align: middle;\n    width: 182px;\n    background: rgb(0, 125, 184) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(255, 255, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 700 normal 12px / normal franklin-normal-700, sans-serif;\n    padding: 2px 5px 3px;\n    transition: all 0.3s ease 0s, all 0.4s ease 0s;\n}/*#buttonBUTTON_35*/\n\n#buttonDIV_36 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    height: 60px;\n    left: 0px;\n    opacity: 0;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    z-index: 998;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    transition: opacity 0.45s ease-out 0s, all 0.5s ease 0s;\n}/*#buttonDIV_36*/\n\n#buttonDIV_37 {\n    color: rgb(51, 51, 51);\n    height: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_37*/\n\n#buttonsvg_39 {\n    bottom: 7px;\n    color: rgb(50, 104, 145);\n    cursor: pointer;\n    display: block;\n    height: 63px;\n    left: 1111px;\n    position: absolute;\n    right: -4px;\n    text-decoration: none solid rgb(50, 104, 145);\n    top: -10px;\n    width: 63px;\n    z-index: 11111111;\n    transform: matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0);\n    border: 0px none rgb(50, 104, 145);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    overflow: hidden;\n}/*#buttonsvg_39*/\n\n#buttonpath_40 {\n    color: rgb(50, 104, 145);\n    cursor: pointer;\n    text-decoration: none solid rgb(50, 104, 145);\n    fill: none;\n    stroke: rgb(155, 155, 155);\n    stroke-miterlimit: 10;\n    stroke-width: 2px;\n    d: path('M 8.7 7.1 l 3.4 3.6 M 8.7 12.8 l 3.4 -3.5');\n    border: 0px none rgb(50, 104, 145);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    transition: stroke 0.3s ease-in 0s, all 1s ease 0s;\n}/*#buttonpath_40*/\n\n#buttonDIV_41 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    height: 60px;\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_41*/\n\n#buttonDIV_42 {\n    box-sizing: border-box;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 60px;\n    text-decoration: none solid rgb(51, 51, 51);\n    background: rgb(26, 183, 217) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    padding: 23.3906px;\n}/*#buttonDIV_42*/\n\n#buttonDIV_43 {\n    color: rgb(51, 51, 51);\n    height: 86px;\n    opacity: 0;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 400px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    transition: all 0.25s ease-in-out 0s, all 0.85s ease 0s;\n}/*#buttonDIV_43*/\n\n#buttonH1_44 {\n    color: rgb(255, 255, 255);\n    height: 29px;\n    text-decoration: none solid rgb(255, 255, 255);\n    border: 0px none rgb(255, 255, 255);\n    font: normal normal 700 normal 12px / 29px franklin-normal-700;\n    margin: 0px;\n}/*#buttonH1_44*/\n\n#buttonH1_45 {\n    color: rgb(255, 255, 255);\n    height: 31px;\n    text-decoration: none solid rgb(255, 255, 255);\n    border: 0px none rgb(255, 255, 255);\n    font: normal normal 300 normal 26px / 31px nyt-karnak-display, nyt-karnak-display-130124, georgia, \"times new roman\", times, serif;\n    margin: 0px;\n}/*#buttonH1_45*/\n\n#buttonH1_46 {\n    color: rgb(54, 50, 163);\n    height: 26px;\n    text-decoration: none solid rgb(54, 50, 163);\n    border: 0px none rgb(54, 50, 163);\n    font: normal normal 700 normal 26px / 26px nyt-franklin, \"Helvetica Neue\", Arial, sans-serif;\n    margin: 0px;\n}/*#buttonH1_46*/\n\n#buttonBUTTON_48 {\n    bottom: 52px;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: none;\n    height: 33px;\n    left: 20px;\n    position: absolute;\n    text-decoration: none solid rgb(255, 255, 255);\n    text-transform: uppercase;\n    vertical-align: middle;\n    width: 116px;\n    background: rgb(54, 50, 163) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(255, 255, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 700 normal 11px / normal franklin-normal-700, sans-serif;\n    padding: 2px 5px 3px;\n    transition: all 0.3s ease 0s, all 0.4s ease 0s;\n}/*#buttonBUTTON_48*/\n\n#buttonP_49 {\n    bottom: 23px;\n    color: rgb(255, 255, 255);\n    height: 23px;\n    left: 23.3906px;\n    position: absolute;\n    right: 955.594px;\n    text-decoration: none solid rgb(255, 255, 255);\n    top: 14px;\n    width: 191.016px;\n    border: 0px none rgb(255, 255, 255);\n    font: normal normal 500 normal 14px / 23px franklin-normal-600;\n    margin: 0px;\n}/*#buttonP_49*/\n\n#buttonSPAN_50 {\n    color: rgb(255, 255, 255);\n    text-decoration: none solid rgb(255, 255, 255);\n    border: 0px none rgb(255, 255, 255);\n    font: normal normal 500 normal 14px / 23px franklin-normal-600;\n}/*#buttonSPAN_50*/\n\n#buttonSPAN_51 {\n    color: rgb(255, 255, 255);\n    text-decoration: none solid rgb(255, 255, 255);\n    text-transform: lowercase;\n    border: 0px none rgb(255, 255, 255);\n    font: normal normal 500 normal 14px / 23px franklin-normal-600;\n}/*#buttonSPAN_51*/\n\n#buttonDIV_52 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    float: left;\n    height: 60px;\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonDIV_52*/\n\n#buttonDIV_53 {\n    bottom: -348.5px;\n    color: rgb(51, 51, 51);\n    height: 52.5px;\n    left: 234px;\n    opacity: 0;\n    position: absolute;\n    right: -140.391px;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 300px;\n    transform: matrix(1, 0, 0, 1, -187, -54.5);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    padding: 56px 0px 0px;\n    transition: all 0.25s ease-in-out 0s, all 0.85s ease 0s;\n}/*#buttonDIV_53*/\n\n#buttonIMG_54 {\n    color: rgb(51, 51, 51);\n    height: 107.359px;\n    max-width: 100%;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    width: 260px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / normal cheltenham;\n    margin: 0px 0px 10px;\n}/*#buttonIMG_54*/\n\n#buttonH2_55 {\n    color: rgb(45, 45, 45);\n    height: 30px;\n    text-align: center;\n    text-decoration: none solid rgb(45, 45, 45);\n    border: 0px none rgb(45, 45, 45);\n    font: normal normal 300 normal 20px / 30px franklin-normal-300, sans-serif;\n    margin: 7px 0px 20px;\n}/*#buttonH2_55*/\n\n#buttonA_56 {\n    color: rgb(50, 104, 145);\n    text-align: center;\n    text-decoration: none solid rgb(50, 104, 145);\n    border: 0px none rgb(50, 104, 145);\n    font: normal normal 400 normal 16px / normal cheltenham;\n}/*#buttonA_56*/\n\n#buttonBUTTON_57 {\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    height: 34px;\n    text-decoration: none solid rgb(255, 255, 255);\n    text-transform: uppercase;\n    vertical-align: middle;\n    width: 182px;\n    background: rgb(0, 125, 184) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(255, 255, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 700 normal 12px / normal franklin-normal-700, sans-serif;\n    margin: 5px 0px 18px -4px;\n    padding: 2px 5px 3px;\n    transition: all 0.3s ease 0s, all 0.4s ease 0s;\n}/*#buttonBUTTON_57*/\n\n#buttonP_58 {\n    bottom: 23px;\n    color: rgb(51, 51, 51);\n    height: 25.5px;\n    left: 13px;\n    position: absolute;\n    right: 0px;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 11.5px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 16px / 23px nyt-franklin, \"Helvetica Neue\", Arial, sans-serif, sans-serif;\n    margin: 0px;\n}/*#buttonP_58*/\n\n#buttonA_59 {\n    color: rgb(155, 155, 155);\n    text-align: center;\n    text-decoration: none solid rgb(155, 155, 155);\n    border: 0px none rgb(155, 155, 155);\n    font: normal normal 700 normal 14px / 23px franklin-normal-700, sans-serif;\n    transition: color 0.1s ease-in 0s, all 0s ease 0s;\n}/*#buttonA_59*/\n\n#buttonsvg_60 {\n    bottom: -6.5px;\n    color: rgb(155, 155, 155);\n    cursor: pointer;\n    height: 19.5px;\n    left: -6px;\n    position: relative;\n    right: 6px;\n    text-align: center;\n    text-decoration: none solid rgb(155, 155, 155);\n    top: 6.5px;\n    width: 19.5px;\n    border: 0px none rgb(155, 155, 155);\n    font: normal normal 700 normal 14px / 23px franklin-normal-700, sans-serif;\n    overflow: hidden;\n    transition: left 0.3s ease-in 0s, all 0s ease 0s;\n}/*#buttonsvg_60*/\n\n#buttonpath_61 {\n    color: rgb(155, 155, 155);\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none solid rgb(155, 155, 155);\n    fill: none;\n    stroke: rgb(171, 171, 171);\n    stroke-miterlimit: 10;\n    stroke-width: 2px;\n    d: path('M 8.7 7.1 l 3.4 3.6 M 8.7 12.8 l 3.4 -3.5');\n    border: 0px none rgb(155, 155, 155);\n    font: normal normal 700 normal 14px / 23px franklin-normal-700, sans-serif;\n    transition: stroke 0.3s ease-in 0s, all 0s ease 0s;\n}/*#buttonpath_61*/\n@media only screen and (max-width: 970px)  {\n  .paywall-banner {\n    background: none !important;\n  }\n}\n#progressDIV_1 {\n    color: rgb(33, 37, 41);\n    text-align: left;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}/*#progressDIV_1*/\n\n#progressP_2 {\n    color: rgb(33, 37, 41);\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 300 normal 20px / 30px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px 0px 16px 165px;\n}/*#progressP_2*/\n\n#progressDIV_3 {\n    color: rgb(33, 37, 41);\n    max-width: 960px;\n    text-align: left;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    padding: 0px 15px;\n}/*#progressDIV_3*/\n\n#progressDIV_4 {\n    color: rgb(33, 37, 41);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    border: 0px none rgb(33, 37, 41);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px -35px 16px;\n}/*#progressDIV_4*/\n\n#progressDIV_5, #progressDIV_15 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px 0px;\n    color: rgb(33, 37, 41);\n    display: flex;\n    height: 205px;\n    left: 0px;\n    min-height: auto;\n    min-width: 315px;\n    overflow-wrap: break-word;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    top: 0px;\n    word-wrap: break-word;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 4px 4px 4px 4px;\n    flex: 1 0 0%;\n    flex-flow: column nowrap;\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px 15px 24px;\n}/*#progressDIV_5, #progressDIV_15*/\n\n#progressDIV_6, #progressDIV_16 {\n    color: rgb(33, 37, 41);\n    height: 185px;\n    min-height: auto;\n    min-width: auto;\n    overflow-wrap: break-word;\n    text-align: left;\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    flex: 1 1 auto;\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    padding: 20px;\n}/*#progressDIV_6, #progressDIV_16*/\n\n#progressH5_7, #progressH5_17 {\n    color: rgb(33, 37, 41);\n    height: 24px;\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 20px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px;\n}/*#progressH5_7, #progressH5_17*/\n\n#progressH3_8, #progressH3_18 {\n    color: rgb(33, 37, 41);\n    height: 33px;\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 500 normal 28px / 33.6px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px 0px 12px;\n}/*#progressH3_8, #progressH3_18*/\n\n#progressSPAN_9, #progressSPAN_19 {\n    font-size: 20px !important;\n    font-weight: 600 !important;\n    color: rgb(33, 37, 41);\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 500 normal 18px / 21.6px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px 10px 0px 0px;\n}/*#progressSPAN_9, #progressSPAN_19*/\n\n#progressSMALL_10 {\n    color: rgb(0, 128, 0);\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(0, 128, 0);\n    word-wrap: break-word;\n    border: 0px none rgb(0, 128, 0);\n    font: normal normal 400 normal 11.2px / 13.44px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}/*#progressSMALL_10*/\n\n#progressUL_11 {\n    color: rgb(33, 37, 41);\n    height: 24px;\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    list-style: none outside none;\n    margin: 16px 0px 24px;\n    padding: 0px;\n}/*#progressUL_11*/\n\n#progressI_12, #progressI_21 {\n    color: rgb(0, 128, 0);\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(0, 128, 0);\n    word-wrap: break-word;\n    border: 0px none rgb(0, 128, 0);\n    font: italic normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    list-style: none outside none;\n}/*#progressI_12, #progressI_21*/\n\n#progressLI_13, #progressLI_22, #progressLI_24 {\n    color: rgb(33, 37, 41);\n    overflow-wrap: break-word;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    list-style: none outside none;\n}/*#progressLI_13, #progressLI_22, #progressLI_24*/\n\n#progressDIV_14 {\n    bottom: 0px;\n    color: grey;\n    height: 18px;\n    left: 20px;\n    overflow-wrap: break-word;\n    position: absolute;\n    text-align: left;\n    text-decoration: none solid rgb(211, 211, 211);\n    top: 157px;\n    border: 0px none rgb(211, 211, 211);\n    font: normal normal 400 normal 12px / 18px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 15px 0;\n}/*#progressDIV_14*/\n\n#progressUL_20 {\n    color: rgb(33, 37, 41);\n    height: 48px;\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(33, 37, 41);\n    word-wrap: break-word;\n    border: 0px none rgb(33, 37, 41);\n    font: normal normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    list-style: none outside none;\n    margin: 16px 0px 24px;\n    padding: 0px;\n}/*#progressUL_20*/\n\n#progressI_23 {\n    color: rgb(255, 0, 0);\n    overflow-wrap: break-word;\n    text-align: left;\n    text-decoration: none solid rgb(255, 0, 0);\n    word-wrap: break-word;\n    border: 0px none rgb(255, 0, 0);\n    font: italic normal 400 normal 16px / 24px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    list-style: none outside none;\n}/*#progressI_23*/\n\n#progressDIV_25 {\n    bottom: 0px;\n    color: grey;\n    height: 18px;\n    left: 20px;\n    overflow-wrap: break-word;\n    position: absolute;\n    right: 201.734px;\n    text-align: left;\n    text-decoration: none solid rgb(211, 211, 211);\n    top: 157px;\n    width: 226.266px;\n    border: 0px none rgb(211, 211, 211);\n    font: normal normal 400 normal 12px / 18px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    margin: 0px 0px 10px;\n}/*#progressDIV_25*/\n\n#progressBUTTON_26 {\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    height: 48px;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 232.5px;\n    user-select: none;\n    background: rgb(40, 167, 69) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(40, 167, 69);\n    border-radius: 4.8px 4.8px 4.8px 4.8px;\n    font: normal normal 400 normal 20px / 30px -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    padding: 8px 16px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#progressBUTTON_26*/\n\n#buttonINPUT_1, #buttonINPUT_2, #buttonINPUT_3 {\n    box-shadow: rgb(37, 146, 192) 0px 1px 0px 0px inset;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    height: 45px;\n    text-align: center;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: top;\n    align-items: flex-start;\n    user-select: none;\n    background: rgb(18, 111, 154) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 0px none rgb(255, 255, 255);\n    border-radius: 2px 2px 2px 2px;\n    font: normal normal 600 normal 16px / 25.6px \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    list-style: none outside none;\n    margin: 0px 4px 0px 100px;\n    margin-top: 20px;\n    padding: 10px 15px;\n    transition: color 0.25s ease-in-out 0s, background 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s;\n}\n\n#buttonINPUT_2 {\n    background: grey !important;\n}\n\n.register-choice-preview, .register-choice-free {\n        border-top-color: grey !important;\n}\n\n.register-choice-audit.v1 .wrapper-copy {\n  display: inline !important;\n}\n\n.register-choice-audit.v1 .copy p {\n    margin-bottom: 0 !important;\n}\n\n.register-choice-audit.v1 .list-actions {\n    margin: 0 !important;\n}\n\n.no-fee {\n  margin-top: 20px;\n  cursor: pointer;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "69C7684F-6EA7-426B-A582-0438CBEFBEB0"}]}, {"viewId": "10896190779", "changes": [{"dependencies": [], "type": "custom_code", "id": "8FF981B6-A71D-4337-931B-E31C258D79EA", "value": function($){var utils = window['optimizely'].get('utils');
window.trackPageView("about");
utils.waitForElement('[data-field="price"]').then(function(){
  var courseId = jQuery('main').data('course-id'),
			certPrice = window.verifiedOnly.certPrices[courseId];
  jQuery('[data-field="price"]').after('<li class="newPrice"><span class="block-list__label"><span aria-hidden="true" class="fa fa-tag fa-lg"></span>Price:</span><span class="block-list__desc"><span class="uppercase">FREE</span> 48-hour Trial<br>' + certPrice + '<br>Includes a Verified Certificate</span></li>');
  jQuery('li[data-field="price"]').remove();
  utils.waitForElement('[data-field="price"]').then(function(){
    if (jQuery('.newPrice').length===0) {
		  jQuery('[data-field="price"]').after('<li class="newPrice"><span class="block-list__label"><span aria-hidden="true" class="fa fa-tag fa-lg"></span>Price:</span><span class="block-list__desc"><span class="uppercase">FREE</span> 48-hour Trial<br>' + certPrice + '<br>Includes a Verified Certificate</span></li>');
    }
  });
});
utils.waitForElement('#enroll-type-section .verified-list__desc').then(function(){
	jQuery('#enroll-type-section .verified-list__desc:last').text("EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally");
});
utils.waitForElement('.js-enroll-btn').then(function(){
  window.experimentTrackLink('.js-enroll-btn', 'edx.bi.experiments.verified_only.enroll_click');
});
}}, {"value": "<style>li[data-field=\"price\"] {\n\tdisplay: none;\n}\n\n.js-course-side-area .js-select-run {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "34B3AC90-F7AD-46B7-9262-3EF9CA9349F7"}]}, {"viewId": "10936032353", "changes": [{"dependencies": [], "type": "custom_code", "id": "4404AB00-D664-439B-A3E2-6F942D2C5F20", "value": function($){var utils = window['optimizely'].get('utils');
utils.waitForElement('#financial-assistance-course').then(function(){
  var options = [];
  $.each(window.verifiedOnly.courseNames, function(courseId, courseName) {
    if ($('#financial-assistance-course').html().indexOf(courseId) === -1) {
			options.push('<option value="' + courseId + '">' + courseName + '</option>');
    }
  });
  $.each(options, function(index, value) {
    if ($('#financial-assistance-course').children().length > 0) {
      $('#financial-assistance-course').children().last().after(value);
    } else {
      $('#financial-assistance-course').html(value);
    }
  });
});
}}]}], "name": "Two Day Preview Minimal Change"}, {"id": "11387141596", "actions": [], "name": "Does nothing"}], "audienceIds": ["and", "9874510616", "10799350270"], "changes": null, "id": "10871270578", "integrationSettings": null}], "id": "10857474794", "weightDistributions": null, "name": "Paid Only Program Courses", "groupId": null, "commitId": "11375533319", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "117f978a699840d0848cd34cc31e5dd9", "value": function($){$ = jQuery;
window.setCookie = function(c_name,value,c_domain,exdays) {
  c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
};

// Usage Example
// window.setCookie('OptInCheckboxValues','{dict data}','*.edx.org');

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};
// Usage Example
// var cookieValue = JSON.parse(decodeURIComponent(window.getCookie('OptInCheckboxValues')));

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = $.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return $.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 10871270578;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
        		var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};

//https://courses.edx.org/financial-assistance/apply/
//$('#financial-assistance-course').children().last().after('<option value="course-v1:ASUx+MAT117x+1T2016">Testing</option>')
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"google_universal_analytics": {"universal_analytics_tracker": "", "universal_analytics_slot": "90"}}, "integrationStringVersion": 2, "viewIds": ["11096882266", "11114260510"], "experiments": [{"weightDistributions": [{"entityId": "11390320034", "endOfRange": 10000}], "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating Hashed Username Treatment", "name": "Content Gating V3 Control", "bucketingStrategy": null, "variations": [{"id": "11097615223", "actions": [{"viewId": "11096882266", "changes": [{"dependencies": [], "type": "custom_code", "id": "c5392a6c04df4ca7b5e7899ce84168ce", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {course_id: courseId},
		utils = window['optimizely'].get('utils');

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}]}, {"viewId": "11114260510", "changes": [{"dependencies": [], "type": "custom_code", "id": "243350ca0bd443be8f90eb8553648051", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId};

window.trackPageView('courseware');
}}]}], "name": "Control"}, {"id": "11390320034", "actions": [], "name": "Does nothing"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", ["not", "11103384428"]], "changes": null, "id": "11091716983", "integrationSettings": null}], "id": "11101324847", "weightDistributions": null, "name": "Content Gating V3 Control", "groupId": null, "commitId": "11355531182", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "07614efe5e6c4f8286c8f5d5679d9aef", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11091716983;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {"google_universal_analytics": {"universal_analytics_tracker": "", "universal_analytics_slot": "90"}}, "integrationStringVersion": 2, "viewIds": ["11096882266", "11114260510"], "experiments": [{"weightDistributions": [{"entityId": "11372131400", "endOfRange": 10000}], "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating Hashed Username Treatment", "name": "Content Gating V3 Treatment", "bucketingStrategy": null, "variations": [{"id": "11089042179", "actions": [{"viewId": "11096882266", "changes": [{"dependencies": [], "type": "custom_code", "id": "6822F4ED-5325-4C56-8EE1-CAAA21934554", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li> <li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments, or unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "9B8083F9-A2EC-4BEA-9C6D-1CDFC698A018"}]}, {"viewId": "11114260510", "changes": [{"dependencies": [], "type": "custom_code", "id": "D6C8C48C-0AF7-4B65-A91E-775146412FF4", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
	      $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
	      $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('#certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
      	window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
      gatedContentUpgradeClick('courseware');
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
      gatedContentUpgradeClick('courseware');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
    				ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
          gatedContentUpgradeClick('courseware');
      }
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  if(!upgradeBannerShown) {
    $('.grade-detail-graph').after(contentGateGrades);
  } else {
    if(expired) {
      $('.grade-detail-graph').after(upgradeBannerExpired + contentGateGrades);
    } else {
      $('.grade-detail-graph').after(upgradeBanner + contentGateGrades);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    gatedContentUpgradeClick('progress');
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n\tdisplay: none;\n}\n\n.subsection .subtitle {\n\tdisplay: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6137887D-3E59-448A-8F68-4BC94BDE220E"}]}], "name": "Gated Content"}, {"id": "11372131400", "actions": [], "name": "Does nothing"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11103384428"], "changes": null, "id": "11106584753", "integrationSettings": null}], "id": "11110662379", "weightDistributions": null, "name": "Content Gating V3 Treatment", "groupId": null, "commitId": "11401326725", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3BB60471-63EF-4A21-B2C4-D8C374838A3A"}, {"dependencies": [], "type": "custom_code", "id": "f5c0d1ecfe3e4952bcbe7e12b283ea6f", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11106584753;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 10000, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11193544634", "11206263981", "11365087667", "11370808630"], "experiments": [{"weightDistributions": [{"entityId": "11186072322", "endOfRange": 5000}, {"entityId": "11212804402", "endOfRange": 10000}], "audienceName": "EdX Preferred Language is English", "name": "[REV-378] New User Discount Banner Test", "bucketingStrategy": null, "variations": [{"id": "11186072322", "actions": [{"viewId": "11206263981", "changes": [{"dependencies": [], "type": "custom_code", "id": "D8081E4A-DB03-4EAE-805B-0F3F5A8342A1", "value": function($){var discountBannerCookie=window.getCookie('discountBannerRev378');
if(!discountBannerCookie){
    window.setCookie('discountBannerRev378', 'control', 'edx.org', 30);
}
}}]}], "name": "Original"}, {"id": "11212804402", "actions": [{"viewId": "11206263981", "changes": [{"dependencies": [], "type": "custom_code", "id": "87C33289-92D8-4F73-A710-B9282DF46C3B", "value": function($){$ = jQuery;
var utils = window['optimizely'].get('utils');
utils.waitForElement('.edx-header').then(function(){
  var currentCourseId = $('main').data('course-id');
  var displayBanner = true;
  if(currentCourseId)
  {
    for(var i= 0; i <window.noDiscountOrgs.length; i++){
      if(currentCourseId.includes(window.noDiscountOrgs[i]))
        displayBanner = false;
    }
  }
  if(displayBanner){
    window.addBanner($('.edx-header'));
    utils.waitForElement('.js-enroll-btn').then(function(){
      $('#discountRegisterHref').prop('href', $('.js-enroll-btn:first').prop('href'));
      $('.discountActionWord').text('Enroll');
    });
  }
});
}}, {"value": "<style>@media screen and (max-width: 979px) {\n  .discountBannerRev378 {\n    margin-top: 64px;\n  }\n  .discountBannerClose, .discountBannerButton{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    float:none;\n  }\n  .js-hero.hero-container {\n     margin-top: 0;\n}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "00F8897E-FBDA-41A6-A5B2-A35FA82FA652"}]}, {"viewId": "11193544634", "changes": [{"dependencies": [], "type": "custom_code", "id": "04131464-2260-40A4-B153-A28662F63D49", "value": function($){$ = jQuery;
var utils = window['optimizely'].get('utils');
utils.waitForElement('.nav-skip.sr-only').then(function(){
  var metadata = JSON.parse($('#user-metadata').text());
  if (typeof metadata === 'undefined' ||
      typeof metadata.course_key_fields === 'undefined' ||
     ( metadata.course_key_fields && 
       !window.noDiscountOrgs.includes(metadata.course_key_fields.org))) {
      window.trackPageView('courseware');
      window.addBanner($('.nav-skip.sr-only'));
    }
});
}}]}, {"viewId": "11370808630", "changes": [{"dependencies": [], "type": "custom_code", "id": "DD651A8A-00A5-4714-9DDF-5773AC2B5D98", "value": function($){$ = jQuery;
var utils = window['optimizely'].get('utils');
utils.waitForElement('#skip-link').then(function(){
    var discountBannerCookie=window.getCookie('discountBannerRev378');
    if(!window.noDiscountSkus.includes($('[data-sku]').data('sku')) && discountBannerCookie !== 'utilized'){
        window.addBanner($('#skip-link'));
        if(!$('#voucher_information').length && 
        typeof window.appliedDiscount === 'undefined'  && 
        !$('.alert-error').length){

            $('#id_code').val('EDXWELCOME');
            $('#apply-voucher-button').click();
            window.appliedDiscount = true;
        }
    }
    $('.remove-voucher').click(function(){
        window.setCookie('discountBannerRev378', 'utilized', 'edx.org', 30);
    });
});
}}]}, {"viewId": "11365087667", "changes": [{"dependencies": [], "type": "custom_code", "id": "68FF3889-042F-4BDE-847E-B700A92D7818", "value": function($){window.setCookie('discountBannerRev378', 'utilized', 'edx.org', 30);
}}]}], "name": "New User Discount Banner"}], "audienceIds": ["and", "8430051876"], "changes": null, "id": "11200714237", "integrationSettings": null}], "id": "11182122548", "weightDistributions": null, "name": "[REV-378] New User Discount Banner Test", "groupId": null, "commitId": "11579070298", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.discountBannerRev378{\n    width: 100%;\n    background-color: #0075b4;\n    padding: 10px;\n    color: white;\n    font-size: 16px;\n    font-weight: 600;\n    text-align: center;\n  }\n\n  .discountBannerText{\n    display: inline-block;\n  }\n\n  .discountBannerText p{\n    margin-bottom: 0;\n    margin-top:0;\n    color: white;\n  }\n\n  .discountBannerSmallText{\n    font-size:10px;\n  }\n  \n  .bolded-coupon-text{\n        font-weight: 700;\n  }\n\n  .discountBannerButton{\n    width:130px;\n  }\n\n  .discountBannerButtonVisible{\n    float: right;\n    margin-top:12px;\n\t\tmargin-right:10px;\n  }\n\n  .discountBannerButton a{\n    padding: 5px 10px;\n    border-radius: 4px;\n    color: white;\n    border-width: thin;\n    border-style: solid;\n    margin-right:10px;\n  }\n\n  .discountBannerButton a:hover{\n    border-bottom: thin solid white;\n    background-color: #065683;\n  }\n\n  .discountBannerClose{\n    float: right;\n    margin-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    background: none !important;\n    border: none;\n    color: white;\n    font-size: 14px;\n    text-shadow: none;\n    box-shadow: none;\n    vertical-align: top;\n    line-height: 1rem;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "07A8C94A-366C-48FC-BB93-1B54925308D2"}, {"dependencies": [], "type": "custom_code", "id": "1B931D49-A209-4C21-B39B-40F58B67B18D", "value": function($){// --------- General ---------
window.$ = jQuery;
window.setCookie = function(c_name,value,c_domain,exdays) {
  c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
};
// Usage Example
// window.setCookie('OptInCheckboxValues','{dict data}','*.edx.org');
window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};
// Usage Example
// var cookieValue = JSON.parse(decodeURIComponent(window.getCookie('OptInCheckboxValues')));
window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = $.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};
window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return $.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};
window.injectExperimentProperties = function(oldProperties) {
    var properties = {};
    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11200714237;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};
window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};
window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
        		var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};
window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};

// ---------- Test Specific ---------

window.noDiscountSkus = ['055B32F','9FA631F','D1F4643','0FF2319','7F1B1D5','62A8CD6','38FFD57','B280F90','8EB36FA','CDF3B76','CBAED67','27968FF','CB134FD','97931D1','724F35B','D639BC4','B391A18','BD97043','17C5C68','C3C01E0','C9E858D','BAA2AE7','1076B08','43E93A3','A9E8973','5B6828A','4A1BE12','41B6035','5FF0551','DAC018F','21C142E','2609A73','EBBB4B2','F6298A8','9E8F1E1','EA52BF6','BCC631B','9E95E75','35A3013','6020D07','29D313F','B668B4C','BE0E94C','2F28F08','11B9046','619BA0E','AD2934E','C1FBAB8','00A04F0','BB7153D','BE15F74','D81B26F','89AD4CF','8AAC1FD','DB23E50','6C4C20A','07F79C1','0350D79','28C7551','0CE5BB9','BA1C7C9','569460E','B371A28','B06C4BE','36CB5DA','ABFA08E','E690C2E','F58FFAF','3F9E92B','96D6CAD','5654CF8','6A73E46','72701E9','61ECDEB','F8FE174','05FDEDE','B4D91A1','F06B35F','5573FC1','0184FB6','3570DA9','99D83D0','911797E','B5F945F','A456B73','8857D4B','AFEA1C5','31E7AD6','AA0B9B1','D4F37A7','5C36FA4','8549492','5960AC2','4D9F54B','C6663FB','68CA5D2','0D1AB86','B29C2C7','2B346B0','D92ACCE','56655AB','E88CC21','BD97657','5C7E943','C87700E','F76CCD1','D43EC47','67BD170','8F6862F','DDDA471','E3AD5CD','2B754FB','15DC47C','ABF1B02','F201CAD','9A78DBB','408D553','D45D0B7','0C1BF31','7559D1A','412FE2B','94CB8ED','5782FC9','FC82CC7','AAEAA7E','F838A79','96D3B6A','AD6BFFF','9EF3057','20D420D','A552828','143D458','4951618','AC50603','A53C787','D658064','F017B37','7A53814','937C644','C7A665E','0B1ACE1','F001C38','2BDA43B','254A841','157ABD9','C5DE867','2C98768','510A98A','4A2D12A','91723B8','FA18201','5F749B9','21B09B8','4F80AAC','3103AC2','1D6A6A6','ABF9096','766C626','C983CB2','348E7A6','21B86F5','AC71212','DF0943B','8DD81E9','1B08955','B1BC38E','35075F8','DA68AAC','B389DE0','B532113','0FADAA6','AD67A35','6FE1640','9F984C1','AAC8A55','DD94E45','8426FA4','A98107A','F2D699D','04B0A5F','4F151F5','9C9DE8C','9C1AEC3','A48DF0D','C0C3349','5854363','4D3DDED','7F0AB8E','AE82E35','97E94DF','76F4ACB','4E82CF2','CD901C6','1C21FE1','2B18A5E','A7748C9','4D0DEC4','8F723B5','13AAD8E','929CB56','FAAB86E','F7A8839','D823C7F','51B82F9','4AB62CA','F71159F','837CBD5','64FF3F2','00B4987','9A804A8','629F477','063146F','3A038F2','85C8A72','ABF6C62','9A71214','E74AF33'];
window.noDiscountOrgs = ["GTx", "NYIF", "Wharton"];

window.addBanner = function(targetBeforeElement)
{
    var discountBannerCookie=window.getCookie('discountBannerRev378');
    if(!discountBannerCookie){
        window.setCookie('discountBannerRev378', 'display', 'edx.org', 30);
    }

    if(!discountBannerCookie || discountBannerCookie === 'display'){
        var banner;
        if(!getCookie('edxloggedin')){
            var registerHref = 'https://courses.edx.org/register';
            banner = "<div class='discountBannerRev378'> \
                        <div class='discountBannerButton'></div>\
                        <div class='discountBannerText'> \
                            <p><span class='discountActionWord'>Register</span> today to get <span class='bolded-coupon-text'>15%</span> off your first certificate! * </p> \
                            <p class='discountBannerSmallText'>*Offer valid for individual course purchases (not programs). Offer not valid for Wharton, GTx, and NYIF courses.</p> \
                        </div> \
                        <div class='discountBannerButton discountBannerButtonVisible'> \
                            <a id='discountRegisterHref' href='" + registerHref + "'>\
                                <span class='discountActionWord'>Register</span> Now \
                            </a> \
                        </div> \
                      </div>";           
        }
        else{
            window.removeBanner = function(banner){
                banner.remove();
                window.setCookie('discountBannerRev378', 'hidden', 'edx.org', 30);
            };
    
            banner = '<div class="discountBannerRev378">\
                        <div class="discountBannerText"> \
                            <p>We\'ve automatically applied a  <span class="bolded-coupon-text">15%</span> discount to your first certificate! * </p> \
                            <p class="discountBannerSmallText">*Offer valid for individual course purchases (not programs). Offer not valid for Wharton, GTx, and NYIF courses.</p> \
                        </div><button onclick="removeBanner($(\'.discountBannerRev378\'))" class="discountBannerClose">X</button></div>';
        
        }
        targetBeforeElement.after(banner);
    }
   
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11346070292", "11357290499"], "experiments": [{"weightDistributions": [{"entityId": "11500430402", "endOfRange": 10000}], "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VMobile Treatment With Mobile", "name": "Content Gating VMobile Treatment with Mobile", "bucketingStrategy": null, "variations": [{"id": "11362290421", "actions": [{"viewId": "11357290499", "changes": [{"dependencies": [], "type": "custom_code", "id": "834089C6-4C8C-405B-AC4C-E828FC03620A", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li> <li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li><li><b>Mobile App Access: </b>Learn on-the-go with the edX mobile app.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments, or unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "1D6D4B52-1B4F-487E-9727-BE2C43315415"}]}, {"viewId": "11346070292", "changes": [{"dependencies": [], "type": "custom_code", "id": "DFB00674-0526-41D0-9EC8-C2285D8DC336", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited course and mobile app access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited course and mobile app access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
	      $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
	      $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('#certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
      	window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
      gatedContentUpgradeClick('courseware');
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
      gatedContentUpgradeClick('courseware');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
    				ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
          gatedContentUpgradeClick('courseware');
      }
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  if(!upgradeBannerShown) {
    $('.grade-detail-graph').after(contentGateGrades);
  } else {
    if(expired) {
      $('.grade-detail-graph').after(upgradeBannerExpired + contentGateGrades);
    } else {
      $('.grade-detail-graph').after(upgradeBanner + contentGateGrades);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    gatedContentUpgradeClick('progress');
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n\tdisplay: none;\n}\n\n.subsection .subtitle {\n\tdisplay: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "920183D9-1B5E-4C91-9599-5A15F1A0766C"}]}], "name": "Gated Content"}, {"id": "11500430402", "actions": [], "name": "Does nothing"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11341990650"], "changes": null, "id": "11374290315", "integrationSettings": null}], "id": "11347850435", "weightDistributions": null, "name": "Content Gating VMobile Treatment with Mobile", "groupId": null, "commitId": "11481090351", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6ed168a0ed5c4fd8bc0db84bb941bfaa"}, {"dependencies": [], "type": "custom_code", "id": "05c8711a109e4fc0a92f7d4d71881b13", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11374290315;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11346070292", "11357290499"], "experiments": [{"weightDistributions": [{"entityId": "11477450330", "endOfRange": 10000}], "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VMobile Treatment", "name": "Content Gating VMobile Treatment", "bucketingStrategy": null, "variations": [{"id": "11353760228", "actions": [{"viewId": "11357290499", "changes": [{"dependencies": [], "type": "custom_code", "id": "BE4B64EB-53F1-4291-B16C-75F8F1C7477A", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li> <li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments, or unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "BDEFCB34-00DA-4F0D-9013-8BFB26D90946"}]}, {"viewId": "11346070292", "changes": [{"dependencies": [], "type": "custom_code", "id": "EF8CDE48-8D77-48AA-99FD-A980C53FD0D1", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
  	deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
	      $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
	      $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('#certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
      	window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
      gatedContentUpgradeClick('courseware');
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
      gatedContentUpgradeClick('courseware');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
    				ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
          gatedContentUpgradeClick('courseware');
      }
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  if(!upgradeBannerShown) {
    $('.grade-detail-graph').after(contentGateGrades);
  } else {
    if(expired) {
      $('.grade-detail-graph').after(upgradeBannerExpired + contentGateGrades);
    } else {
      $('.grade-detail-graph').after(upgradeBanner + contentGateGrades);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    gatedContentUpgradeClick('progress');
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n\tdisplay: none;\n}\n\n.subsection .subtitle {\n\tdisplay: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "B9ED75B9-32FE-4027-B65D-F9F11C03ABB1"}]}], "name": "Gated Content"}, {"id": "11477450330", "actions": [], "name": "Does Nothing"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11331990466"], "changes": null, "id": "11351710380", "integrationSettings": null}], "id": "11357330196", "weightDistributions": null, "name": "Content Gating VMobile Treatment", "groupId": null, "commitId": "11508140550", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3f6cc70c533e4e66a18c89f255a883bd"}, {"dependencies": [], "type": "custom_code", "id": "d5ba0d2129c64b6390f80eef86033d5a", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11351710380;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11346070292", "11357290499"], "experiments": [{"weightDistributions": [{"entityId": "11490420229", "endOfRange": 10000}], "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VMobile Control", "name": "Content Gating VMobile Control ", "bucketingStrategy": null, "variations": [{"id": "11362470432", "actions": [{"viewId": "11357290499", "changes": [{"dependencies": [], "type": "custom_code", "id": "1C4FB756-BDF7-4615-A1D9-D050A6FA7EE5", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {course_id: courseId},
		utils = window['optimizely'].get('utils');

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}]}, {"viewId": "11346070292", "changes": [{"dependencies": [], "type": "custom_code", "id": "143782B0-8D39-4E34-AF2C-68DC835A68F6", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId};

window.trackPageView('courseware');
}}]}], "name": "Control"}, {"id": "11490420229", "actions": [], "name": "Does Nothing"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11370330714"], "changes": null, "id": "11362330447", "integrationSettings": null}], "id": "11362350099", "weightDistributions": null, "name": "Content Gating VMobile Control ", "groupId": null, "commitId": "11486690251", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "b15f47dd523b435e9c9d5e4929ac067f", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11362330447;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11414790021", "11420770034"], "experiments": [{"weightDistributions": null, "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VExpiration Expiration Only,Device has not seen new user discount test", "name": "Content Gating VExpiration Expiration Only", "bucketingStrategy": null, "variations": [{"id": "11397930035", "actions": [{"viewId": "11414790021", "changes": [{"dependencies": [], "type": "custom_code", "id": "a43809aa9204434195ddc9ffd0363f52", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li><li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "299a7b31167c42548deaa5161a3c983a"}]}, {"viewId": "11420770034", "changes": [{"dependencies": [], "type": "custom_code", "id": "96202625d4824fddbab0e242c16c49bb", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date();

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
        $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
        $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
});

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
        window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
 
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').html('<br>');
  if(upgradeBannerShown){
    if(expired) {
      $('.grade-detail-graph').before(upgradeBannerExpired);
    } else {
      $('.grade-detail-graph').before(upgradeBanner);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n    display: none;\n}\n\n.subsection .subtitle {\n    display: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "f56bf8148f5c4d098250b8c7ad04dae7"}]}], "name": "Gated Content"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11410880020", "11413366106"], "changes": null, "id": "11420630050", "integrationSettings": null}], "id": "11397750134", "weightDistributions": null, "name": "Content Gating VExpiration Expiration Only", "groupId": null, "commitId": "11494400452", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "58151387d5c7433896ee8447cd341d3d"}, {"dependencies": [], "type": "custom_code", "id": "f97b2fd0604e43cbaa1a09aa7cdb1fdd", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11420630050;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11414790021", "11420770034"], "experiments": [{"weightDistributions": null, "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VExpiration Eight Weeks,Device has not seen new user discount test", "name": "Content Gating VExpiration Eight Weeks", "bucketingStrategy": null, "variations": [{"id": "11422490103", "actions": [{"viewId": "11414790021", "changes": [{"dependencies": [], "type": "custom_code", "id": "457cc101c7ee481da644e33412c08819", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 56),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li> <li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (8 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments, or unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "f564c4eae5264ad8b216670208975879"}]}, {"viewId": "11420770034", "changes": [{"dependencies": [], "type": "custom_code", "id": "f1c0628c88494c00b380ed9cef2fd13a", "value": function($){window['optimizely'] = window['optimizely'] || [];
var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 56),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
        $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
        $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" class="certA_2" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('.certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
        window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .problem').then(function(){
      $('[data-graded="True"][data-has-score="True"] .problem').html(contentGate);
  });

  utils.waitForElement('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').then(function(){
      $('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .lti_consumer').then(function(){
      $('[data-graded="True"][data-has-score="True"] .lti_consumer').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .poll-block').then(function(){
      $('[data-graded="True"][data-has-score="True"] .poll-block').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .word_cloud').then(function(){
      $('[data-graded="True"][data-has-score="True"] .word_cloud').html(contentGate);
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
            ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
      }
  });
  
  utils.waitForElement('.certA_2').then(function(){
      gatedContentUpgradeClick('courseware');
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  if(!upgradeBannerShown) {
    $('.grade-detail-graph').after(contentGateGrades);
  } else {
    if(expired) {
      $('.grade-detail-graph').after(upgradeBannerExpired + contentGateGrades);
    } else {
      $('.grade-detail-graph').after(upgradeBanner + contentGateGrades);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    gatedContentUpgradeClick('progress');
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n    display: none;\n}\n\n.subsection .subtitle {\n    display: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "a3c82fce814942818d7f5467b255e156"}]}], "name": "Gated Content"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11396000075", "11413366106"], "changes": null, "id": "11418580063", "integrationSettings": null}], "id": "11402850296", "weightDistributions": null, "name": "Content Gating VExpiration Eight Weeks", "groupId": null, "commitId": "11488560386", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "672997676320403aafd90c1d10cc8bab"}, {"dependencies": [], "type": "custom_code", "id": "0a07dd1e27dd43d9b2a33ec53370f6ba", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11418580063;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11414790021", "11420770034"], "experiments": [{"weightDistributions": null, "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VExpiration Treatment,Device has not seen new user discount test", "name": "Content Gating VExpiration Treatment", "bucketingStrategy": null, "variations": [{"id": "11416590047", "actions": [{"viewId": "11414790021", "changes": [{"dependencies": [], "type": "custom_code", "id": "5772B87B-A8C8-4FCD-9928-16369D8EEC8A", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Unlimited Course Access: </b>Learn at your own pace, and access materials anytime to brush up on what you’ve learned.</li> <li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments, or unlimited course access.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "87F14571-9D3B-4397-A06B-F2AD2B63E2F8"}]}, {"viewId": "11420770034", "changes": [{"dependencies": [], "type": "custom_code", "id": "B40B118C-FE05-413B-B535-957376DE053E", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options),
    expired = now > deadline,
    upgradeBanner = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expires on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerExpired = '<div class="gating-upgrade-banner" style="margin-right: 20px !important; display: flex; margin: 15px 0; padding: 10px; background: #D8EDF8; border: solid #BBDFF2 1px;"><div><span style="font-size: 16px;font-family: &quot;Open Sans&quot;;color: #636C72;">Your access to this course expired on ' + deadlineDate + '.</span>&nbsp;&nbsp;<a style="text-decoration: underline;font-size: 16px;font-family: &quot;Open Sans&quot;;" href="' + upgradeLink + '" id="previewA_1">Upgrade now</a> for unlimited access.</div></div>',
    upgradeBannerDiscussion = upgradeBanner.replace('margin: 15px 0;','margin: 15px 0 15px 40px;'),
    upgradeBannerShown = date && date > new Date(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
      if (expired) {
        $('.page-content-main').prepend(upgradeBannerExpired);
      } else {
        $('.page-content-main').prepend(upgradeBanner);
      }
      window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" class="certA_2" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('#certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
        window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .problem').then(function(){
      $('[data-graded="True"][data-has-score="True"] .problem').html(contentGate);
  });

  utils.waitForElement('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').then(function(){
      $('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .lti_consumer').then(function(){
      $('[data-graded="True"][data-has-score="True"] .lti_consumer').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .poll-block').then(function(){
      $('[data-graded="True"][data-has-score="True"] .poll-block').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .word_cloud').then(function(){
      $('[data-graded="True"][data-has-score="True"] .word_cloud').html(contentGate);
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
            ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
      }
  });
  
  utils.waitForElement('.certA_2').then(function(){
      gatedContentUpgradeClick('courseware');
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  if(!upgradeBannerShown) {
    $('.grade-detail-graph').after(contentGateGrades);
  } else {
    if(expired) {
      $('.grade-detail-graph').after(upgradeBannerExpired + contentGateGrades);
    } else {
      $('.grade-detail-graph').after(upgradeBanner + contentGateGrades);
    }
    window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    gatedContentUpgradeClick('progress');
    $('#previewA_1').click(function(){
      event.preventDefault();
      var eventName = 'edx.bi.experiment.cgv3.banner_upgrade_click';
      window['optimizely'].push({
        type: "event",
        eventName: eventName
      });
      window.experimentEmitEvent(eventName);
      window.location.href=upgradeLink;
    });
  }
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  if (expired) {
    window.location.href='https://courses.edx.org/course_modes/choose/' + courseId + '?paywall';
  }
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n    display: none;\n}\n\n.subsection .subtitle {\n    display: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2F44AD79-57E7-4964-84D2-7BA303904763"}]}], "name": "Gated Content"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11408740108", "11413366106"], "changes": null, "id": "11426460003", "integrationSettings": null}], "id": "11403050016", "weightDistributions": null, "name": "Content Gating VExpiration Treatment", "groupId": null, "commitId": "11469960529", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0dd3a6e97a6b4db48a496374a8cf0b36"}, {"dependencies": [], "type": "custom_code", "id": "665ac6888a174c29868de5f1963e65f8", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11426460003;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11414790021", "11420770034"], "experiments": [{"weightDistributions": null, "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VExpiration Control,Device has not seen new user discount test", "name": "Content Gating VExpiration Control ", "bucketingStrategy": null, "variations": [{"id": "11399360100", "actions": [{"viewId": "11414790021", "changes": [{"dependencies": [], "type": "custom_code", "id": "467307A8-F2FB-4586-950A-FB30313D6A07", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {course_id: courseId},
        utils = window['optimizely'].get('utils');

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}]}, {"viewId": "11420770034", "changes": [{"dependencies": [], "type": "custom_code", "id": "F25FD4D5-4D06-4E67-B63A-ADB25406BA70", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId};

window.trackPageView('courseware');
}}]}], "name": "Control"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11428220027", "11413366106"], "changes": null, "id": "11426460060", "integrationSettings": null}], "id": "11418800014", "weightDistributions": null, "name": "Content Gating VExpiration Control ", "groupId": null, "commitId": "11500280386", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "8aac9468469a4391bdf175394fe3c2e5", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11426460060;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11414790021", "11420770034"], "experiments": [{"weightDistributions": null, "audienceName": "Not Staff,Not Enterprise,Not On Campus,Content Gating VExpiration Graded Content Only,Device has not seen new user discount test", "name": "Content Gating VExpiration Graded Content Only", "bucketingStrategy": null, "variations": [{"id": "11406950106", "actions": [{"viewId": "11414790021", "changes": [{"dependencies": [], "type": "custom_code", "id": "3568756d6a6648d9af4ed66f9f0015fc", "value": function($){var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    upgradePrice = metadata.upgrade_price,
    upgradeLink = metadata.upgrade_link,
    courseHomeLink = 'https://courses.edx.org/courses/' + courseId + '/course',
    utils = window['optimizely'].get('utils'),
    eventProps = {course_id: courseId},
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    deadline = new Date(enrollmentTime + 60 * 60 * 24 * 1000 * 28),
    options = { month: 'long', day: 'numeric' },
    deadlineDate = deadline.toLocaleString('en-us', options);

window['optimizely'] = window['optimizely'] || [];

utils.waitForElement('#enrollment_mode_form').then(function(){
  window.experimentEmitEvent('edx.bi.experiment.track_selection.viewed', eventProps);
  window.trackPageView('track_selection');
  $('.register-choice-certificate.v1 .title').html('Pursue the Verified Track');
  //$('.register-choice-certificate.v1 .copy p:first').html('<span class="new-feature">NEW</span> <b>Premium Access: </b>Gain access to graded content and the full course for an unlimited time.<div style="margin-top: 5px;"><b>Verified Certificate: </b>Highlight your new knowledge and skills with a verified certificate.</div>');
  $('.register-choice-certificate.v1 .copy-inline:first ul').html('<li><b>Graded Assignments: </b>Build your skills through graded assignments and projects.</li> <li><b>Easily shareable: </b>Add the certificate to your CV or resume, or post it directly on LinkedIn.</li> <li><b>Support our Mission: </b> EdX, a non-profit, relies on verified certificates to help fund affordable education for everyone globally.</li>');
  $('.copy-inline h4').text('Benefits of the Verified Track');
   if (window.location.search.indexOf('paywall') === -1) {window.experimentEmitEvent('edx.bi.experiments.cgv3.regular_track_selection', eventProps);
      //$('.register-choice-audit.v1 .title').text('Audit (4 weeks only)');
      $('.register-choice-audit.v1 .copy').html('<p>Audit this course for free and have access to course materials and discussion forums.  <b>This track does not include graded assignments.</b></p>');
      //$('.register-choice-audit.v1 input[name="audit_mode"]').attr('value','Start Trial');
    } else {
      window.experimentEmitEvent('edx.bi.experiments.cgv3.end_of_trial_track_selection', eventProps);
      var courseTitle = $('.title.v1').text().trim().replace('Congratulations!  You are now enrolled in ', ''),
      previewAlert = '<div id="certDIV_1" style="height: auto; width: auto; display: flex; bottom: 0px; color: rgb(133, 100, 4); max-width: 1000px; background: rgb(255, 243, 205) none repeat scroll 0% 0% / auto padding-box border-box; border: 1px solid rgb(255, 238, 186); border-radius: 4px 4px 4px 4px; font: normal normal 400 normal 16px / 24px &quot;Open Sans&quot;; margin: 16px 0px; padding: 12px 20px; "><i class="fa fa-exclamation-triangle" style=" margin-top: 4px; margin-right: 15px; font-size: 20px; color: #292B2C; "></i><div>Your access to ' + courseTitle + ' expired on ' + deadlineDate + '. Upgrade for unlimited access.</div> </div>';
      $('.register-choice-audit.v1').hide();
      $('.deco-divider.v1').hide();
      $('.page-header').hide();
      $('.register-choice-certificate.v1').before(previewAlert);
      $('.container').css('padding-top', 0);
    }
  
  window.experimentTrackLink(".v1 input[name='verified_mode']", 'edx.bi.experiments.cgv3.track_selection_upgrade_click', eventProps);
  window.experimentTrackLink(".v1 input[name='audit_mode']", 'edx.bi.experiments.cgv3.audit_click', eventProps);
});
}}, {"value": "<style>.fa-check {\n    color: green;\n    margin-right: 10px;\n}\n\n.fa-times {\n    color: red;\n    margin-right: 10px;\n}\n\n#certSECTION_1 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montse\trrat, sans-serif;\n}/*#certSECTION_1*/\n\n#certDIV_2 {\n    color: rgb(51, 51, 51);\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 62.5px;\n    padding: 0px 15px;\n}/*#certDIV_2*/\n\n#certDIV_3 {\n    color: rgb(51, 51, 51);\n    display: flex;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    justify-content: center;\n    border: 0px none rgb(51, 51, 51);\n    flex-flow: row wrap;\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px -15px;\n}/*#certDIV_3*/\n\n#certDIV_4, #certDIV_23 {\n    bottom: 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    min-height: 1px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 15px;\n    min-width: 300px;\n}/*#certDIV_4, #certDIV_23*/\n\n#certDIV_5 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 0px 0px 30px;\n    overflow: hidden;\n    padding: 30px;\n}/*#certDIV_5*/\n\n#certDIV_7, #certDIV_25 {\n    color: rgb(51, 51, 51);\n    height: 52px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border-top: 0px none rgb(51, 51, 51);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    padding: 0px 0px 10px;\n}/*#certDIV_7, #certDIV_25*/\n\n#certH3_8, #certH3_26 {\n    color: rgb(51, 51, 51);\n    height: 33px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 28px / 33.6px Montserrat, sans-serif;\n    margin: 0px 0px 8px;\n}/*#certH3_8, #certH3_26*/\n\n#certP_9, #certP_27 {\n    color: rgb(51, 51, 51);\n    height: 44px;\n    opacity: 0.7;\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    margin: 20px 0px 16px;\n}/*#certP_9, #certP_27*/\n\n#certDIV_10, #certDIV_28 {\n    margin-top: 10px;\n    color: rgb(51, 51, 51);\n    height: 109px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_10, #certDIV_28*/\n\n#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35 {\n    color: rgb(51, 51, 51);\n    height: auto;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n    margin: 0px 0px 2px;\n    padding: 5px;\n}/*#certH4_11, #certH4_14, #certH4_17, #certH4_29, #certH4_32, #certH4_35*/\n\n#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 600 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_12, #certSPAN_15, #certSPAN_18, #certSPAN_30, #certSPAN_33, #certSPAN_36*/\n\n#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_13, #certSPAN_16, #certSPAN_31, #certSPAN_37*/\n\n#certSPAN_19, #certSPAN_34 {\n    color: rgb(51, 51, 51);\n    text-align: center;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 500 normal 18px / 21.6px Montserrat, sans-serif;\n}/*#certSPAN_19, #certSPAN_34*/\n\n#certDIV_20, #certDIV_38 {\n    color: rgb(51, 51, 51);\n    height: 54px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    border: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n}/*#certDIV_20, #certDIV_38*/\n\n#certH4_21, #certH4_39 {\n    color: rgb(34, 136, 249);\n    height: 54px;\n    text-align: center;\n    text-decoration: none solid rgb(34, 136, 249);\n    border: 0px none rgb(34, 136, 249);\n    font: normal normal 500 normal 45px / 54px Montserrat, sans-serif;\n    margin: 15px 0px;\n}/*#certH4_21, #certH4_39*/\n\n#certBUTTON_22 {\n    width: 100%;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: block;\n    word-wrap: break-word;\n    text-decoration: none solid rgb(255, 255, 255);\n    vertical-align: middle;\n    user-select: none;\n    background: #008100 none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid #008100;\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    margin-top: 5px;\n}/*#certBUTTON_22*/\n\n#certDIV_24 {\n    bottom: 0px;\n    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 10px 0px;\n    color: rgb(51, 51, 51);\n    left: 0px;\n    position: relative;\n    right: 0px;\n    text-align: left;\n    text-decoration: none solid rgb(51, 51, 51);\n    top: 0px;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;\n    border-top: 2px solid rgb(94, 164, 243);\n    border-right: 0px none rgb(51, 51, 51);\n    border-bottom: 0px none rgb(51, 51, 51);\n    border-left: 0px none rgb(51, 51, 51);\n    font: normal normal 400 normal 18px / normal Montserrat, sans-serif;\n    overflow: hidden;\n    padding: 30px;\n    margin-top: 5px;\n}/*#certDIV_24*/\n\n#certBUTTON_40 {\n    width: 100%;\n    box-shadow: none !important;\n    color: rgb(0, 123, 255);\n    cursor: pointer;\n    display: block;\n    height: 38px;\n    vertical-align: middle;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;\n    border: 1px solid rgb(0, 123, 255);\n    border-radius: 4px 4px 4px 4px;\n    font: normal normal 600 normal 16px / 24px Montserrat, sans-serif;\n    padding: 6px 12px;\n    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n}/*#certBUTTON_40*/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "7481b8711dee4b199d2167f5fd22a9ee"}]}, {"viewId": "11420770034", "changes": [{"dependencies": [], "type": "custom_code", "id": "0a235cc68ea0461db3a0aed6fdb6b7da", "value": function($){window['optimizely'] = window['optimizely'] || [];

var metadata = JSON.parse($('#user-metadata').text()),
    courseId = metadata.course_id,
    eventProps = {courseId: courseId},
    upgradePrice = metadata.upgrade_price,
    options = { year: 'numeric', month: 'long', day: 'numeric' },
    date = metadata.upgrade_deadline ? new Date(metadata.upgrade_deadline) : null,
    upgradeDate = date ? date.toLocaleDateString('en-US', options) : '',
    upgradeMessage = upgradeDate ? 'Upgrade by ' + upgradeDate : '',
    certSku = window.contentGatingConfigV3.certSkus[courseId],
    upgradeLink = certSku ? "https://ecommerce.edx.org/basket/add/?sku=" + certSku : "#",
    utils = window['optimizely'].get('utils'),
    now = new Date(),
    enrollmentTime = new Date(metadata.enrollment_time).getTime(),
    certSvgBig = '<svg width="21px" height="18px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>',
    certSvgOutline = certSvgBig.replace('margin-left: 20px', 'float: right; margin-right: 8px'),
    certSvgSmall = '<svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: 4px;margin-left: 20px;"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,12 C16,13.1045695 15.1045695,14 14,14 L2,14 C0.8954305,14 1.3527075e-16,13.1045695 0,12 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M2,5 L2,6 L8,6 L8,5 L2,5 Z M2,2 L2,3 L8,3 L8,2 L2,2 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M2,11 L2,12 L14,12 L14,11 L2,11 Z" id="Rectangle" fill="#292B2C" style="fill: black;"></path></g></svg>';

window.trackPageView('courseware');
utils.waitForElement('.page-content-main .section-title').then(function(){
    $('.subtitle span.sr').before('<div style="font-size:16px;display: inline;margin-left: 10px;">(Includes Verified Track Content)</div>' + certSvgOutline).closest('.subsection-text');
});

var contentGate = '<div class=".content-paywall" style="margin-top: 10px; border-radius: 5px 5px 5px 5px; display: flex; justify-content: space-between; border: lightgrey 1px solid; padding: 15px 20px; "><div><h3 style="font-weight: 600; margin-bottom: 10px;"><span class="fa fa-lock" aria-hidden="true" style="color: black;margin-right: 10px;font-size: 24px;margin-left: 5px;"></span>Verified Track Access</h3> <span style=" padding: 10px 0;">Graded assessments are available to Verified Track learners. </span> <span id="certDIV_1" style=" color: rgb(25, 125, 29); height: 20px; width: 300px; font: normal normal 600 normal 14px / 20px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><a href="' + upgradeLink + '" class="certA_2" id="certA_2" style="text-decoration: underline !important; color: rgb(0, 117, 180); font: normal normal 400 normal 16px / 25.6px &quot;Open Sans&quot;;">Upgrade to unlock  (' + upgradePrice + ')</a></div><img style="height: 60px" src="https://courses.edx.org/static/images/edx-verified-mini-cert.png"></img></span></div>',
    contentGateGrades = contentGate.replace('Graded assessments', 'Grades').replace('style="', 'style="max-width:1000px;margin-left:0;');

    function gatedContentUpgradeClick(gateLocation) {
  window.experimentEmitEvent('edx.bi.experiment.content_gating.saw_content_gate', {location: gateLocation});
  $('#certA_2').click(function(){
    var eventName = 'edx.bi.experiment.cgv3.gated_content_upgrade_click';
    event.preventDefault();
    window['optimizely'].push({
      type: "event",
      eventName: eventName
    });
    window.experimentEmitEvent(eventName);
    window.location.href=upgradeLink;
  });
}

function gateContent(){
  utils.waitForElement('.unit-title').then(function(){
    if ($('.gating-upgrade-banner').length === 0 && upgradeBannerShown) {
        $('.unit-title').before(upgradeBanner);
        window.experimentTrackLink('#previewA_1', 'edx.bi.experiments.cgv3.banner_upgrade_click', eventProps);
    }
  });
  utils.waitForElement('[data-graded="True"].problems-wrapper .problem').then(function(){
      $('[data-graded="True"].problems-wrapper .problem').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .problem').then(function(){
      $('[data-graded="True"][data-has-score="True"] .problem').html(contentGate);
  });

  utils.waitForElement('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').then(function(){
      $('[data-graded="True"][data-has-score="True"] .done_onoffswitch_wrapper').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .lti_consumer').then(function(){
      $('[data-graded="True"][data-has-score="True"] .lti_consumer').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .poll-block').then(function(){
      $('[data-graded="True"][data-has-score="True"] .poll-block').html(contentGate);
  });
  
  utils.waitForElement('[data-graded="True"][data-has-score="True"] .word_cloud').then(function(){
      $('[data-graded="True"][data-has-score="True"] .word_cloud').html(contentGate);
  });
  
  utils.waitForElement('.xblock--drag-and-drop .problem-progress').then(function(){
    if ($('.xblock--drag-and-drop .problem-progress').text().indexOf('(graded)') > -1) {
      $('.xblock--drag-and-drop div').css('display','none');
      $('.xblock--drag-and-drop h3').after(contentGate);
      $('.xblock--drag-and-drop').css('max-width', '100%');
    }
  });

  utils.waitForElement('.openassessment.problem').then(function(){
        var ora = $('.openassessment.problem'),
            ungradedOra = ["block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@95f589621c1a47ccada2260523d9715e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@99727a4381c34ef6be1a79a9710853bf","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@1e16f61741d3476f8ddddd84f73a409e","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@286d9d79de0541308e3915aeca9f578f","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@9ff7ffd4b391466a9dbf42ca88c5d177","block-v1:WageningenX+NUTR101x+1T2018+type@openassessment+block@39b3ab2de77b40e2a37ba451511d1c1e","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b3eb457f65dd46d287ff482fb8be44b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@d78355006d1544f3b0f7c6683dbbdb60","block-v1:IsraelX+Virus101x+1T2018+type@openassessment+block@6769d03516dd49e1bb5676922e7caabf","block-v1:EPFLx+Multi-BrainX+2T2018+type@openassessment+block@62c7962f18aa45dd8567ff4024e57deb","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@49632a8e9c514bbcaec5bde7d340f6b7","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@b6fa47d4ae3a493bab7480582705f557","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@6eb73d7cd2df42288c8a48f9f059368b","block-v1:TUMx+SEECx+1T2018+type@openassessment+block@87ec50fde9644e6f9b1f700cdbadfb86","block-v1:SmithsonianX+POPX1.5x+3T2016+type@openassessment+block@53918a4b96744a7f8a7258b12da8a128","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@08f9c7545bb84eafb7a4f6c7a171d12b","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@e265a8d00143424e89d9e311294269bc","block-v1:EPFLx+MARKETSx+2T2018+type@openassessment+block@ff8b61578b4949769caaba15d9b11dec","block-v1:HKUSTx+COMP107x+2T2018+type@openassessment+block@3a2d0a3203ac4d5891301080b9b23fbf","block-v1:UBCx+PSYC.1x+2T2017+type@openassessment+block@c89880416abf4a1bb3a80d0733917b9f","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@c6230917121348a6a879402e088e3d32","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d31a82c76c03432b89cc2ef03cbfab9b","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@669874fcc06b42b98ce4594a6af99147","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@dd5d749ca58845b3bebac5488c331173","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@d699a3ba8eb94858bf69b78dcbf00b6a","block-v1:PennX+ROBO1x+1T2017+type@openassessment+block@eb5fc637fddb4c93938fa4b4fc1b932f","block-v1:HKUSTx+COMP102.1x+2T2018+type@openassessment+block@9f50652472f94cbab2a379225c663099","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@15c89b0bd31b45238842248ad54bd2d1","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@d79369b289e542c0a997bcc2dc335119","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@83d71a23b1bd4b51877322d57f0db047","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@f720d78221fb44568161de08092ad416","block-v1:PennX+ROBO2x+2T2017+type@openassessment+block@f47804fd1f4c47a1b9cd3c4da8a433a4","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@4d64486191ac4669be2ce63c064e2b57","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@433bd76ba9694d89ab601f96a149b412","block-v1:PennX+ROBO3x+2T2017+type@openassessment+block@edae9346a8a445ef86ce442ced7dfb60","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@af16b3c553a440b286572f3621586014","block-v1:WasedaX+JBM111x+2T2018+type@openassessment+block@e9c94da9daa94dd6bd48872b989f8ebf","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@a5801f4ed6af4d80ac83f8bf73f5ac78","block-v1:UBCx+HtC1x+2T2017+type@openassessment+block@db99111c4ef149feb78a1faa68ab3703","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@90ff4316d1384b02bbf31583c2853bcc","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@ee0ec786745b418b962479d8d624bcf5","block-v1:EPFLx+SimNeuroX+3T2017+type@openassessment+block@1da21350444343738087bc09f0699a86","block-v1:PennX+ROBO4x+3T2017+type@openassessment+block@08eef76228964934803b998c81b32cc1","block-v1:RICEx+ELEC301.1x+3T2017+type@openassessment+block@fbe66e65447f4571b6b22c30b7474cbb","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@4bec04b44b0a4c3ab1c044dd65f75136","block-v1:UQx+IELTSx+1T2018+type@openassessment+block@e9bb9c3e7b674c09b5b1d900a3c88a07","block-v1:UQx+ENGY2x+1T2018+type@openassessment+block@dd65e04615d843f781095738dd16f6a9"];
        if (ungradedOra.indexOf(ora.closest('.vert').data('id')) === -1) {   
          $('.openassessment.problem').html(contentGate);
      }
  });
  
  utils.waitForElement('.certA_2').then(function(){
      gatedContentUpgradeClick('courseware');
  });
}

// Progress
utils.waitForElement('#course-info-progress').then(function(){
  $('.wrapper-auto-cert').remove();
  $('.grade-detail-graph').after(contentGateGrades);
  gatedContentUpgradeClick('progress');
  $('.grade-detail-graph').remove();
});

// Courseware
utils.waitForElement('#sequence-list').then(function(){
  gateContent();
  $('.nav-item[data-graded="True"] .seq_problem').after(certSvgSmall);
  var progress = $("#sequence-list");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        gateContent();
      }
    });
  });
  observer.observe(progress[0], {
    attributes: true,
    childList: true,
    subtree: true
  });
});
}}, {"value": "<style>.page-content-main .course-message {\n    display: none;\n}\n\n.subsection .subtitle {\n    display: inline !important;\n}\n\n.gating-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.gating-modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n}\n\n.discussion-board .page-header.has-secondary {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6b0727debb4d4aed91fb85d168b8dc56"}]}], "name": "Gated Content"}], "audienceIds": ["and", "10680370158", "9874510616", "10799350270", "11406950100", "11413366106"], "changes": null, "id": "11418560079", "integrationSettings": null}], "id": "11428260110", "weightDistributions": null, "name": "Content Gating VExpiration Graded Content Only", "groupId": null, "commitId": "11498300521", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.new-feature {\n    background-color: #ccdde6;\n    color: #00507e;\n    margin-right: 8px;\n    font-weight: 500;\n    box-shadow: 0 -1px 0 2px #ccdde6;\n    border-radius: 1px;\n\t  float: left;\n  \tcursor: default;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3cfae3b82ee3428da82e2da9fbdc2bea"}, {"dependencies": [], "type": "custom_code", "id": "75d0991cdfdb4e29b945a0221056287b", "value": function($){window.injectExperimentProperties = function(oldProperties) {
    var properties = {};

    var optimizelyState = window.optimizely.get('state');
    if (!optimizelyState) {
        return;
    }
    var experimentStates = optimizelyState.getExperimentStates();
    if (!experimentStates) {
        return;
    }
    var experimentId = 11418560079;
    if (!experimentStates.hasOwnProperty(experimentId)) {
        return;
    }
    var state = experimentStates[experimentId];
    if (!state.isActive) {
        return;
    }
    properties.experiment_id = experimentId;
    properties.variation_id = state.variation.id;
    return Object.assign(properties, oldProperties);
};

window.experimentEmitEvent = function (eventType, properties) {
    var eventProperties = window.injectExperimentProperties(properties);
    if (typeof analytics !== 'undefined') {
        analytics.track(eventType, eventProperties);
    }
    if (typeof newrelic !== 'undefined') {
        newrelic.addPageAction(eventType, eventProperties);
    }
};

window.experimentTrackLink = function (linkSelector, eventType, properties) {
    window["optimizely"].get("utils").waitForElement(linkSelector).then(function(linkElement) {
        if (typeof analytics !== 'undefined') {
                var eventProperties = window.injectExperimentProperties(properties);
            analytics.trackLink(linkElement, eventType, eventProperties);
        }
    });
};

window.getCookie = function(name) {
  var match = document.cookie.match(name+'=([^;]*)');
  return match ? match[1] : undefined;
};


window.setKeyValue = function(key, value) {
  var experimentId = 9,
      url = 'https://courses.edx.org/api/experiments/v0/data/';
  return jQuery.ajax({
      url: url,
      data: {
          experiment_id: experimentId,
          key: key,
          value: value
      },
      type: 'PUT',
      async: false,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        request.setRequestHeader("X-CSRFToken", window.getCookie('prod-edx-csrftoken'));
      },
  });
};

window.updateKeyValueStore = function(courseId, value) {
  var request = window.setKeyValue(courseId, value);
  request.fail(function(jqXHR, textStatus) {
    if (jqXHR.status==403) {
      // Cross-domain CSRF token is probably out of date, refresh it and then retry the request.
      // This is the only endpoint that updates the cross-domain CSRF token.
      var req2 = jQuery.ajax({
        url: 'https://courses.edx.org/api/enrollment/v1/enrollment',
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
      });
      req2.done(function(response) {
        window.setKeyValue(courseId, value);
      });
    }
  });
};

window.trackPageView = function(pageName) {
  	var eventProperties = window.injectExperimentProperties({
    		ouid: window["optimizely"].get("visitor").visitorId,
        p: pageName
    }), el = $('#course-info-page'),
        aid = window.getCookie('ajs_anonymous_id'),
        gaid = window.getCookie('_ga');
    if (el.length > 0) {
        eventProperties["cid"] = el.data('course-id');
    }
    if (typeof aid !== 'undefined') {
        eventProperties["aid"] = aid.slice(3, -3);
    }
    if (typeof gaid !== 'undefined') {
        eventProperties["gaid"] = gaid;
    }
    $.ajax(
        {
            url: 'https://courses.edx.org/event',
            type: 'GET',
            data: {
                event_type: "edx.bi.experiment.page.viewed",
                event: JSON.stringify(eventProperties),
                page: window.location.href
            },
            cache: false,
            xhrFields: {
                withCredentials: true
            }
        }
    );
};
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["11481221321"], "experiments": [{"weightDistributions": [{"entityId": "11494332556", "endOfRange": 5000}, {"entityId": "11487091313", "endOfRange": 10000}], "audienceName": "EdX Preferred Language is English", "name": "[Rev-471]Program Bundling on Track Selection", "bucketingStrategy": null, "variations": [{"id": "11494332556", "actions": [{"viewId": "11481221321", "changes": []}], "name": "Original"}, {"id": "11487091313", "actions": [{"viewId": "11481221321", "changes": [{"dependencies": [], "type": "custom_code", "id": "72EBBCFB-9721-4C20-A023-40F88267A4B0", "value": function($){$ = jQuery;
var utils = window['optimizely'].get('utils');
window['optimizely'] = window['optimizely'] || [];
utils.waitForElement('.register-choice.register-choice-certificate.v1').then(function(){
    var bundle_div = $('#bundle-data');
    if(bundle_div){
        var bundle_data = JSON.parse(bundle_div.text());
        if(['MicroMasters','Professional Certificate'].includes(bundle_data.program_type)){

            full_price = bundle_data.discount_data.total_incl_tax_excl_discounts.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            discount_price = bundle_data.program_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            newHtml = '<div class="register-choice register-choice-certificate register-choice-bundle v1">\
                <div class="wrapper-copy">\
                    <span class="deco-ribbon"></span>\
                    <h4 class="title">Pursue the Program</h4>\
                    <div class="copy">\
                        <p>Join the <a id="program-click" href="' + bundle_data.program_marketing_site_url + '" target="_blank">' + bundle_data.program_title + '</a> program, a series of courses designed by industry leaders and top universities to build and enhance critical professional skills needed to succeed in today’s most in-demand fields.</p>\
                        <p>\
                            </p><div class="wrapper-copy-inline">\
                                <div class="copy-inline">\
                                    <h4>Benefits of the Program</h4>\
                                    <ul>\
                                        <li><b>' + ((bundle_data.program_type  === 'MicroMasters') ? 'MicroMasters Program Credential' : 'Professional Certificate') +': </b>Earn an industry recognized credential in ' + bundle_data.program_title + ' to demonstrate your expertise.</li>\
                                        <li><b>Access: </b>Gain access to all verified courses in the program.</li>\
                                        <li><b>Savings: </b>Save money by making the commitment today.</li>\
                                    </ul>\
                                </div>\
                                <div class="copy-inline list-actions">\
                                    <ul class="list-actions">\
                                        <li class="action action-select">\
                                            <a id="select-bundle-option" class="bundle-option btn" href="' + bundle_data.program_bundle_url + '">Pursue the Program (<del>' + full_price + '</del> ' + discount_price + ')</a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        <p></p>\
                    </div>\
                </div>\
            </div>';
            $('.register-choice.register-choice-certificate.v1').before(newHtml);

            $('#select-bundle-option').click(function(){
                window['optimizely'].push({
                    type: "event",
                    eventName: "edx.bi.experiments.trackselectionbundle"
                });
            }); 
            $('#program-click').click(function(){
                window['optimizely'].push({
                    type: "event",
                    eventName: "edx.bi.experiments.trackselectionbundle-viewprogram"
                });
            });  
        }
    }
});
}}, {"value": "<style>.bundle-option{    \n    background-attachment: scroll;\n    background-color: rgb(0, 103, 0);\n    background-image: none;\n    border-radius: 2px;\n    box-shadow: rgb(0, 77, 0) 0px 2px 1px 0px;\n    color: rgb(255, 255, 255) !important;\n    display: inline-block;\n    font-weight: 600;\n    height: 45px;\n    line-height: 25.6px;\n    padding-top: 10px;\n    text-align: center;\n    user-select: none;\n    width: 324.062px;\n}\n\n.register .bundle-option:hover{\n      background: #009b00\n}\n\n@media only screen and (max-width: 410px)  {\n    .register-choice-bundle .wrapper-copy {\n        max-width: 270px;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "4158C107-24BB-4ED5-98DF-5D45F4BC3086"}]}], "name": "Include Program in Track Selection"}], "audienceIds": ["and", "8430051876"], "changes": null, "id": "11502362112", "integrationSettings": null}], "id": "11479341338", "weightDistributions": null, "name": "[Rev-471]Program Bundling on Track Selection", "groupId": null, "commitId": "11802934152", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/micromasters/analytics-essential-tools-methods", "match": "simple"}]], "name": "George Tech Program Page", "apiName": "george_tech_program_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8261443030"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course$", "match": "regex"}, {"type": "url", "value": "edx.org/course[/]?\\?.*", "match": "regex"}], ["not", ["or", {"type": "url", "value": "webview.edx.org", "match": "regex"}]]], "name": "Search Results", "apiName": "1743970571_prod_search_results", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8343266652"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}], ["not", ["or", {"type": "url", "value": "course-v1:MichiganX+teachout.1x+1T2017", "match": "substring"}, {"type": "url", "value": "course-v1:MichiganX+teachout.2x+1T2017", "match": "substring"}, {"type": "url", "value": "course-v1:MichiganX+teachout.3x+1T2017", "match": "substring"}, {"type": "url", "value": "course-v1:MichiganX+teachout.4x+1T2017", "match": "substring"}]]], "activationType": "polling", "name": "Courseware", "apiName": "1706490390_courseware_homeinfo", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return document.head !== null;
}, "deactivationEnabled": false, "id": "8415635799"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course/[\\w+]", "match": "regex"}], ["not", ["or", {"type": "url", "value": "edx.org/course/subject", "match": "regex"}]]], "name": "All Course Details Pages", "apiName": "1706490390_all_course_details_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8462065569"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/register", "match": "regex"}]], "name": "Registration Page", "apiName": "1743970571_registration_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8485256782"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(?:course)\\/", "match": "regex"}]], "name": "All Course Home Pages (courses.edx.org/course-id/course)", "apiName": "1743970571_all_course_home_pages_coursesedxorgcourseidcourse", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8550242114"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org/dashboard", "match": "regex"}]], "name": "Dashboard", "apiName": "1743970571_dashboard", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8562284423"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org", "match": "simple"}]], "name": "Homepage", "apiName": "1743970571_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8636165544"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/basket/", "match": "regex"}]], "name": "Checkout Page", "apiName": "1743970571_checkout_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8693450564"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/course_modes/choose/.*", "match": "regex"}]], "name": "Track Selection Page", "apiName": "1743970571_track_selection_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8787863389"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/checkout/receipt/", "match": "regex"}]], "name": "Receipt Page", "apiName": "1743970571_receipt_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8894110449"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/professional-certificate/microsoft-introduction-to-code-objects-and-algorithms", "match": "simple"}]], "name": "Microsoft Program Bundle - MTA - Code+ Algorithms ", "apiName": "1743970571_microsoft_program_bundle_messaging", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9856086750"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/dashboard", "match": "simple"}]], "activationType": "polling", "name": "[LEARNER-3377] Dashboard Page", "apiName": "1743970571_learner3377_dashboard_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  substrings = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  activate = false;
  $('.course-item').each(function(i, e){
    var str = $(e).find('.enter-course').data('course-key');
    if (substrings.indexOf(str) > -1) {
      activate = true;
    }
  });
  return activate;
}, "deactivationEnabled": false, "id": "9857878336"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org/course_modes/choose/", "match": "substring"}]], "activationType": "callback", "name": "[LEARNER-3377] Track Selection Page", "apiName": "1743970571_learner3377_track_selection_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "9862639519"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org/courses/(.*)/course/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3377] Course Home Page", "apiName": "1743970571_learner3377_course_home_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "9974274234"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org/courses/(.*)/learner_analytics/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3377] Learner Analytics Page", "apiName": "1743970571_learner3377_learner_analytics_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "9994033171"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3377] Courseware", "apiName": "1743970571_learner3377_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10187053196"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org/courses/(.*)/course/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3514] Course Home Page", "apiName": "1743970571_learner3514_course_home_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:UBCx+COMM420x+3T2017',
    'course-v1:ColumbiaX+CORPFIN1x+1T2018',
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10188118405"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3514] Courseware", "apiName": "1743970571_learner3514_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:UBCx+COMM420x+3T2017',
    'course-v1:ColumbiaX+CORPFIN1x+1T2018',
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10202188388"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/courses/(.*)/xfeature/portfolio/", "match": "regex"}]], "name": "[LEARNER-3515] Portfolio Page", "apiName": "1743970571_learner3515_portfolio_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10238425886"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3515] Courseware", "apiName": "1743970571_learner3515_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:Microsoft+DEV236x+1T2018',
    'course-v1:Microsoft+DEV274x+1T2018',
    'course-v1:Microsoft+DEV276x+1T2018',
    'course-v1:HKUSTx+COMP102.1x+1T2018',
    'course-v1:HKUSTx+COMP102.2x+1T2018',
    'course-v1:UC3Mx+IT.1.1x+3T2017',
    'course-v1:UC3Mx+IT.1.2x+3T2017',
    'course-v1:UC3Mx+IT.1.3x+3T2017',
    'course-v1:IITBombayX+CS101.1x+1T2018',
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10240812267"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org/course_modes/choose/", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3514] Track Selection Page", "apiName": "1743970571_learner3514_track_selection_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:UBCx+COMM420x+3T2017',
    'course-v1:ColumbiaX+CORPFIN1x+1T2018'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10242602152"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org/courses/(.*)/course/(.*)", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3515] Course Home Page", "apiName": "1743970571_learner3515_course_home_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:Microsoft+DEV236x+1T2018',
    'course-v1:Microsoft+DEV274x+1T2018',
    'course-v1:Microsoft+DEV276x+1T2018',
    'course-v1:HKUSTx+COMP102.1x+1T2018',
    'course-v1:HKUSTx+COMP102.2x+1T2018',
    'course-v1:UC3Mx+IT.1.1x+3T2017',
    'course-v1:UC3Mx+IT.1.2x+3T2017',
    'course-v1:UC3Mx+IT.1.3x+3T2017',
    'course-v1:IITBombayX+CS101.1x+1T2018',
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10244784103"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/dashboard", "match": "simple"}]], "activationType": "polling", "name": "[LEARNER-3515] Dashboard Page", "apiName": "1743970571_learner3515_dashboard_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  deactivate_substrings = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018'
  ];
  substrings = [
    'course-v1:adam+adam+adam',
    'course-v1:Microsoft+DEV236x+1T2018',
    'course-v1:Microsoft+DEV274x+1T2018',
    'course-v1:Microsoft+DEV276x+1T2018',
    'course-v1:HKUSTx+COMP102.1x+1T2018',
    'course-v1:HKUSTx+COMP102.2x+1T2018',
    'course-v1:UC3Mx+IT.1.1x+3T2017',
    'course-v1:UC3Mx+IT.1.2x+3T2017',
    'course-v1:UC3Mx+IT.1.3x+3T2017',
    'course-v1:IITBombayX+CS101.1x+1T2018',
  ];
  activate = false;
  $('.course-item').each(function(i, e){
    var str = $(e).find('.enter-course').data('course-key');
    if (deactivate_substrings.indexOf(str) > -1) {
      activate = false;
      return false;
    }
    if (substrings.indexOf(str) > -1) {
      activate = true;
    }
  });
  return activate;
}, "deactivationEnabled": false, "id": "10246741690"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/dashboard", "match": "simple"}]], "activationType": "polling", "name": "[LEARNER-3514] Dashboard Page", "apiName": "1743970571_learner3514_dashboard_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  deactivate_substrings = [
    'course-v1:adam+adam+adam',
    'course-v1:BerkeleyX+ColWri2.1x+3T2017_2',
    'course-v1:HarvardX+PH125.1x+3T2017',
    'course-v1:Microsoft+DAT205x+1T2018',
    'course-v1:Microsoft+DAT206x+1T2018',
    'course-v1:Microsoft+DAT207x+1T2018',
    'course-v1:Microsoft+DAT208x+1T2018',
    'course-v1:Microsoft+DEV283x+2T2017',
    'course-v1:UQx+TOURISMx+3T2017',
    'course-v1:UTHealthSPHx+IMAGINE99x+3T2017',
    'course-v1:AdelaideX+Project101x+1T2017',
    'course-v1:Catalystx+IL5x+1T2018',
    'course-v1:ETSx+TOEFLx+1T2018',
    'course-v1:LinuxFoundationX+LFS101x+1T2017',
    'course-v1:LinuxFoundationX+LFS171x+3T2017',
    'course-v1:UBCx+COMM220x+3T2017',
    'course-v1:UQx+IELTSx+1T2018',
    'course-v1:NYIF+CM1.x+3T2017',
    'course-v1:CurtinX+IOT1x+1T2018',
    'course-v1:HarvardX+PH526x+1T2018',
    'course-v1:Harvardx+HLS2X+1T2018',
    'course-v1:Microsoft+CLD251x+1T2018',
    'course-v1:Microsoft+DAT204x+1T2018',
    'course-v1:Microsoft+DAT222x+1T2018',
    'course-v1:Microsoft+DAT256x+1T2018',
    'course-v1:NewcastleX+SWL101x+1T2018',
    'course-v1:RITx+SKILLS101x+1T2018',
    'course-v1:UPValenciaX+BSP101x+1T2017',
    'course-v1:UTArlingtonX+CSE1309x+1T2018',
    'course-v1:Microsoft+DEV236x+1T2018',
    'course-v1:Microsoft+DEV274x+1T2018',
    'course-v1:Microsoft+DEV276x+1T2018',
    'course-v1:HKUSTx+COMP102.1x+1T2018',
    'course-v1:HKUSTx+COMP102.2x+1T2018',
    'course-v1:UC3Mx+IT.1.1x+3T2017',
    'course-v1:UC3Mx+IT.1.2x+3T2017',
    'course-v1:UC3Mx+IT.1.3x+3T2017',
    'course-v1:IITBombayX+CS101.1x+1T2018',
  ];
  substrings = [
    'course-v1:UBCx+COMM420x+3T2017',
    'course-v1:ColumbiaX+CORPFIN1x+1T2018'
  ];
  activate = false;
  $('.course-item').each(function(i, e){
    var str = $(e).find('.enter-course').data('course-key');
    if (deactivate_substrings.indexOf(str) > -1) {
      activate = false;
      return false;
    }
    if (substrings.indexOf(str) > -1) {
      activate = true;
    }
  });
  return activate;
}, "deactivationEnabled": false, "id": "10257400230"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org/course_modes/choose/", "match": "regex"}]], "activationType": "callback", "name": "[LEARNER-3515] Track Selection Page", "apiName": "1743970571_learner3515_track_selection_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
    'course-v1:adam+adam+adam',
    'course-v1:Microsoft+DEV236x+1T2018',
    'course-v1:Microsoft+DEV274x+1T2018',
    'course-v1:Microsoft+DEV276x+1T2018',
    'course-v1:HKUSTx+COMP102.1x+1T2018',
    'course-v1:HKUSTx+COMP102.2x+1T2018',
    'course-v1:UC3Mx+IT.1.1x+3T2017',
    'course-v1:UC3Mx+IT.1.2x+3T2017',
    'course-v1:UC3Mx+IT.1.3x+3T2017',
    'course-v1:IITBombayX+CS101.1x+1T2018',
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10279640053"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/courses/course-v1:ColumbiaX+CORPFIN1x+1T2018/discussion/forum/", "match": "simple"}, {"type": "url", "value": "https://courses.edx.org/courses/course-v1:UBCx+COMM420x+3T2017/discussion/forum/", "match": "simple"}]], "name": "LEARNER-3514 Discussions ", "apiName": "1743970571_learner3514_discussions_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10309704977"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/courses/course-v1:ColumbiaX+CORPFIN1x+1T2018/discussion/forum/verifiedsupport/threads/5a8710719379400a080010ad", "match": "simple"}, {"type": "url", "value": "https://courses.edx.org/courses/course-v1:UBCx+COMM420x+3T2017/discussion/forum/busmktg1x_verifiedsupport/threads/5a87129c24451a09eb00112e", "match": "simple"}]], "name": "LEARNER-3514 Thread", "apiName": "1743970571_learner3514_thread", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10311317979"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/courses/course-v1:ColumbiaX+CORPFIN1x+1T2018/discussion/forum/", "match": "simple"}, {"type": "url", "value": "https://courses.edx.org/courses/course-v1:UBCx+COMM420x+3T2017/discussion/forum/", "match": "simple"}]], "name": "LEARNER-3514 Discussions", "apiName": "1743970571_learner3514_discussions", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10317513270"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/micromasters/mitx-supply-chain-management", "match": "simple"}, {"type": "url", "value": "https://www.edx.org/micromasters/cloud-computing", "match": "simple"}, {"type": "url", "value": "https://www.edx.org/micromasters/ritx-cybersecurity", "match": "simple"}]], "name": "MicroMasters Pages - GE Interviews", "apiName": "1743970571_micromasters_pages__ge_interviews", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10318510742"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/micromasters/columbiax-artificial-intelligence", "match": "simple"}]], "name": "GE Interviews - Columbia AI Page", "apiName": "1743970571_ge_interviews__columbia_ai_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10339411686"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course_modes/choose/.*", "match": "regex"}]], "activationType": "callback", "name": "REV-19 Track Selection", "apiName": "1743970571_rev17_track_selection", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = Object.keys(supportFeeConfig.courseSkus);
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10465405678"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org/courses/(.*)/course/(.*)", "match": "regex"}]], "activationType": "callback", "name": "REV-19 Course Home Page", "apiName": "1743970571_rev19_course_home_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = [
		'course-v1:MITx+6.002.1x_1+2T2016',
    //'course-v1:MITx+6.002.2x_1+2T2016',
    //'course-v1:MITx+6.002.3x_1+2T2016'
  ];
  for (var index in courseKeys) {
    if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
      activate();
      return;
    }
  }
}, "deactivationEnabled": false, "id": "10471317457"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course/[\\w+]", "match": "regex"}], ["not", ["or", {"type": "url", "value": "edx.org/course/subject", "match": "regex"}]]], "activationType": "polling", "name": "REV-19 Course Details Page", "apiName": "1743970571_rev19_course_details_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  var courseKeys = [
		'course-v1:MITx+6.002.1x_1+2T2016'
  ];
  //'course-v1:MITx+6.002.2x_1+2T2016',
  //'course-v1:MITx+6.002.3x_1+2T2016'
  for (var index in courseKeys) {
    if (jQuery('main').data('course-id') === courseKeys[index]) {
      return true;
    }
  }
  return false;
}, "deactivationEnabled": false, "id": "10473122883"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/dashboard", "match": "simple"}]], "activationType": "polling", "name": "REV-19 Dashboard", "apiName": "1743970571_rev19_dashboard", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  var keys = Object.keys(paywallConfigV2.courseSkus);
  activate = false;
  $('.course-item').each(function(i, e){
    var str = $(e).find('.enter-course').data('course-key');
    if (keys.indexOf(str) > -1) {
      activate = true;
    }
  });
  return activate;
}, "deactivationEnabled": false, "id": "10476749443"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://ecommerce.edx.org/basket/", "match": "regex"}]], "activationType": "callback", "name": "REV-19 Support Fee Checkout Page", "apiName": "1743970571_rev19_audit_checkout_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var skus = Object.values(supportFeeConfig.courseSkus);
	var sku = jQuery('.product.row:first').data('sku');
  if (jQuery.inArray(sku, skus) > -1) {
		activate();
  	return;
  }
}, "deactivationEnabled": false, "id": "10477476666"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "REV-56 Courseware", "apiName": "1743970571_rev56_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  $ = jQuery;
  var courseKeys = Object.keys(supportFeeConfig.courseSkus),
      metadata = JSON.parse($('#user-metadata').text()),
      enrollmentMode = metadata.enrollment_mode,
      courseId = metadata.course_id;
  if (enrollmentMode !== 'verified') {
      for (var index in courseKeys) {
        if (decodeURIComponent(window.location.href).indexOf(courseKeys[index]) > 0) {
          var enrolledKey = 'enrolled_' + courseId,
              paidKey = 'paid_' + courseId;
          $.ajax({ type: "GET",   
                  url: "https://courses.edx.org/api/experiments/v0/data/",   
                  async: false,
                  success : function(response)
                  {
                    var arrayLength = response.results.length,
                        hasPreview = false;
                    for (var i = 0; i < arrayLength; i++) {
                      if (response.results[i].key.indexOf(enrolledKey) > -1) {
                        hasPreview = true;
                      }
                      if (response.results[i].key.indexOf(paidKey) > -1) {
                        hasPreview = false;
                      }
                    }
                    if (hasPreview) {
                      activate();
                    }
                  }
                 });
       }
     }
  }
}, "deactivationEnabled": false, "id": "10524440721"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/professional-certificate/microsoft-introduction-to-computer-science", "match": "simple"}]], "name": "Microsoft Program Bundle - MTA - Computer Science", "apiName": "1743970571_microsoft_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10613660902"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://courses.edx.org/course_modes/choose/", "match": "substring"}]], "activationType": "callback", "name": "Revenue Track Selection", "apiName": "1743970571_revenue_track_selection", "tags": [], "undoOnDeactivation": false, "activationCode": function(activate, options) {
  var jq = window['optimizely'].get('jquery'),
  		metadata = JSON.parse(jq('#user-metadata').text()),
      courseId = metadata.course_id,
      keys = [].concat(Object.keys(paywallConfig.activationTimes),Object.keys(paywallConfigV2.activationTimes), Object.keys(paywallConfigV3.activationTimes), Object.keys(contentGatingConfig.activationTimes), Object.keys(contentGatingConfigV2.activationTimes), Object.keys(verifiedOnly.activationTimes),
Object.keys(contentGatingConfigV3.activationTimes)),
			excludeCourseIds = [];
jq.each(keys, function(i, el){
    if(jq.inArray(el, excludeCourseIds) === -1) excludeCourseIds.push(el);
});
  if (jq.inArray(courseId, excludeCourseIds) === -1) {
    activate();
  }
}, "deactivationEnabled": false, "id": "10738931070"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "edx.org", "match": "simple"}, {"type": "url", "value": "edx.org/es", "match": "simple"}]], "name": "Both home pages (production)", "apiName": "1743970571_both_home_pages_production", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10796961003"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.edx.org", "match": "regex"}]], "name": "All of www.edx.org", "apiName": "1743970571_all_of_wwwedxorg", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10801790320"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "edx.org/course_modes/choose/", "match": "regex"}]], "activationType": "callback", "name": "V3 Paywall Track Selection", "apiName": "1743970571_v3_paywall_track_selection", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = Object.keys(paywallConfigV2.courseSkus),
      metadata = JSON.parse(jQuery('#user-metadata').text()),
      enrollmentTime = new Date(metadata.enrollment_time),
      notStaff = metadata.has_staff_access === false;
  for (var index in courseKeys) {
    var courseKey = courseKeys[index];
    if (notStaff && decodeURIComponent(window.location.href).indexOf(courseKey) > 0) {
      var activationTime = new Date(paywallConfigV2.activationTimes[courseKey]);
      if (enrollmentTime > activationTime) {
        activate();
        return;
      }
    }
  }
}, "deactivationEnabled": false, "id": "10830200337"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://courses.edx.org/dashboard/programs/", "match": "exact"}]], "name": "Program Dashboard", "apiName": "1743970571_program_dashboard", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10850471468"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "Paid Program Courseware", "apiName": "1743970571_paid_program_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = Object.keys(verifiedOnly.certSkus),
      metadata = JSON.parse(jQuery('#user-metadata').text()),
      enrollmentTime = new Date(metadata.enrollment_time),
      notStaff = metadata.has_staff_access === false && metadata.forum_roles.length === 1,
      isVerified = metadata.enrollment_mode === "verified",
      courseId = metadata.course_id;
  for (var index in courseKeys) {
    var courseKey = courseKeys[index];
    if (notStaff && courseId === courseKey) {
      var activationTime = new Date(verifiedOnly.activationTimes[courseKey]);
      if ((enrollmentTime > activationTime) && !isVerified) {
        activate();
        return;
      }
    }
  }
}, "deactivationEnabled": false, "id": "10890170513"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course/[\\w+]", "match": "regex"}], ["not", ["or", {"type": "url", "value": "edx.org/course/subject", "match": "regex"}]]], "activationType": "polling", "name": "Paid Program Course About", "apiName": "1743970571_paid_program_course_about", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  var courseKeys = Object.keys(verifiedOnly.certSkus);
  if (!jQuery) {
  	return false;
  }
  var element = jQuery('#course-info-page');
  if (element.length === 0) {
    return false;
  }
  return jQuery.inArray(element.data('course-id'), courseKeys) > -1;
}, "deactivationEnabled": false, "id": "10896190779"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course_modes/choose/.*", "match": "regex"}]], "activationType": "callback", "name": "Paid Program Track Selection", "apiName": "1743970571_paid_program_track_selection", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  var courseKeys = Object.keys(verifiedOnly.certSkus),
      metadata = JSON.parse(jQuery('#user-metadata').text()),
      enrollmentTime = new Date(metadata.enrollment_time),
      notStaff = metadata.has_staff_access === false && metadata.forum_roles.length === 1;
  for (var index in courseKeys) {
    var courseKey = courseKeys[index];
    if (notStaff && decodeURIComponent(window.location.href).indexOf(courseKey) > 0) {
      var activationTime = new Date(verifiedOnly.activationTimes[courseKey]);
      if (enrollmentTime > activationTime) {
        activate();
        return;
      }
    }
  }
}, "deactivationEnabled": false, "id": "10896520899"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://courses.edx.org/financial-assistance/apply/", "match": "simple"}]], "name": "Financial Aid", "apiName": "1743970571_financial_aid", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10936032353"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course_modes/choose/.*", "match": "regex"}]], "activationType": "callback", "name": "Content Gating Track Selection V3", "apiName": "1743970571_content_gating_track_selection_v3", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigV3.activationTimes),
  		metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href),
      username = metadata.username,
      contentGatingCourse = Object.keys(contentGatingConfigV3.activationTimes).indexOf(courseId) > -1;
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
    	var courseKey = courseKeys[index],
    			activationTime = new Date(contentGatingConfigV3.activationTimes[courseKey]),
          deactivationString = contentGatingConfigV3.deactivationTimes[courseKey],
          deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
    	if ( courseId === courseKey ) {
	        if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
	           activate();
	        }
        }
  	}
  }
}
, "deactivationEnabled": false, "id": "11096882266"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "Content Gating Courseware V3", "apiName": "1743970571_content_gating_courseware_v3", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigV3.activationTimes),
  		metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false && metadata.forum_roles.length === 1,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href);
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
    	var courseKey = courseKeys[index],
    			activationTime = new Date(contentGatingConfigV3.activationTimes[courseKey]),
          deactivationString = contentGatingConfigV3.deactivationTimes[courseKey],
          deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
    	if ( courseId === courseKey ) {
	        if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
	           activate();
	        }
        }
  	}
  }
}, "deactivationEnabled": false, "id": "11114260510"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org", "match": "regex"}]], "activationType": "callback", "name": "[REV-378] Courseware - Discount Banner", "apiName": "1743970571_rev378_coureware__discount_banner", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
	};
  
  if(getCookie('discountBannerRev378'))
  {
    	activate();
  }
}, "deactivationEnabled": false, "id": "11193544634"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.edx.org", "match": "regex"}], ["not", ["or", {"type": "url", "value": "https://www.edx.org/school/new-york-institute-finance", "match": "regex"}, {"type": "url", "value": " https://www.edx.org/school/gtx", "match": "regex"}, {"type": "url", "value": "https://www.edx.org/school/pennx", "match": "regex"}, {"type": "url", "value": "https://www.edx.org/school/wharton", "match": "regex"}]]], "activationType": "callback", "name": "[REV-378] Marketing Site - Discount Banner", "apiName": "1743970571_rev378_marketing_site__discount_banner", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
	};
  
  if(getCookie('discountBannerRev378') || !getCookie('edxloggedin'))
  {
    	activate();
  }
}, "deactivationEnabled": false, "id": "11206263981"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "Content Gating VMobile Courseware", "apiName": "1743970571_content_gating_vmobile_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigVMobile.activationTimes),
        metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false && metadata.forum_roles.length === 1,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href);
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
        var courseKey = courseKeys[index],
                activationTime = new Date(contentGatingConfigVMobile.activationTimes[courseKey]),
          deactivationString = contentGatingConfigVMobile.deactivationTimes[courseKey],
          deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
        if ( courseId === courseKey ) {
            if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
               activate();
            }
        }
    }
  }
}, "deactivationEnabled": false, "id": "11346070292"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course_modes/choose/.*", "match": "regex"}]], "activationType": "callback", "name": "Content Gating Track Selection VMobile", "apiName": "1743970571_content_gating_track_selection_vmobile", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigVMobile.activationTimes),
        metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href),
      username = metadata.username,
      contentGatingCourse = Object.keys(contentGatingConfigVMobile.activationTimes).indexOf(courseId) > -1;
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
        var courseKey = courseKeys[index],
                activationTime = new Date(contentGatingConfigVMobile.activationTimes[courseKey]),
          deactivationString = contentGatingConfigVMobile.deactivationTimes[courseKey],
          deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
        if ( courseId === courseKey ) {
            if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
               activate();
            }
        }
    }
  }
}, "deactivationEnabled": false, "id": "11357290499"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://edx.org/business", "match": "simple"}]], "name": "edX for Business", "apiName": "1743970571_edx_for_business", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11359113208"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://ecommerce.edx.org/checkout/receipt/", "match": "regex"}]], "activationType": "callback", "name": "[REV-378] Receipt Page", "apiName": "1743970571_rev378_receipt_page", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
	};
  
  if(getCookie('discountBannerRev378'))
  {
    	activate();
  }
}, "deactivationEnabled": false, "id": "11365087667"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://ecommerce.edx.org/basket/", "match": "simple"}]], "activationType": "callback", "name": "[REV-378] Ecommerce - Discount Banner", "apiName": "1743970571_rev378_ecommerce__discount_banner", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
	};
  
  if(getCookie('discountBannerRev378'))
  {
    	activate();
  }
}, "deactivationEnabled": false, "id": "11370808630"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "edx.org/course_modes/choose/.*", "match": "regex"}]], "activationType": "callback", "name": "Content Gating Track Selection VExpiration", "apiName": "1743970571_content_gating_track_selection_vexpiration", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigVExpiration.activationTimes),
      metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),  
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href),
      username = metadata.username,
      contentGatingCourse = Object.keys(contentGatingConfigVExpiration.activationTimes).indexOf(courseId) > -1;
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
        var courseKey = courseKeys[index],
            excludeKey = 'exclude_' + courseId,
            activationTime = new Date(contentGatingConfigVExpiration.activationTimes[courseKey]),
            deactivationString = contentGatingConfigVExpiration.deactivationTimes[courseKey],
            deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
        if ( courseId === courseKey ) {
            if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
              jQuery.ajax({ type: "GET",   
                  url: "https://courses.edx.org/api/experiments/v0/data/",   
                  async: false,
                  success : function(response)
                  {
                    var arrayLength = response.results.length,
                        notExcluded = true;
                    for (var i = 0; i < arrayLength; i++) {
                      if (response.results[i].key === excludeKey) {
                        notExcluded = false;
                      }
                    }
                    if (notExcluded) {
                      activate();
                    }
                  }
              });
            }
        }
    }
  }
}
, "deactivationEnabled": false, "id": "11414790021"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "//courses.edx.org\\/courses\\/(.*)\\/(.*)", "match": "regex"}]], "activationType": "callback", "name": "Content Gating VExpiration Courseware", "apiName": "1743970571_content_gating_vexpiration_courseware", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see http://developers.optimizely.com/x/activation.
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function(activate, options) {
  var courseKeys = Object.keys(contentGatingConfigVExpiration.activationTimes),
        metadata = JSON.parse(jQuery('#user-metadata').text()),
      notStaff = metadata.has_staff_access === false && metadata.forum_roles.length === 1,
      enrollmentMode = metadata.enrollment_mode,
      enrollmentTime = new Date(metadata.enrollment_time),
      courseId = metadata.course_id,
      url = decodeURIComponent(window.location.href);
  if ((enrollmentMode !== 'verified') && notStaff) {
    for (var index in courseKeys) {
        var courseKey = courseKeys[index],
            excludeKey = 'exclude_' + courseId,
            activationTime = new Date(contentGatingConfigVExpiration.activationTimes[courseKey]),
            deactivationString = contentGatingConfigVExpiration.deactivationTimes[courseKey],
            deactivationTime = deactivationString ? new Date(deactivationString) : new Date('2424-08-02T19:30:00+00:00'); 
        if ( courseId === courseKey ) {
            if ((enrollmentTime > activationTime) && (enrollmentTime < deactivationTime)) {
                jQuery.ajax({ type: "GET",   
                  url: "https://courses.edx.org/api/experiments/v0/data/",   
                  async: false,
                  success : function(response)
                  {
                    var arrayLength = response.results.length,
                        notExcluded = true;
                    for (var i = 0; i < arrayLength; i++) {
                      if (response.results[i].key === excludeKey) {
                        notExcluded = false;
                      }
                    }
                    if (notExcluded) {
                      activate();
                    }
                  }
                });
            }
        }
    }
  }
}, "deactivationEnabled": false, "id": "11420770034"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://courses.edx.org/course_modes/choose/", "match": "regex"}]], "activationType": "callback", "name": "[Rev-471] Track Selection", "apiName": "1743970571_rev471", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
var metadata = JSON.parse(jQuery('#user-metadata').text()),
        courseId = metadata.course_id,
        keys = [].concat(Object.keys(contentGatingConfigV3.activationTimes),Object.keys(contentGatingConfigVMobile.activationTimes), Object.keys(contentGatingConfigVExpiration.activationTimes), Object.keys(verifiedOnly.activationTimes));
    if (jQuery.inArray(courseId, keys) === -1) {
      activate();
    }
}, "deactivationEnabled": false, "id": "11481221321"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.edx.org/es", "match": "simple"}]], "name": "Homepage (Espa\u00f1ol)", "apiName": "1743970571_homepage_espaol", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11487040333"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "courses.edx.org", "match": "regex"}], ["not", ["or", {"type": "url", "value": "courseware", "match": "regex"}]], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function () {
  getCookie = function(name) {
      var match = document.cookie.match(name+'=([^;]*)');
      return match ? match[1] : undefined;
  };
  return (typeof getCookie('AbandonedCart') !== 'undefined');
}}]], "name": "Platform Except In-Course Abandoned Cart", "apiName": "1743970571_platform_except_incourse_abandoned_cart", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11500295337"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org*", "match": "regex"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function () {
  getCookie = function(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
  };
  return (typeof getCookie('AbandonedCart') !== 'undefined');
}}]], "name": "Marketing Site Abandoned Cart", "apiName": "1743970571_marketing_site_abandoned_cart", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11560120613"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.edx.org/learn/data-science", "match": "simple"}]], "name": "Data Science Subject Page", "apiName": "1743970571_data_science_subject_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11795547321"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.edx.org/micromasters/usmx-umuc-cloud-computing", "match": "simple"}]], "name": "GE Interviews - USMx UMUC Cloud Computing", "apiName": "1743970571_ge_interviews__usmx_umuc_cloud_computing", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11921940986"}], "projectId": "1743970571", "namespace": "1743970571", "listTargetingCookies": [], "dimensions": [{"segmentId": "3742021360", "id": "3757290752", "apiName": "dashboardonations", "name": "Dashboard Donations"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "en", "type": "cookies", "name": "prod-edx-language-preference", "match": "exact"}], ["not", ["or", {"value": null, "type": "cookies", "name": "prod-edx-language-preference", "match": "exists"}]]]], "id": "8430051876", "name": "EdX Preferred Language is English"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "experiments_is_enterprise", "match": "exact"}]]]], "id": "9874510616", "name": "Not Enterprise"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n    audienceBool = metadata.has_staff_access == false;\naudienceBool;", "type": "code", "name": null, "match": null}]]], "id": "10680370158", "name": "Not Staff"}, {"conditions": ["and", ["or", ["or", {"value": "(function() {\n    var notOnCampus, email,\n        cacheCookieName = \"partner_experiment_exclusion\",\n        localGetCookie = function(name) {\n            var match = document.cookie.match(name+'=([^;]*)');\n            return match ? match[1] : undefined;\n        },\n        localSetCookie = function(c_name, value, c_domain, exdays) {\n            c_domain = (typeof c_domain === \"undefined\") ? \"\" : \"domain=\" + c_domain + \";\";\n            var exdate=new Date();\n            exdate.setDate(exdate.getDate() + exdays);\n            var c_value=escape(value) + ((exdays==null) ? \"\" : \"; expires=\"+exdate.toUTCString());\n            document.cookie=c_name + \"=\" + c_value + \";\" + c_domain + \"path=/\";\n        },\n        cacheCookieValue = localGetCookie(cacheCookieName);\n\n    if (typeof cacheCookieValue !== \"undefined\") {\n        return cacheCookieValue === \"true\";\n    }\n\n    // Cache cookie is not defined, we need to check user metadata to determine is the learner should be excluded\n    if (jQuery('#user-metadata').length > 0) {\n        email = JSON.parse(jQuery('#user-metadata').text()).email;\n        notOnCampus = (email.indexOf('@adelaide.edu.au') === -1) && (email.indexOf('umich.edu') === -1);\n        localSetCookie(cacheCookieName, notOnCampus, \".edx.org\");\n    } else {\n        notOnCampus = true;\n    }\nreturn notOnCampus;\n})();", "type": "code", "name": null, "match": null}]]], "id": "10799350270", "name": "Not On Campus"}, {"conditions": ["and", ["or", ["or", {"value": "(function ($) {\n    'use strict';\n    /*\n    * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n    * to work around bugs in some JS interpreters.\n    */\n    function safe_add(x, y) {\n        var lsw = (x & 0xFFFF) + (y & 0xFFFF),\n            msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n        return (msw << 16) | (lsw & 0xFFFF);\n    }\n    /*\n    * Bitwise rotate a 32-bit number to the left.\n    */\n    function bit_rol(num, cnt) {\n        return (num << cnt) | (num >>> (32 - cnt));\n    }\n    /*\n    * These functions implement the four basic operations the algorithm uses.\n    */\n    function md5_cmn(q, a, b, x, s, t) {\n        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);\n    }\n    function md5_ff(a, b, c, d, x, s, t) {\n        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);\n    }\n    function md5_gg(a, b, c, d, x, s, t) {\n        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);\n    }\n    function md5_hh(a, b, c, d, x, s, t) {\n        return md5_cmn(b ^ c ^ d, a, b, x, s, t);\n    }\n    function md5_ii(a, b, c, d, x, s, t) {\n        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);\n    }\n    /*\n    * Calculate the MD5 of an array of little-endian words, and a bit length.\n    */\n    function binl_md5(x, len) {\n        /* append padding */\n        x[len >> 5] |= 0x80 << ((len) % 32);\n        x[(((len + 64) >>> 9) << 4) + 14] = len;\n        var i, olda, oldb, oldc, oldd,\n            a =  1732584193,\n            b = -271733879,\n            c = -1732584194,\n            d =  271733878;\n        for (i = 0; i < x.length; i += 16) {\n            olda = a;\n            oldb = b;\n            oldc = c;\n            oldd = d;\n            a = md5_ff(a, b, c, d, x[i],       7, -680876936);\n            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);\n            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);\n            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);\n            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);\n            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);\n            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);\n            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);\n            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);\n            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);\n            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);\n            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);\n            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);\n            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);\n            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);\n            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);\n            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);\n            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);\n            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);\n            b = md5_gg(b, c, d, a, x[i],      20, -373897302);\n            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);\n            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);\n            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);\n            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);\n            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);\n            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);\n            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);\n            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);\n            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);\n            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);\n            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);\n            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);\n            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);\n            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);\n            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);\n            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);\n            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);\n            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);\n            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);\n            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);\n            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);\n            d = md5_hh(d, a, b, c, x[i],      11, -358537222);\n            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);\n            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);\n            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);\n            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);\n            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);\n            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);\n            a = md5_ii(a, b, c, d, x[i],       6, -198630844);\n            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);\n            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);\n            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);\n            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);\n            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);\n            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);\n            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);\n            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);\n            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);\n            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);\n            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);\n            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);\n            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);\n            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);\n            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);\n            a = safe_add(a, olda);\n            b = safe_add(b, oldb);\n            c = safe_add(c, oldc);\n            d = safe_add(d, oldd);\n        }\n        return [a, b, c, d];\n    }\n    /*\n    * Convert an array of little-endian words to a string\n    */\n    function binl2rstr(input) {\n        var i,\n            output = '';\n        for (i = 0; i < input.length * 32; i += 8) {\n            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);\n        }\n        return output;\n    }\n    /*\n    * Convert a raw string to an array of little-endian words\n    * Characters >255 have their high-byte silently ignored.\n    */\n    function rstr2binl(input) {\n        var i,\n            output = [];\n        output[(input.length >> 2) - 1] = undefined;\n        for (i = 0; i < output.length; i += 1) {\n            output[i] = 0;\n        }\n        for (i = 0; i < input.length * 8; i += 8) {\n            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);\n        }\n        return output;\n    }\n    /*\n    * Calculate the MD5 of a raw string\n    */\n    function rstr_md5(s) {\n        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));\n    }\n    /*\n    * Calculate the HMAC-MD5, of a key and some data (raw strings)\n    */\n    function rstr_hmac_md5(key, data) {\n        var i,\n            bkey = rstr2binl(key),\n            ipad = [],\n            opad = [],\n            hash;\n        ipad[15] = opad[15] = undefined;                        \n        if (bkey.length > 16) {\n            bkey = binl_md5(bkey, key.length * 8);\n        }\n        for (i = 0; i < 16; i += 1) {\n            ipad[i] = bkey[i] ^ 0x36363636;\n            opad[i] = bkey[i] ^ 0x5C5C5C5C;\n        }\n        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);\n        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));\n    }\n    /*\n    * Convert a raw string to a hex string\n    */\n    function rstr2hex(input) {\n        var hex_tab = '0123456789abcdef',\n            output = '',\n            x,\n            i;\n        for (i = 0; i < input.length; i += 1) {\n            x = input.charCodeAt(i);\n            output += hex_tab.charAt((x >>> 4) & 0x0F) +\n                hex_tab.charAt(x & 0x0F);\n        }\n        return output;\n    }\n    /*\n    * Encode a string as utf-8\n    */\n    function str2rstr_utf8(input) {\n        return unescape(encodeURIComponent(input));\n    }\n    /*\n    * Take string arguments and return either raw or hex encoded strings\n    */\n    function raw_md5(s) {\n        return rstr_md5(str2rstr_utf8(s));\n    }\n    function hex_md5(s) {\n        return rstr2hex(raw_md5(s));\n    }\n    function raw_hmac_md5(k, d) {\n        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));\n    }\n    function hex_hmac_md5(k, d) {\n        return rstr2hex(raw_hmac_md5(k, d));\n    }\n    \n    $.md5 = function (string, key, raw) {\n        if (!key) {\n            if (!raw) {\n                return hex_md5(string);\n            } else {\n                return raw_md5(string);\n            }\n        }\n        if (!raw) {\n            return hex_hmac_md5(key, string);\n        } else {\n            return raw_hmac_md5(key, string);\n        }\n    };\n    \n}(typeof jQuery === 'function' ? jQuery : this));\n/**\n* Convert From/To Binary/Decimal/Hexadecimal in JavaScript\n* https://gist.github.com/faisalman\n*\n* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>\n* Licensed under The MIT License\n* http://www.opensource.org/licenses/mit-license\n*/\n(function(){\n    var ConvertBase = function (num) {\n        return {\n            from : function (baseFrom) {\n                return {\n                    to : function (baseTo) {\n                        return parseInt(num, baseFrom).toString(baseTo);\n                    }\n                };\n            }\n        };\n    };\n        \n    // binary to decimal\n    ConvertBase.bin2dec = function (num) {\n        return ConvertBase(num).from(2).to(10);\n    };\n    \n    // binary to hexadecimal\n    ConvertBase.bin2hex = function (num) {\n        return ConvertBase(num).from(2).to(16);\n    };\n    \n    // decimal to binary\n    ConvertBase.dec2bin = function (num) {\n        return ConvertBase(num).from(10).to(2);\n    };\n    \n    // decimal to hexadecimal\n    ConvertBase.dec2hex = function (num) {\n        return ConvertBase(num).from(10).to(16);\n    };\n    \n    // hexadecimal to binary\n    ConvertBase.hex2bin = function (num) {\n        return ConvertBase(num).from(16).to(2);\n    };\n    \n    // hexadecimal to decimal\n    ConvertBase.hex2dec = function (num) {\n        return ConvertBase(num).from(16).to(10);\n    };\n    \n    this.ConvertBase = ConvertBase;\n    \n})(this);\n\nfunction hashUsername(group_name, group_count) {\n   var username = JSON.parse(jQuery('#user-metadata').text() || {}).username,\n         hash = $.md5(group_name + username),\n\u2002       binary = hash.replace(/0|1|2|3|4|5|6|7/g, '0').replace(/8|9|a|b|c|d|e|f/g, '1'),\n\u2002\u2002     group =  parseInt(binary, 2) % group_count;\n        if (group === 0) {\n           return true;\n        }\n        return false;\n}\n\nvar metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n    audienceBool = hashUsername('cgv3', 2),\n    username = metadata.username,\n    courseId = metadata.course_id;\naudienceBool;", "type": "code", "name": null, "match": null}]]], "id": "11103384428", "name": "Content Gating Hashed Username Treatment"}, {"conditions": ["and", ["or", ["or", {"value": "(function ($) {\n    'use strict';\n    /*\n    * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n    * to work around bugs in some JS interpreters.\n    */\n    function safe_add(x, y) {\n        var lsw = (x & 0xFFFF) + (y & 0xFFFF),\n            msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n        return (msw << 16) | (lsw & 0xFFFF);\n    }\n    /*\n    * Bitwise rotate a 32-bit number to the left.\n    */\n    function bit_rol(num, cnt) {\n        return (num << cnt) | (num >>> (32 - cnt));\n    }\n    /*\n    * These functions implement the four basic operations the algorithm uses.\n    */\n    function md5_cmn(q, a, b, x, s, t) {\n        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);\n    }\n    function md5_ff(a, b, c, d, x, s, t) {\n        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);\n    }\n    function md5_gg(a, b, c, d, x, s, t) {\n        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);\n    }\n    function md5_hh(a, b, c, d, x, s, t) {\n        return md5_cmn(b ^ c ^ d, a, b, x, s, t);\n    }\n    function md5_ii(a, b, c, d, x, s, t) {\n        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);\n    }\n    /*\n    * Calculate the MD5 of an array of little-endian words, and a bit length.\n    */\n    function binl_md5(x, len) {\n        /* append padding */\n        x[len >> 5] |= 0x80 << ((len) % 32);\n        x[(((len + 64) >>> 9) << 4) + 14] = len;\n        var i, olda, oldb, oldc, oldd,\n            a =  1732584193,\n            b = -271733879,\n            c = -1732584194,\n            d =  271733878;\n        for (i = 0; i < x.length; i += 16) {\n            olda = a;\n            oldb = b;\n            oldc = c;\n            oldd = d;\n            a = md5_ff(a, b, c, d, x[i],       7, -680876936);\n            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);\n            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);\n            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);\n            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);\n            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);\n            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);\n            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);\n            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);\n            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);\n            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);\n            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);\n            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);\n            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);\n            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);\n            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);\n            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);\n            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);\n            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);\n            b = md5_gg(b, c, d, a, x[i],      20, -373897302);\n            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);\n            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);\n            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);\n            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);\n            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);\n            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);\n            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);\n            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);\n            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);\n            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);\n            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);\n            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);\n            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);\n            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);\n            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);\n            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);\n            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);\n            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);\n            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);\n            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);\n            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);\n            d = md5_hh(d, a, b, c, x[i],      11, -358537222);\n            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);\n            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);\n            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);\n            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);\n            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);\n            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);\n            a = md5_ii(a, b, c, d, x[i],       6, -198630844);\n            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);\n            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);\n            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);\n            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);\n            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);\n            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);\n            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);\n            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);\n            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);\n            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);\n            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);\n            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);\n            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);\n            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);\n            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);\n            a = safe_add(a, olda);\n            b = safe_add(b, oldb);\n            c = safe_add(c, oldc);\n            d = safe_add(d, oldd);\n        }\n        return [a, b, c, d];\n    }\n    /*\n    * Convert an array of little-endian words to a string\n    */\n    function binl2rstr(input) {\n        var i,\n            output = '';\n        for (i = 0; i < input.length * 32; i += 8) {\n            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);\n        }\n        return output;\n    }\n    /*\n    * Convert a raw string to an array of little-endian words\n    * Characters >255 have their high-byte silently ignored.\n    */\n    function rstr2binl(input) {\n        var i,\n            output = [];\n        output[(input.length >> 2) - 1] = undefined;\n        for (i = 0; i < output.length; i += 1) {\n            output[i] = 0;\n        }\n        for (i = 0; i < input.length * 8; i += 8) {\n            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);\n        }\n        return output;\n    }\n    /*\n    * Calculate the MD5 of a raw string\n    */\n    function rstr_md5(s) {\n        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));\n    }\n    /*\n    * Calculate the HMAC-MD5, of a key and some data (raw strings)\n    */\n    function rstr_hmac_md5(key, data) {\n        var i,\n            bkey = rstr2binl(key),\n            ipad = [],\n            opad = [],\n            hash;\n        ipad[15] = opad[15] = undefined;                        \n        if (bkey.length > 16) {\n            bkey = binl_md5(bkey, key.length * 8);\n        }\n        for (i = 0; i < 16; i += 1) {\n            ipad[i] = bkey[i] ^ 0x36363636;\n            opad[i] = bkey[i] ^ 0x5C5C5C5C;\n        }\n        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);\n        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));\n    }\n    /*\n    * Convert a raw string to a hex string\n    */\n    function rstr2hex(input) {\n        var hex_tab = '0123456789abcdef',\n            output = '',\n            x,\n            i;\n        for (i = 0; i < input.length; i += 1) {\n            x = input.charCodeAt(i);\n            output += hex_tab.charAt((x >>> 4) & 0x0F) +\n                hex_tab.charAt(x & 0x0F);\n        }\n        return output;\n    }\n    /*\n    * Encode a string as utf-8\n    */\n    function str2rstr_utf8(input) {\n        return unescape(encodeURIComponent(input));\n    }\n    /*\n    * Take string arguments and return either raw or hex encoded strings\n    */\n    function raw_md5(s) {\n        return rstr_md5(str2rstr_utf8(s));\n    }\n    function hex_md5(s) {\n        return rstr2hex(raw_md5(s));\n    }\n    function raw_hmac_md5(k, d) {\n        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));\n    }\n    function hex_hmac_md5(k, d) {\n        return rstr2hex(raw_hmac_md5(k, d));\n    }\n    \n    $.md5 = function (string, key, raw) {\n        if (!key) {\n            if (!raw) {\n                return hex_md5(string);\n            } else {\n                return raw_md5(string);\n            }\n        }\n        if (!raw) {\n            return hex_hmac_md5(key, string);\n        } else {\n            return raw_hmac_md5(key, string);\n        }\n    };\n    \n}(typeof jQuery === 'function' ? jQuery : this));\n/**\n* Convert From/To Binary/Decimal/Hexadecimal in JavaScript\n* https://gist.github.com/faisalman\n*\n* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>\n* Licensed under The MIT License\n* http://www.opensource.org/licenses/mit-license\n*/\n(function(){\n    var ConvertBase = function (num) {\n        return {\n            from : function (baseFrom) {\n                return {\n                    to : function (baseTo) {\n                        return parseInt(num, baseFrom).toString(baseTo);\n                    }\n                };\n            }\n        };\n    };\n        \n    // binary to decimal\n    ConvertBase.bin2dec = function (num) {\n        return ConvertBase(num).from(2).to(10);\n    };\n    \n    // binary to hexadecimal\n    ConvertBase.bin2hex = function (num) {\n        return ConvertBase(num).from(2).to(16);\n    };\n    \n    // decimal to binary\n    ConvertBase.dec2bin = function (num) {\n        return ConvertBase(num).from(10).to(2);\n    };\n    \n    // decimal to hexadecimal\n    ConvertBase.dec2hex = function (num) {\n        return ConvertBase(num).from(10).to(16);\n    };\n    \n    // hexadecimal to binary\n    ConvertBase.hex2bin = function (num) {\n        return ConvertBase(num).from(16).to(2);\n    };\n    \n    // hexadecimal to decimal\n    ConvertBase.hex2dec = function (num) {\n        return ConvertBase(num).from(16).to(10);\n    };\n    \n    this.ConvertBase = ConvertBase;\n    \n})(this);\n\nfunction hashUsername(group_name, group_count) {\n   var username = JSON.parse(jQuery('#user-metadata').text() || {}).username,\n         hash = $.md5(group_name + username),\n\u2002       binary = hash.replace(/0|1|2|3|4|5|6|7/g, '0').replace(/8|9|a|b|c|d|e|f/g, '1'),\n\u2002\u2002     group =  parseInt(binary, 2) % group_count;\n        if (group === 1) {\n           return true;\n        }\n        return false;\n}\n\nvar metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n    audienceBool = hashUsername('cgv3mobile', 3),\n    username = metadata.username,\n    courseId = metadata.course_id;\naudienceBool;", "type": "code", "name": null, "match": null}]]], "id": "11331990466", "name": "Content Gating VMobile Treatment"}, {"conditions": ["and", ["or", ["or", {"value": "(function ($) {\n    'use strict';\n    /*\n    * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n    * to work around bugs in some JS interpreters.\n    */\n    function safe_add(x, y) {\n        var lsw = (x & 0xFFFF) + (y & 0xFFFF),\n            msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n        return (msw << 16) | (lsw & 0xFFFF);\n    }\n    /*\n    * Bitwise rotate a 32-bit number to the left.\n    */\n    function bit_rol(num, cnt) {\n        return (num << cnt) | (num >>> (32 - cnt));\n    }\n    /*\n    * These functions implement the four basic operations the algorithm uses.\n    */\n    function md5_cmn(q, a, b, x, s, t) {\n        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);\n    }\n    function md5_ff(a, b, c, d, x, s, t) {\n        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);\n    }\n    function md5_gg(a, b, c, d, x, s, t) {\n        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);\n    }\n    function md5_hh(a, b, c, d, x, s, t) {\n        return md5_cmn(b ^ c ^ d, a, b, x, s, t);\n    }\n    function md5_ii(a, b, c, d, x, s, t) {\n        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);\n    }\n    /*\n    * Calculate the MD5 of an array of little-endian words, and a bit length.\n    */\n    function binl_md5(x, len) {\n        /* append padding */\n        x[len >> 5] |= 0x80 << ((len) % 32);\n        x[(((len + 64) >>> 9) << 4) + 14] = len;\n        var i, olda, oldb, oldc, oldd,\n            a =  1732584193,\n            b = -271733879,\n            c = -1732584194,\n            d =  271733878;\n        for (i = 0; i < x.length; i += 16) {\n            olda = a;\n            oldb = b;\n            oldc = c;\n            oldd = d;\n            a = md5_ff(a, b, c, d, x[i],       7, -680876936);\n            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);\n            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);\n            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);\n            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);\n            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);\n            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);\n            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);\n            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);\n            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);\n            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);\n            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);\n            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);\n            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);\n            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);\n            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);\n            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);\n            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);\n            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);\n            b = md5_gg(b, c, d, a, x[i],      20, -373897302);\n            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);\n            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);\n            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);\n            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);\n            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);\n            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);\n            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);\n            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);\n            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);\n            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);\n            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);\n            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);\n            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);\n            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);\n            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);\n            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);\n            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);\n            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);\n            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);\n            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);\n            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);\n            d = md5_hh(d, a, b, c, x[i],      11, -358537222);\n            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);\n            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);\n            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);\n            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);\n            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);\n            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);\n            a = md5_ii(a, b, c, d, x[i],       6, -198630844);\n            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);\n            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);\n            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);\n            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);\n            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);\n            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);\n            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);\n            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);\n            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);\n            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);\n            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);\n            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);\n            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);\n            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);\n            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);\n            a = safe_add(a, olda);\n            b = safe_add(b, oldb);\n            c = safe_add(c, oldc);\n            d = safe_add(d, oldd);\n        }\n        return [a, b, c, d];\n    }\n    /*\n    * Convert an array of little-endian words to a string\n    */\n    function binl2rstr(input) {\n        var i,\n            output = '';\n        for (i = 0; i < input.length * 32; i += 8) {\n            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);\n        }\n        return output;\n    }\n    /*\n    * Convert a raw string to an array of little-endian words\n    * Characters >255 have their high-byte silently ignored.\n    */\n    function rstr2binl(input) {\n        var i,\n            output = [];\n        output[(input.length >> 2) - 1] = undefined;\n        for (i = 0; i < output.length; i += 1) {\n            output[i] = 0;\n        }\n        for (i = 0; i < input.length * 8; i += 8) {\n            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);\n        }\n        return output;\n    }\n    /*\n    * Calculate the MD5 of a raw string\n    */\n    function rstr_md5(s) {\n        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));\n    }\n    /*\n    * Calculate the HMAC-MD5, of a key and some data (raw strings)\n    */\n    function rstr_hmac_md5(key, data) {\n        var i,\n            bkey = rstr2binl(key),\n            ipad = [],\n            opad = [],\n            hash;\n        ipad[15] = opad[15] = undefined;                        \n        if (bkey.length > 16) {\n            bkey = binl_md5(bkey, key.length * 8);\n        }\n        for (i = 0; i < 16; i += 1) {\n            ipad[i] = bkey[i] ^ 0x36363636;\n            opad[i] = bkey[i] ^ 0x5C5C5C5C;\n        }\n        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);\n        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));\n    }\n    /*\n    * Convert a raw string to a hex string\n    */\n    function rstr2hex(input) {\n        var hex_tab = '0123456789abcdef',\n            output = '',\n            x,\n            i;\n        for (i = 0; i < input.length; i += 1) {\n            x = input.charCodeAt(i);\n            output += hex_tab.charAt((x >>> 4) & 0x0F) +\n                hex_tab.charAt(x & 0x0F);\n        }\n        return output;\n    }\n    /*\n    * Encode a string as utf-8\n    */\n    function str2rstr_utf8(input) {\n        return unescape(encodeURIComponent(input));\n    }\n    /*\n    * Take string arguments and return either raw or hex encoded strings\n    */\n    function raw_md5(s) {\n        return rstr_md5(str2rstr_utf8(s));\n    }\n    function hex_md5(s) {\n        return rstr2hex(raw_md5(s));\n    }\n    function raw_hmac_md5(k, d) {\n        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));\n    }\n    function hex_hmac_md5(k, d) {\n        return rstr2hex(raw_hmac_md5(k, d));\n    }\n    \n    $.md5 = function (string, key, raw) {\n        if (!key) {\n            if (!raw) {\n                return hex_md5(string);\n            } else {\n                return raw_md5(string);\n            }\n        }\n        if (!raw) {\n            return hex_hmac_md5(key, string);\n        } else {\n            return raw_hmac_md5(key, string);\n        }\n    };\n    \n}(typeof jQuery === 'function' ? jQuery : this));\n/**\n* Convert From/To Binary/Decimal/Hexadecimal in JavaScript\n* https://gist.github.com/faisalman\n*\n* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>\n* Licensed under The MIT License\n* http://www.opensource.org/licenses/mit-license\n*/\n(function(){\n    var ConvertBase = function (num) {\n        return {\n            from : function (baseFrom) {\n                return {\n                    to : function (baseTo) {\n                        return parseInt(num, baseFrom).toString(baseTo);\n                    }\n                };\n            }\n        };\n    };\n        \n    // binary to decimal\n    ConvertBase.bin2dec = function (num) {\n        return ConvertBase(num).from(2).to(10);\n    };\n    \n    // binary to hexadecimal\n    ConvertBase.bin2hex = function (num) {\n        return ConvertBase(num).from(2).to(16);\n    };\n    \n    // decimal to binary\n    ConvertBase.dec2bin = function (num) {\n        return ConvertBase(num).from(10).to(2);\n    };\n    \n    // decimal to hexadecimal\n    ConvertBase.dec2hex = function (num) {\n        return ConvertBase(num).from(10).to(16);\n    };\n    \n    // hexadecimal to binary\n    ConvertBase.hex2bin = function (num) {\n        return ConvertBase(num).from(16).to(2);\n    };\n    \n    // hexadecimal to decimal\n    ConvertBase.hex2dec = function (num) {\n        return ConvertBase(num).from(16).to(10);\n    };\n    \n    this.ConvertBase = ConvertBase;\n    \n})(this);\n\nfunction hashUsername(group_name, group_count) {\n   var username = JSON.parse(jQuery('#user-metadata').text() || {}).username,\n         hash = $.md5(group_name + username),\n\u2002       binary = hash.replace(/0|1|2|3|4|5|6|7/g, '0').replace(/8|9|a|b|c|d|e|f/g, '1'),\n\u2002\u2002     group =  parseInt(binary, 2) % group_count;\n        if (group === 0) {\n           return true;\n        }\n        return false;\n}\n\nvar metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n    audienceBool = hashUsername('cgv3mobile', 3),\n    username = metadata.username,\n    courseId = metadata.course_id;\naudienceBool;", "type": "code", "name": null, "match": null}]]], "id": "11341990650", "name": "Content Gating VMobile Treatment With Mobile"}, {"conditions": ["and", ["or", ["or", {"value": "(function ($) {\n    'use strict';\n    /*\n    * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n    * to work around bugs in some JS interpreters.\n    */\n    function safe_add(x, y) {\n        var lsw = (x & 0xFFFF) + (y & 0xFFFF),\n            msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n        return (msw << 16) | (lsw & 0xFFFF);\n    }\n    /*\n    * Bitwise rotate a 32-bit number to the left.\n    */\n    function bit_rol(num, cnt) {\n        return (num << cnt) | (num >>> (32 - cnt));\n    }\n    /*\n    * These functions implement the four basic operations the algorithm uses.\n    */\n    function md5_cmn(q, a, b, x, s, t) {\n        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);\n    }\n    function md5_ff(a, b, c, d, x, s, t) {\n        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);\n    }\n    function md5_gg(a, b, c, d, x, s, t) {\n        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);\n    }\n    function md5_hh(a, b, c, d, x, s, t) {\n        return md5_cmn(b ^ c ^ d, a, b, x, s, t);\n    }\n    function md5_ii(a, b, c, d, x, s, t) {\n        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);\n    }\n    /*\n    * Calculate the MD5 of an array of little-endian words, and a bit length.\n    */\n    function binl_md5(x, len) {\n        /* append padding */\n        x[len >> 5] |= 0x80 << ((len) % 32);\n        x[(((len + 64) >>> 9) << 4) + 14] = len;\n        var i, olda, oldb, oldc, oldd,\n            a =  1732584193,\n            b = -271733879,\n            c = -1732584194,\n            d =  271733878;\n        for (i = 0; i < x.length; i += 16) {\n            olda = a;\n            oldb = b;\n            oldc = c;\n            oldd = d;\n            a = md5_ff(a, b, c, d, x[i],       7, -680876936);\n            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);\n            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);\n            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);\n            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);\n            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);\n            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);\n            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);\n            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);\n            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);\n            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);\n            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);\n            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);\n            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);\n            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);\n            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);\n            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);\n            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);\n            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);\n            b = md5_gg(b, c, d, a, x[i],      20, -373897302);\n            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);\n            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);\n            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);\n            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);\n            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);\n            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);\n            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);\n            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);\n            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);\n            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);\n            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);\n            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);\n            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);\n            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);\n            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);\n            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);\n            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);\n            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);\n            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);\n            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);\n            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);\n            d = md5_hh(d, a, b, c, x[i],      11, -358537222);\n            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);\n            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);\n            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);\n            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);\n            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);\n            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);\n            a = md5_ii(a, b, c, d, x[i],       6, -198630844);\n            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);\n            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);\n            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);\n            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);\n            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);\n            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);\n            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);\n            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);\n            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);\n            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);\n            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);\n            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);\n            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);\n            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);\n            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);\n            a = safe_add(a, olda);\n            b = safe_add(b, oldb);\n            c = safe_add(c, oldc);\n            d = safe_add(d, oldd);\n        }\n        return [a, b, c, d];\n    }\n    /*\n    * Convert an array of little-endian words to a string\n    */\n    function binl2rstr(input) {\n        var i,\n            output = '';\n        for (i = 0; i < input.length * 32; i += 8) {\n            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);\n        }\n        return output;\n    }\n    /*\n    * Convert a raw string to an array of little-endian words\n    * Characters >255 have their high-byte silently ignored.\n    */\n    function rstr2binl(input) {\n        var i,\n            output = [];\n        output[(input.length >> 2) - 1] = undefined;\n        for (i = 0; i < output.length; i += 1) {\n            output[i] = 0;\n        }\n        for (i = 0; i < input.length * 8; i += 8) {\n            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);\n        }\n        return output;\n    }\n    /*\n    * Calculate the MD5 of a raw string\n    */\n    function rstr_md5(s) {\n        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));\n    }\n    /*\n    * Calculate the HMAC-MD5, of a key and some data (raw strings)\n    */\n    function rstr_hmac_md5(key, data) {\n        var i,\n            bkey = rstr2binl(key),\n            ipad = [],\n            opad = [],\n            hash;\n        ipad[15] = opad[15] = undefined;                        \n        if (bkey.length > 16) {\n            bkey = binl_md5(bkey, key.length * 8);\n        }\n        for (i = 0; i < 16; i += 1) {\n            ipad[i] = bkey[i] ^ 0x36363636;\n            opad[i] = bkey[i] ^ 0x5C5C5C5C;\n        }\n        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);\n        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));\n    }\n    /*\n    * Convert a raw string to a hex string\n    */\n    function rstr2hex(input) {\n        var hex_tab = '0123456789abcdef',\n            output = '',\n            x,\n            i;\n        for (i = 0; i < input.length; i += 1) {\n            x = input.charCodeAt(i);\n            output += hex_tab.charAt((x >>> 4) & 0x0F) +\n                hex_tab.charAt(x & 0x0F);\n        }\n        return output;\n    }\n    /*\n    * Encode a string as utf-8\n    */\n    function str2rstr_utf8(input) {\n        return unescape(encodeURIComponent(input));\n    }\n    /*\n    * Take string arguments and return either raw or hex encoded strings\n    */\n    function raw_md5(s) {\n        return rstr_md5(str2rstr_utf8(s));\n    }\n    function hex_md5(s) {\n        return rstr2hex(raw_md5(s));\n    }\n    function raw_hmac_md5(k, d) {\n        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));\n    }\n    function hex_hmac_md5(k, d) {\n        return rstr2hex(raw_hmac_md5(k, d));\n    }\n    \n    $.md5 = function (string, key, raw) {\n        if (!key) {\n            if (!raw) {\n                return hex_md5(string);\n            } else {\n                return raw_md5(string);\n            }\n        }\n        if (!raw) {\n            return hex_hmac_md5(key, string);\n        } else {\n            return raw_hmac_md5(key, string);\n        }\n    };\n    \n}(typeof jQuery === 'function' ? jQuery : this));\n/**\n* Convert From/To Binary/Decimal/Hexadecimal in JavaScript\n* https://gist.github.com/faisalman\n*\n* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>\n* Licensed under The MIT License\n* http://www.opensource.org/licenses/mit-license\n*/\n(function(){\n    var ConvertBase = function (num) {\n        return {\n            from : function (baseFrom) {\n                return {\n                    to : function (baseTo) {\n                        return parseInt(num, baseFrom).toString(baseTo);\n                    }\n                };\n            }\n        };\n    };\n        \n    // binary to decimal\n    ConvertBase.bin2dec = function (num) {\n        return ConvertBase(num).from(2).to(10);\n    };\n    \n    // binary to hexadecimal\n    ConvertBase.bin2hex = function (num) {\n        return ConvertBase(num).from(2).to(16);\n    };\n    \n    // decimal to binary\n    ConvertBase.dec2bin = function (num) {\n        return ConvertBase(num).from(10).to(2);\n    };\n    \n    // decimal to hexadecimal\n    ConvertBase.dec2hex = function (num) {\n        return ConvertBase(num).from(10).to(16);\n    };\n    \n    // hexadecimal to binary\n    ConvertBase.hex2bin = function (num) {\n        return ConvertBase(num).from(16).to(2);\n    };\n    \n    // hexadecimal to decimal\n    ConvertBase.hex2dec = function (num) {\n        return ConvertBase(num).from(16).to(10);\n    };\n    \n    this.ConvertBase = ConvertBase;\n    \n})(this);\n\nfunction hashUsername(group_name, group_count) {\n   var username = JSON.parse(jQuery('#user-metadata').text() || {}).username,\n         hash = $.md5(group_name + username),\n\u2002       binary = hash.replace(/0|1|2|3|4|5|6|7/g, '0').replace(/8|9|a|b|c|d|e|f/g, '1'),\n\u2002\u2002     group =  parseInt(binary, 2) % group_count;\n        if (group === 2) {\n           return true;\n        }\n        return false;\n}\n\nvar metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n    audienceBool = hashUsername('cgv3mobile', 3),\n    username = metadata.username,\n    courseId = metadata.course_id;\naudienceBool;", "type": "code", "name": null, "match": null}]]], "id": "11370330714", "name": "Content Gating VMobile Control"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n\ttwoVariationsDatetime = new Date('2018-10-10T00:00:00+00:00'),\n\tenrollmentDatetime = new Date(metadata.enrollment_time),\n\taudienceGroup, activateAudience;\nif (enrollmentDatetime < twoVariationsDatetime) {\n\taudienceGroup = window.hashUsername('cgvexpiration', 5);\n\tactivateAudience = audienceGroup === 4;\n} else {\n\taudienceGroup = window.hashUsername('cgvexpiration', 2);\n\tactivateAudience = audienceGroup === 1;\n}\nactivateAudience;", "type": "code", "name": null, "match": null}]]], "id": "11396000075", "name": "Content Gating VExpiration Eight Weeks"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n\ttwoVariationsDatetime = new Date('2018-10-10T00:00:00+00:00'),\n\tenrollmentDatetime = new Date(metadata.enrollment_time),\n    audienceGroup = window.hashUsername('cgvexpiration', 5),\n    activateAudience;\nif (enrollmentDatetime < twoVariationsDatetime) {\n\tactivateAudience = audienceGroup === 2;\n} else {\n\tactivateAudience = false;\n}\nactivateAudience;", "type": "code", "name": null, "match": null}]]], "id": "11406950100", "name": "Content Gating VExpiration Graded Content Only"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n\ttwoVariationsDatetime = new Date('2018-10-10T00:00:00+00:00'),\n\tenrollmentDatetime = new Date(metadata.enrollment_time),\n    audienceGroup = window.hashUsername('cgvexpiration', 5),\n    activateAudience;\nif (enrollmentDatetime < twoVariationsDatetime) {\n\tactivateAudience = audienceGroup === 1;\n} else {\n\tactivateAudience = false;\n}\nactivateAudience;", "type": "code", "name": null, "match": null}]]], "id": "11408740108", "name": "Content Gating VExpiration Treatment"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n\ttwoVariationsDatetime = new Date('2018-10-10T00:00:00+00:00'),\n\tenrollmentDatetime = new Date(metadata.enrollment_time),\n    audienceGroup = window.hashUsername('cgvexpiration', 5),\n    activateAudience;\nif (enrollmentDatetime < twoVariationsDatetime) {\n\tactivateAudience = audienceGroup === 3;\n} else {\n\tactivateAudience = false;\n}\nactivateAudience;", "type": "code", "name": null, "match": null}]]], "id": "11410880020", "name": "Content Gating VExpiration Expiration Only"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "discountBannerRev378", "match": "exists"}]]]], "id": "11413366106", "name": "Device has not seen new user discount test"}, {"conditions": ["and", ["or", ["or", {"value": "var metadata = (JSON.parse(jQuery('#user-metadata').text() || '{}') || {}),\n        twoVariationsDatetime = new Date('2018-10-10T00:00:00+00:00'),\n\tenrollmentDatetime = new Date(metadata.enrollment_time),\n\taudienceGroup, activateAudience;\nif (enrollmentDatetime < twoVariationsDatetime) {\n\taudienceGroup = window.hashUsername('cgvexpiration', 5);\n} else {\n\taudienceGroup = window.hashUsername('cgvexpiration', 2);\n}\nactivateAudience = audienceGroup === 0;\nactivateAudience;", "type": "code", "name": null, "match": null}]]], "id": "11428220027", "name": "Content Gating VExpiration Control"}], "integrationSettings": [], "anonymizeIP": false, "projectJS": function(){window.contentGatingConfigV3 = {
  "deactivationTimes": {
      "course-v1:MichiganX+SW560x+2T2018": "2018-08-30T17:35:00+00:00",
      "course-v1:MichiganX+LeadEd504x+2T2018": "2018-08-30T17:35:00+00:00",
      "course-v1:ANUx+ANU-ASTRO3x+1T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+EE-100Bx+T1_2016": "2018-08-24T17:00:00+00:00",
      "course-v1:ANUx+ANU-ASTRO1x+2T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:ANUx+ANU-ASTRO2x+2T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:ANUx+ANU-ASTRO4x+2T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+30640014x+1T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:UTokyoX+UTokyo003x+1T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+Katz1.1x+2T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:UTokyoX+UTokyo001x+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:UTokyoX+UTokyo002x+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+FIN401x+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+FIN404x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+PHYS-209-ENx+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:AdelaideX+Wine101x+2T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:SmithsonianX+POPX1.5x+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:ANUx+EBM05x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:ANUx+EBM06x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:SmithsonianX+ED1.1x+3T2016": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+ITSx+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+ROBO1x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+ROBO2x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+ROBO3x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+ROBO4x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+00612642x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+TM01x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+SoftEng1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+HtC1x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:LinuxFoundationX+LFS101x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+Climate1x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+Innov4DevX+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+SD1x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+SD2x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+SD3x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+SD4x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:AdelaideX+Project101x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.1x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.2x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.3x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.4x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.5x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+PSYC.6x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+FBSEx+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+EcodesignX+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.MKTx+2T2017SP": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+UrbanInfrastructuresX+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+SmartCitiesX+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:LinuxFoundationX+LFS158x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:HKUSTx+COMP102.1x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:HKUSTx+COMP102.2x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:HKUSTx+COMP107x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:W3Cx+HTML5.2x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:LinuxFoundationX+LFS171x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+memsX+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB606x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB608x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB605x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB607x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+COMM120x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+COMM420x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UBCx+COMM421x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:GTx+ICT100x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+90640012X+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:W3Cx+JS.0x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+DiscreteChoiceX+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:RICEx+PHYS101.1x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.STRATx+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EdinburghX+MKTG101x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+SP2PennX+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:NYIF+MBSx+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+PlasmaApplicationX+1T_2018": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+PlasmaIntroductionX+1T_2018": "2018-08-24T17:00:00+00:00",
      "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+ENGY2x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TokyoTechX+EE101Jx+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:RITx+GAME104x+3T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:RITx+SKILLS105x+3T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:KyotoUx+003x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:RiceX+PHYS102.1x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:NYIF+CM1.x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:EdinburghX+COOPSx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+IPLAW2x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+IPLAW1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:RITx+SKILLS101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:ETSx+TOEFLx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UTokyoX+UTokyo006x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UPValenciaX+ISC101.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UPValenciaX+ISC101.5x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:RiceX+ELEC301.2x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:RICEx+ELEC301.1x+3T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+Hypers301x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+Crime101x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:AdelaideX+MusonicX+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+00690342X+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+60250101+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:ETHx+ASD.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+MEDIAWARx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+META101x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+CS101.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+CS101.2x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+CS213.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+CS213.2x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+CS213.3x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MEPhIx+MEPHI012x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:AWS+OTP-AWSD2+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:AWS+OTP-AWSD1+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:AWS+OTP-AWSD3+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+MKT01x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+ArtsAdminX+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UPValenciaX+DC201x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:KyotoUx+005x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:NYIF+SCF1.x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.ETAx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+BIOIMG101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IsraelX+ISLAM101x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:EPFLx+MARKETSx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UCSanDiegoX+CSE165x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:FullbridgeX+Career5x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UPValenciaX+BSP101x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:LinuxFoundationX+LFS163x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:HKUx+HKU_08x+1T2030": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+IS110x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+ST250x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+MK210x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+OB102x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+QM101.1x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:LinuxFoundationX+LFS158x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+SKANI101x+1T2018a": "2018-08-24T17:00:00+00:00",
      "course-v1:SmithsonianX+ENVR1.1x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:EdinburghX+NCycleX+2T2017": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.FINx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.ACCx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+ECON01x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+BPET.STATx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:GeorgetownX+PHLX-101x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+DS120x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IsraelX+0109434x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IsraelX+KAB1010x+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:ETHx+AMRx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+InjuryPreventionX+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:ETHx+AMRx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:KyotoUx+010x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MandarinX+MX503x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:DelftX+EX101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:DelftX+EX102x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TokyoTechX+Make101.1Jx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IITBombayX+SKANI102x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MandarinX+MX901x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:AdelaideX+RiskX+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TokyoTechX+Bio150x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IRTIx+IFCM101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:ImperialX+CTT102+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+Carbon101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+PSYC1030.1x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+PSYC1030.2x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+PSYC1030.3x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+PSYC1030.4x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IIMBx+HR101x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:HKPolyUx+I4.0x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+SEGMENTx+1T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:W3Cx+HTML5.0x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+MOB01x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB602x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:IBM+CB0103EN+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UQx+TOURISMx+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:BabsonX+QTM01x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:PennX+Katz1.2x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:TsinghuaX+80515182X+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:WasedaX+JBM111x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+PM-IT-001x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+PM-IT-002x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:FedericaX+Fed.X17+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UCSanDiegoX+BINF180.1+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+BNET001+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+BNET002+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+BNET003+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UPValenciaX+ISA201x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:FedericaX+Fed.X-21+2T2018a": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+UX2+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MichiganX+PUBLIB603x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+CYB003x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+CYB004x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+CYB001x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:UWashingtonX+CYB002x+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MITx_PRO+SRRDx1+2T2018": "2018-08-24T17:00:00+00:00",
      "course-v1:MITx_PRO+SRRDx2+2T2018": "2018-08-21T19:35:00+00:00"
    },
  "certSkus": {
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "AC0DA9B",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "1CE7A74",
    "course-v1:EPFLx+EE-100Bx+T1_2016": "3AA8AB1",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "213A29B",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "0D99E30",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "1EF0043",
    "course-v1:TsinghuaX+30640014x+1T2016": "4517189",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "EAE8E99",
    "course-v1:PennX+Katz1.1x+2T2016": "38FFD57",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "CA59F18",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "787581F",
    "course-v1:MichiganX+FIN401x+3T2016": "C440F83",
    "course-v1:MichiganX+FIN404x+1T2017": "D78F11C",
    "course-v1:EPFLx+PHYS-209-ENx+3T2016": "9140A32",
    "course-v1:AdelaideX+Wine101x+2T2016": "D946DD7",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "339EDD2",
    "course-v1:ANUx+EBM05x+3T2017": "DFDB305",
    "course-v1:ANUx+EBM06x+3T2017": "292331B",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "EA385D3",
    "course-v1:UBCx+ITSx+1T2017": "135F2CD",
    "course-v1:PennX+ROBO1x+1T2017": "29D313F",
    "course-v1:PennX+ROBO2x+2T2017": "B668B4C",
    "course-v1:PennX+ROBO3x+2T2017": "BE0E94C",
    "course-v1:PennX+ROBO4x+3T2017": "2F28F08",
    "course-v1:TsinghuaX+00612642x+1T2017": "D982B2E",
    "course-v1:TsinghuaX+TM01x+2T2017": "3624993",
    "course-v1:UBCx+SoftEng1x+1T2018": "A12DC80",
    "course-v1:UBCx+HtC1x+2T2017": "F44A398",
    "course-v1:LinuxFoundationX+LFS101x+1T2017": "774B17E",
    "course-v1:UBCx+Climate1x+2T2017": "7175FB2",
    "course-v1:EPFLx+Innov4DevX+1T2017": "2E25A59",
    "course-v1:PennX+SD1x+2T2017": "4D9F54B",
    "course-v1:PennX+SD2x+2T2017": "C6663FB",
    "course-v1:PennX+SD3x+2T2017": "68CA5D2",
    "course-v1:PennX+SD4x+2T2017": "0D1AB86",
    "course-v1:AdelaideX+Project101x+1T2017": "3606BB9",
    "course-v1:UBCx+PSYC.1x+2T2017": "F9FF495",
    "course-v1:UBCx+PSYC.2x+2T2017": "354E69A",
    "course-v1:UBCx+PSYC.3x+2T2017": "BD68A99",
    "course-v1:UBCx+PSYC.4x+2T2017": "C750BE3",
    "course-v1:UBCx+PSYC.5x+2T2017": "5D17798",
    "course-v1:UBCx+PSYC.6x+2T2017": "257CF7C",
    "course-v1:UBCx+FBSEx+2T2017": "D3BEE48",
    "course-v1:UBCx+EcodesignX+2T2017": "61F996B",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "B00C42F",
    "course-v1:EPFLx+UrbanInfrastructuresX+2T2017": "0994EFE",
    "course-v1:EPFLx+SmartCitiesX+2T2017": "ECDFBA2",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "7C212B0",
    "course-v1:HKUSTx+COMP102.1x+2T2018": "1C3290D",
    "course-v1:HKUSTx+COMP102.2x+2T2018": "B89711D",
    "course-v1:HKUSTx+COMP107x+2T2018": "0EB5561",
    "course-v1:W3Cx+HTML5.2x+3T2017": "06E184B",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "D09606A",
    "course-v1:EPFLx+memsX+3T2017": "1D38148",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "8CFA8F3",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "E4735A8",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "DCFE13A",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "4785720",
    "course-v1:UBCx+COMM120x+3T2017": "8AACF31",
    "course-v1:UBCx+COMM420x+3T2017": "FE0ACF6",
    "course-v1:UBCx+COMM421x+3T2017": "1BC2F09",
    "course-v1:GTx+ICT100x+3T2017": "F201CAD",
    "course-v1:TsinghuaX+90640012X+3T2017": "A14856C",
    "course-v1:W3Cx+JS.0x+3T2017": "C211DC7",
    "course-v1:EPFLx+DiscreteChoiceX+3T2017": "52392DE",
    "course-v1:RICEx+PHYS101.1x+2T2017": "ED92D32",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "6B43D20",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "17A70B8",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "BA7898E",
    "course-v1:EdinburghX+MKTG101x+3T2017": "94C8D7F",
    "course-v1:PennX+SP2PennX+3T2017": "F838A79",
    "course-v1:NYIF+MBSx+3T2017": "AAEAA7E",
    "course-v1:EPFLx+PlasmaApplicationX+1T_2018": "F6C2267",
    "course-v1:EPFLx+PlasmaIntroductionX+1T_2018": "6069160",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "3711858",
    "course-v1:UQx+ENGY2x+1T2018": "95B776E",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "CDDA99E",
    "course-v1:RITx+GAME104x+3T2018": "10F57E8",
    "course-v1:RITx+SKILLS105x+3T2018": "3A17BE4",
    "course-v1:KyotoUx+003x+3T2017": "9A45381",
    "course-v1:RiceX+PHYS102.1x+3T2017": "7E7DFAC",
    "course-v1:NYIF+CM1.x+3T2017": "510A98A",
    "course-v1:EdinburghX+COOPSx+1T2018": "177541A",
    "course-v1:PennX+IPLAW2x+1T2018": "21B09B8",
    "course-v1:PennX+IPLAW1x+1T2018": "4F80AAC",
    "course-v1:RITx+SKILLS101x+2T2018": "DE3E291",
    "course-v1:ETSx+TOEFLx+1T2018": "6AF26FA",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "36EE35D",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "9C0AF01",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "C68EB67",
    "course-v1:RiceX+ELEC301.2x+3T2017": "495985F",
    "course-v1:RICEx+ELEC301.1x+3T2017": "D7EB532",
    "course-v1:UQx+Hypers301x+1T2018": "01B24A2",
    "course-v1:UQx+Crime101x+1T2018": "7359AC6",
    "course-v1:AdelaideX+MusonicX+1T2018": "52BA096",
    "course-v1:TsinghuaX+00690342X+1T2018": "FADFF2A",
    "course-v1:TsinghuaX+60250101+1T2018": "D584CB2",
    "course-v1:ETHx+ASD.1x+1T2018": "AC25579",
    "course-v1:UQx+MEDIAWARx+1T2018": "8B7A802",
    "course-v1:UQx+META101x+1T2018": "7047649",
    "course-v1:IITBombayX+CS101.1x+1T2018": "E3CDE15",
    "course-v1:IITBombayX+CS101.2x+1T2018": "165518B",
    "course-v1:IITBombayX+CS213.1x+1T2018": "332A076",
    "course-v1:IITBombayX+CS213.2x+1T2018": "8FBBC74",
    "course-v1:IITBombayX+CS213.3x+1T2018": "053F7EA",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "1F9BC12",
    "course-v1:AWS+OTP-AWSD2+1T2018": "06BE27F",
    "course-v1:AWS+OTP-AWSD1+1T2018": "1557ACD",
    "course-v1:AWS+OTP-AWSD3+1T2018": "3E38B3A",
    "course-v1:BabsonX+MKT01x+1T2018": "E6F42F8",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "A6CBDD5",
    "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "C8CE20C",
    "course-v1:UPValenciaX+DC201x+1T2018": "A9D9DC4",
    "course-v1:KyotoUx+005x+1T2018": "83BCF72",
    "course-v1:NYIF+SCF1.x+1T2018": "4D0DEC4",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "9036B39",
    "course-v1:UQx+BIOIMG101x+2T2018": "79D720A",
    "course-v1:IsraelX+ISLAM101x+1T2018": "8CAB6FB",
    "course-v1:EPFLx+MARKETSx+2T2018": "57780ED",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "8ED3F05",
    "course-v1:FullbridgeX+Career5x+1T2018": "8822FBA",
    "course-v1:UPValenciaX+BSP101x+1T2018": "0A96911",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "97F7CA1",
    "course-v1:HKUx+HKU_08x+1T2030": "C67E710",
    "course-v1:IIMBx+IS110x+2T2018": "43B9F9E",
    "course-v1:IIMBx+ST250x+2T2018": "5B7925B",
    "course-v1:IIMBx+MK210x+2T2018": "06045F9",
    "course-v1:IIMBx+OB102x+2T2018": "8F29B74",
    "course-v1:IIMBx+QM101.1x+2T2018": "A5DD561",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "31B8A0D",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "5A0FAC3",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "417F28B",
    "course-v1:EdinburghX+NCycleX+2T2017": "4D13E11",
    "course-v1:BabsonX+BPET.FINx+2T2018": "7D93CAD",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "7DF27B6",
    "course-v1:BabsonX+ECON01x+2T2018": "A7B8EBF",
    "course-v1:BabsonX+BPET.STATx+2T2018": "DCEF3B0",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "68BA098",
    "course-v1:MichiganX+DS120x+2T2018": "36B579C",
    "course-v1:IsraelX+0109434x+1T2018": "0739CAC",
    "course-v1:IsraelX+KAB1010x+1T2018": "F3A4820",
    "course-v1:ETHx+AMRx+1T2018": "DC16E90",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "AB4512A",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "4336C4F",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "F23B171",
    "course-v1:ETHx+AMRx+2T2018": "750B45F",
    "course-v1:KyotoUx+010x+2T2018": "419D7A7",
    "course-v1:MandarinX+MX503x+2T2018": "21418BA",
    "course-v1:DelftX+EX101x+2T2018": "B68D835",
    "course-v1:DelftX+EX102x+2T2018": "1E009DA",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "EAFEDE2",
    "course-v1:IITBombayX+SKANI102x+2T2018": "5ED8E94",
    "course-v1:MandarinX+MX901x+2T2018": "61FA11F",
    "course-v1:AdelaideX+RiskX+2T2018": "9113A77",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2F18EAB",
    "course-v1:IRTIx+IFCM101x+2T2018": "43354AD",
    "course-v1:ImperialX+CTT102+2T2018": "DBA1AAA",
    "course-v1:UQx+Carbon101x+2T2018": "4099C34",
    "course-v1:UQx+PSYC1030.1x+2T2018": "3D23F56",
    "course-v1:UQx+PSYC1030.2x+2T2018": "FBDC513",
    "course-v1:UQx+PSYC1030.3x+2T2018": "40988D2",
    "course-v1:UQx+PSYC1030.4x+2T2018": "573703A",
    "course-v1:IIMBx+HR101x+2T2018": "548BA5F",
    "course-v1:HKPolyUx+I4.0x+2T2018": "43868CD",
    "course-v1:UQx+SEGMENTx+1T2018": "C9ECBC3",
    "course-v1:W3Cx+HTML5.0x+2T2018": "06BCB87",
    "course-v1:BabsonX+MOB01x+2T2018": "FA53B77",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "5AE465F",
    "course-v1:IBM+CB0103EN+2T2018": "9A55E36",
    "course-v1:UQx+TOURISMx+2T2018": "2A15728",
    "course-v1:BabsonX+QTM01x+2T2018": "3BC7BD2",
    "course-v1:PennX+Katz1.2x+2T2018": "063146F",
    "course-v1:TsinghuaX+80515182X+2T2018": "ACC9477",
    "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "A273335",
    "course-v1:WasedaX+JBM111x+2T2018": "EFDBE36",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "B43A09C",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "E10B3F0",
    "course-v1:FedericaX+Fed.X17+2T2018": "A1C8962",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "D446527",
    "course-v1:UWashingtonX+BNET001+2T2018": "F38099C",
    "course-v1:UWashingtonX+BNET002+2T2018": "58D6D72",
    "course-v1:UWashingtonX+BNET003+2T2018": "63A1458",
    "course-v1:UPValenciaX+ISA201x+2T2018": "F9B0445",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "F4C7EFD",
    "course-v1:MichiganX+UX2+2T2018": "B562B7A",
    "course-v1:MichiganX+LeadEd504x+2T2018": "51DBD7B",
    "course-v1:MichiganX+SW560x+2T2018": "F304DAA",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "CDB24BD",
    "course-v1:UWashingtonX+CYB003x+2T2018": "97F197E",
    "course-v1:UWashingtonX+CYB004x+2T2018": "DA7664A",
    "course-v1:UWashingtonX+CYB001x+2T2018": "739FD9B",
    "course-v1:UWashingtonX+CYB002x+2T2018": "5350D9D",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "10F8921",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "A7E1561"
  },
  "activationTimes": {
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+EE-100Bx+T1_2016": "2018-08-09T16:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+30640014x+1T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "2018-08-08T19:00:00+00:00",
    "course-v1:PennX+Katz1.1x+2T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "2018-08-08T19:00:00+00:00",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "2018-08-08T19:00:00+00:00",
    "course-v1:MichiganX+FIN401x+3T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+FIN404x+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+PHYS-209-ENx+3T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:AdelaideX+Wine101x+2T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:ANUx+EBM05x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:ANUx+EBM06x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "2018-08-09T16:00:00+00:00",
    "course-v1:UBCx+ITSx+1T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:PennX+ROBO1x+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+ROBO2x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+ROBO3x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+ROBO4x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+00612642x+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+TM01x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UBCx+SoftEng1x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+HtC1x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS101x+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UBCx+Climate1x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:EPFLx+Innov4DevX+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+SD1x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+SD2x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+SD3x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+SD4x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:AdelaideX+Project101x+1T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UBCx+PSYC.1x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+PSYC.2x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+PSYC.3x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+PSYC.4x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+PSYC.5x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+PSYC.6x+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+FBSEx+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+EcodesignX+2T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "2018-08-01T19:30:00+00:00",
    "course-v1:EPFLx+UrbanInfrastructuresX+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+SmartCitiesX+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:HKUSTx+COMP102.1x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:HKUSTx+COMP102.2x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:HKUSTx+COMP107x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:W3Cx+HTML5.2x+3T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+memsX+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UBCx+COMM120x+3T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+COMM420x+3T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:UBCx+COMM421x+3T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:GTx+ICT100x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+90640012X+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:W3Cx+JS.0x+3T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:EPFLx+DiscreteChoiceX+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:RICEx+PHYS101.1x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "2018-08-08T19:00:00+00:00",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "2018-08-02T19:30:00+00:05",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "2018-08-01T19:30:00+00:00",
    "course-v1:EdinburghX+MKTG101x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+SP2PennX+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:NYIF+MBSx+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+PlasmaApplicationX+1T_2018": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+PlasmaIntroductionX+1T_2018": "2018-08-09T16:00:00+00:00",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+ENGY2x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:RITx+GAME104x+3T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:RITx+SKILLS105x+3T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:KyotoUx+003x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:RiceX+PHYS102.1x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:NYIF+CM1.x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:EdinburghX+COOPSx+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+IPLAW2x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:PennX+IPLAW1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:RITx+SKILLS101x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:ETSx+TOEFLx+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:RiceX+ELEC301.2x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:RICEx+ELEC301.1x+3T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+Hypers301x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+Crime101x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:AdelaideX+MusonicX+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+00690342X+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+60250101+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:ETHx+ASD.1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+MEDIAWARx+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+META101x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:IITBombayX+CS101.1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+CS101.2x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+CS213.1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+CS213.2x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+CS213.3x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:AWS+OTP-AWSD2+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:AWS+OTP-AWSD1+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:AWS+OTP-AWSD3+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:BabsonX+MKT01x+1T2018": "2018-08-02T19:30:00+00:00",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UPValenciaX+DC201x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:KyotoUx+005x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:NYIF+SCF1.x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "2018-08-02T19:30:00+00:04",
    "course-v1:UQx+BIOIMG101x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:IsraelX+ISLAM101x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:EPFLx+MARKETSx+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:FullbridgeX+Career5x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UPValenciaX+BSP101x+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:HKUx+HKU_08x+1T2030": "2018-08-09T16:00:00+00:00",
    "course-v1:IIMBx+IS110x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IIMBx+ST250x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IIMBx+MK210x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IIMBx+OB102x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IIMBx+QM101.1x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "2018-08-09T16:00:00+00:00",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:EdinburghX+NCycleX+2T2017": "2018-08-09T16:00:00+00:00",
    "course-v1:BabsonX+BPET.FINx+2T2018": "2018-08-01T19:30:00+00:00",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "2018-08-01T19:30:00+00:00",
    "course-v1:BabsonX+ECON01x+2T2018": "2018-08-02T19:30:00+00:03",
    "course-v1:BabsonX+BPET.STATx+2T2018": "2018-08-01T17:30:00+00:00",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+DS120x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IsraelX+0109434x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IsraelX+KAB1010x+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:ETHx+AMRx+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "2018-08-02T19:30:00+00:07",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "2018-08-02T19:30:00+00:06",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:ETHx+AMRx+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:KyotoUx+010x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MandarinX+MX503x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:DelftX+EX101x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:DelftX+EX102x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IITBombayX+SKANI102x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MandarinX+MX901x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:AdelaideX+RiskX+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IRTIx+IFCM101x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:ImperialX+CTT102+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+Carbon101x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+PSYC1030.1x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+PSYC1030.2x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+PSYC1030.3x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UQx+PSYC1030.4x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:IIMBx+HR101x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:HKPolyUx+I4.0x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+SEGMENTx+1T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:W3Cx+HTML5.0x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:BabsonX+MOB01x+2T2018": "2018-08-02T19:30:00+00:02",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:IBM+CB0103EN+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UQx+TOURISMx+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:BabsonX+QTM01x+2T2018": "2018-08-02T19:30:00+00:01",
    "course-v1:PennX+Katz1.2x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:TsinghuaX+80515182X+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:WasedaX+JBM111x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:FedericaX+Fed.X17+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+BNET001+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+BNET002+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+BNET003+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UPValenciaX+ISA201x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+UX2+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+LeadEd504x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+SW560x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "2018-08-09T16:00:00+00:00",
    "course-v1:UWashingtonX+CYB003x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+CYB004x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+CYB001x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:UWashingtonX+CYB002x+2T2018": "2018-08-08T19:00:00+00:00",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "2018-08-21T19:35:00+00:00",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "2018-08-21T19:35:00+00:00"
  }
};

window.contentGatingConfigVMobile = {
  "deactivationTimes": {
    "course-v1:AdelaideX+MusonicX+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:AdelaideX+Project101x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:AdelaideX+RiskX+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:AdelaideX+Wine101x+2T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+EBM05x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:ANUx+EBM06x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:ASUx+DOGx003+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:ASUx+MAT117x+1T2016:": "2018-09-18T16:25:00+00:00",
    "course-v1:ASUx+MAT170x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:AWS+OTP-AWSD1+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:AWS+OTP-AWSD2+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:AWS+OTP-AWSD3+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.FINx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.STATx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+ECON01x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+MKT01x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+MOB01x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:BabsonX+QTM01x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "2018-09-18T16:25:00+00:00",
    "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:DelftX+EX101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:DelftX+EX102x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:EdinburghX+COOPSx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:EdinburghX+MKTG101x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:EdinburghX+NCycleX+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:ETHx+AMRx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:ETHx+AMRx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:ETHx+ASD.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:ETSx+TOEFLx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "2018-09-18T16:25:00+00:00",
    "course-v1:FedericaX+Fed.X17+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:FullbridgeX+Career5x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:GTx+ICT100x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:HKPolyUx+I4.0x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:HKUSTx+COMP102.1x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:HKUSTx+COMP102.2x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:HKUSTx+COMP107x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:HKUx+HKU_08x+1T2030": "2018-09-18T16:25:00+00:00",
    "course-v1:IBM+CB0103EN+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+HR101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+IS110x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+MK210x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+OB102x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+QM101.1x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IIMBx+ST250x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+CS101.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+CS101.2x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+CS213.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+CS213.2x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+CS213.3x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "2018-09-18T16:25:00+00:00",
    "course-v1:IITBombayX+SKANI102x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:ImperialX+CTT102+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IRTIx+IFCM101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IsraelX+0109434x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IsraelX+ISLAM101x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:IsraelX+KAB1010x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:KyotoUx+003x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:KyotoUx+005x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:KyotoUx+010x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:LinuxFoundationX+LFS101x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:MandarinX+MX503x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MandarinX+MX901x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+DS120x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+FIN401x+3T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+FIN404x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+LeadEd504x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+SW560x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+UX2+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:NYIF+CM1.x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:NYIF+MBSx+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:NYIF+SCF1.x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+IPLAW1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+IPLAW2x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+Katz1.1x+2T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+Katz1.2x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+ROBO1x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+ROBO2x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+ROBO3x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+ROBO4x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+SD1x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+SD2x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+SD3x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+SD4x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:PennX+SP2PennX+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:RICEx+ELEC301.1x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:RiceX+ELEC301.2x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:RICEx+PHYS101.1x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:RiceX+PHYS102.1x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:RITx+GAME104x+3T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:RITx+SKILLS101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:RITx+SKILLS105x+3T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "2018-09-18T16:25:00+00:00",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+00612642x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+00690342X+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+30640014x+1T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+60250101+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+80515182X+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+90640012X+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:TsinghuaX+TM01x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+Climate1x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+COMM120x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+COMM420x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+COMM421x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+EcodesignX+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+FBSEx+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+HtC1x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+ITSx+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.1x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.2x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.3x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.4x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.5x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+PSYC.6x+2T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UBCx+SoftEng1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:UPValenciaX+BSP101x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UPValenciaX+DC201x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UPValenciaX+ISA201x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+BIOIMG101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+Carbon101x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+Crime101x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+ENGY2x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+Hypers301x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+MEDIAWARx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+META101x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+PSYC1030.1x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+PSYC1030.2x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+PSYC1030.3x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+PSYC1030.4x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+SEGMENTx+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UQx+TOURISMx+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "2018-09-18T16:25:00+00:00",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+BNET001+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+BNET002+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+BNET003+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+CYB001x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+CYB002x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+CYB003x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+CYB004x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:W3Cx+HTML5.0x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:W3Cx+HTML5.2x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:W3Cx+JS.0x+3T2017": "2018-09-18T16:25:00+00:00",
    "course-v1:WasedaX+JBM111x+2T2018": "2018-09-18T16:25:00+00:00",
    "course-v1:MichiganX+SW522x+1T2017": "2018-08-30T17:35:00+00:00",
    "course-v1:MichiganX+SW560x+2T2017": "2018-08-30T17:35:00+00:00",
    "course-v1:EPFLx+memsX+3T2017":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+EE-100Bx+T1_2016":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+PlasmaIntroductionX+1T_2018":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+PlasmaApplicationX+1T_2018":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+DiscreteChoiceX+3T2017":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+Innov4DevX+1T2017":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+MARKETSx+2T2018":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+PHYS-209-ENx+3T2016":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+SmartCitiesX+2T2017":"2018-08-31T16:20:00+00:00",
    "course-v1:EPFLx+UrbanInfrastructuresX+2T2017":"2018-08-31T16:20:00+00:00"
  },
  "certSkus": {
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "AC0DA9B",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "1CE7A74",
    "course-v1:EPFLx+EE-100Bx+T1_2016": "3AA8AB1",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "213A29B",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "0D99E30",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "1EF0043",
    "course-v1:TsinghuaX+30640014x+1T2016": "4517189",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "EAE8E99",
    "course-v1:PennX+Katz1.1x+2T2016": "38FFD57",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "CA59F18",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "787581F",
    "course-v1:MichiganX+FIN401x+3T2016": "C440F83",
    "course-v1:MichiganX+FIN404x+1T2017": "D78F11C",
    "course-v1:EPFLx+PHYS-209-ENx+3T2016": "9140A32",
    "course-v1:AdelaideX+Wine101x+2T2016": "D946DD7",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "339EDD2",
    "course-v1:ANUx+EBM05x+3T2017": "DFDB305",
    "course-v1:ANUx+EBM06x+3T2017": "292331B",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "EA385D3",
    "course-v1:UBCx+ITSx+1T2017": "135F2CD",
    "course-v1:PennX+ROBO1x+1T2017": "29D313F",
    "course-v1:PennX+ROBO2x+2T2017": "B668B4C",
    "course-v1:PennX+ROBO3x+2T2017": "BE0E94C",
    "course-v1:PennX+ROBO4x+3T2017": "2F28F08",
    "course-v1:TsinghuaX+00612642x+1T2017": "D982B2E",
    "course-v1:TsinghuaX+TM01x+2T2017": "3624993",
    "course-v1:UBCx+SoftEng1x+1T2018": "A12DC80",
    "course-v1:UBCx+HtC1x+2T2017": "F44A398",
    "course-v1:LinuxFoundationX+LFS101x+1T2017": "774B17E",
    "course-v1:UBCx+Climate1x+2T2017": "7175FB2",
    "course-v1:EPFLx+Innov4DevX+1T2017": "2E25A59",
    "course-v1:PennX+SD1x+2T2017": "4D9F54B",
    "course-v1:PennX+SD2x+2T2017": "C6663FB",
    "course-v1:PennX+SD3x+2T2017": "68CA5D2",
    "course-v1:PennX+SD4x+2T2017": "0D1AB86",
    "course-v1:AdelaideX+Project101x+1T2017": "3606BB9",
    "course-v1:UBCx+PSYC.1x+2T2017": "F9FF495",
    "course-v1:UBCx+PSYC.2x+2T2017": "354E69A",
    "course-v1:UBCx+PSYC.3x+2T2017": "BD68A99",
    "course-v1:UBCx+PSYC.4x+2T2017": "C750BE3",
    "course-v1:UBCx+PSYC.5x+2T2017": "5D17798",
    "course-v1:UBCx+PSYC.6x+2T2017": "257CF7C",
    "course-v1:UBCx+FBSEx+2T2017": "D3BEE48",
    "course-v1:UBCx+EcodesignX+2T2017": "61F996B",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "B00C42F",
    "course-v1:EPFLx+UrbanInfrastructuresX+2T2017": "0994EFE",
    "course-v1:EPFLx+SmartCitiesX+2T2017": "ECDFBA2",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "7C212B0",
    "course-v1:HKUSTx+COMP102.1x+2T2018": "1C3290D",
    "course-v1:HKUSTx+COMP102.2x+2T2018": "B89711D",
    "course-v1:HKUSTx+COMP107x+2T2018": "0EB5561",
    "course-v1:W3Cx+HTML5.2x+3T2017": "06E184B",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "D09606A",
    "course-v1:EPFLx+memsX+3T2017": "1D38148",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "8CFA8F3",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "E4735A8",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "DCFE13A",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "4785720",
    "course-v1:UBCx+COMM120x+3T2017": "8AACF31",
    "course-v1:UBCx+COMM420x+3T2017": "FE0ACF6",
    "course-v1:UBCx+COMM421x+3T2017": "1BC2F09",
    "course-v1:GTx+ICT100x+3T2017": "F201CAD",
    "course-v1:TsinghuaX+90640012X+3T2017": "A14856C",
    "course-v1:W3Cx+JS.0x+3T2017": "C211DC7",
    "course-v1:EPFLx+DiscreteChoiceX+3T2017": "52392DE",
    "course-v1:RICEx+PHYS101.1x+2T2017": "ED92D32",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "6B43D20",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "17A70B8",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "BA7898E",
    "course-v1:EdinburghX+MKTG101x+3T2017": "94C8D7F",
    "course-v1:PennX+SP2PennX+3T2017": "F838A79",
    "course-v1:NYIF+MBSx+3T2017": "AAEAA7E",
    "course-v1:EPFLx+PlasmaApplicationX+1T_2018": "F6C2267",
    "course-v1:EPFLx+PlasmaIntroductionX+1T_2018": "6069160",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "3711858",
    "course-v1:UQx+ENGY2x+1T2018": "95B776E",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "CDDA99E",
    "course-v1:RITx+GAME104x+3T2018": "10F57E8",
    "course-v1:RITx+SKILLS105x+3T2018": "3A17BE4",
    "course-v1:KyotoUx+003x+3T2017": "9A45381",
    "course-v1:RiceX+PHYS102.1x+3T2017": "7E7DFAC",
    "course-v1:NYIF+CM1.x+3T2017": "510A98A",
    "course-v1:EdinburghX+COOPSx+1T2018": "177541A",
    "course-v1:PennX+IPLAW2x+1T2018": "21B09B8",
    "course-v1:PennX+IPLAW1x+1T2018": "4F80AAC",
    "course-v1:RITx+SKILLS101x+2T2018": "DE3E291",
    "course-v1:ETSx+TOEFLx+1T2018": "6AF26FA",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "36EE35D",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "9C0AF01",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "C68EB67",
    "course-v1:RiceX+ELEC301.2x+3T2017": "495985F",
    "course-v1:RICEx+ELEC301.1x+3T2017": "D7EB532",
    "course-v1:UQx+Hypers301x+1T2018": "01B24A2",
    "course-v1:UQx+Crime101x+1T2018": "7359AC6",
    "course-v1:AdelaideX+MusonicX+1T2018": "52BA096",
    "course-v1:TsinghuaX+00690342X+1T2018": "FADFF2A",
    "course-v1:TsinghuaX+60250101+1T2018": "D584CB2",
    "course-v1:ETHx+ASD.1x+1T2018": "AC25579",
    "course-v1:UQx+MEDIAWARx+1T2018": "8B7A802",
    "course-v1:UQx+META101x+1T2018": "7047649",
    "course-v1:IITBombayX+CS101.1x+1T2018": "E3CDE15",
    "course-v1:IITBombayX+CS101.2x+1T2018": "165518B",
    "course-v1:IITBombayX+CS213.1x+1T2018": "332A076",
    "course-v1:IITBombayX+CS213.2x+1T2018": "8FBBC74",
    "course-v1:IITBombayX+CS213.3x+1T2018": "053F7EA",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "1F9BC12",
    "course-v1:AWS+OTP-AWSD2+1T2018": "06BE27F",
    "course-v1:AWS+OTP-AWSD1+1T2018": "1557ACD",
    "course-v1:AWS+OTP-AWSD3+1T2018": "3E38B3A",
    "course-v1:BabsonX+MKT01x+1T2018": "E6F42F8",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "A6CBDD5",
    "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "C8CE20C",
    "course-v1:UPValenciaX+DC201x+1T2018": "A9D9DC4",
    "course-v1:KyotoUx+005x+1T2018": "83BCF72",
    "course-v1:NYIF+SCF1.x+1T2018": "4D0DEC4",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "9036B39",
    "course-v1:UQx+BIOIMG101x+2T2018": "79D720A",
    "course-v1:IsraelX+ISLAM101x+1T2018": "8CAB6FB",
    "course-v1:EPFLx+MARKETSx+2T2018": "57780ED",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "8ED3F05",
    "course-v1:FullbridgeX+Career5x+1T2018": "8822FBA",
    "course-v1:UPValenciaX+BSP101x+1T2018": "0A96911",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "97F7CA1",
    "course-v1:HKUx+HKU_08x+1T2030": "C67E710",
    "course-v1:IIMBx+IS110x+2T2018": "43B9F9E",
    "course-v1:IIMBx+ST250x+2T2018": "5B7925B",
    "course-v1:IIMBx+MK210x+2T2018": "06045F9",
    "course-v1:IIMBx+OB102x+2T2018": "8F29B74",
    "course-v1:IIMBx+QM101.1x+2T2018": "A5DD561",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "31B8A0D",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "5A0FAC3",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "417F28B",
    "course-v1:EdinburghX+NCycleX+2T2017": "4D13E11",
    "course-v1:BabsonX+BPET.FINx+2T2018": "7D93CAD",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "7DF27B6",
    "course-v1:BabsonX+ECON01x+2T2018": "A7B8EBF",
    "course-v1:BabsonX+BPET.STATx+2T2018": "DCEF3B0",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "68BA098",
    "course-v1:MichiganX+DS120x+2T2018": "36B579C",
    "course-v1:IsraelX+0109434x+1T2018": "0739CAC",
    "course-v1:IsraelX+KAB1010x+1T2018": "F3A4820",
    "course-v1:ETHx+AMRx+1T2018": "DC16E90",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "AB4512A",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "4336C4F",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "F23B171",
    "course-v1:ETHx+AMRx+2T2018": "750B45F",
    "course-v1:KyotoUx+010x+2T2018": "419D7A7",
    "course-v1:MandarinX+MX503x+2T2018": "21418BA",
    "course-v1:DelftX+EX101x+2T2018": "B68D835",
    "course-v1:DelftX+EX102x+2T2018": "1E009DA",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "EAFEDE2",
    "course-v1:IITBombayX+SKANI102x+2T2018": "5ED8E94",
    "course-v1:MandarinX+MX901x+2T2018": "61FA11F",
    "course-v1:AdelaideX+RiskX+2T2018": "9113A77",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2F18EAB",
    "course-v1:IRTIx+IFCM101x+2T2018": "43354AD",
    "course-v1:ImperialX+CTT102+2T2018": "DBA1AAA",
    "course-v1:UQx+Carbon101x+2T2018": "4099C34",
    "course-v1:UQx+PSYC1030.1x+2T2018": "3D23F56",
    "course-v1:UQx+PSYC1030.2x+2T2018": "FBDC513",
    "course-v1:UQx+PSYC1030.3x+2T2018": "40988D2",
    "course-v1:UQx+PSYC1030.4x+2T2018": "573703A",
    "course-v1:IIMBx+HR101x+2T2018": "548BA5F",
    "course-v1:HKPolyUx+I4.0x+2T2018": "43868CD",
    "course-v1:UQx+SEGMENTx+1T2018": "C9ECBC3",
    "course-v1:W3Cx+HTML5.0x+2T2018": "06BCB87",
    "course-v1:BabsonX+MOB01x+2T2018": "FA53B77",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "5AE465F",
    "course-v1:IBM+CB0103EN+2T2018": "9A55E36",
    "course-v1:UQx+TOURISMx+2T2018": "2A15728",
    "course-v1:BabsonX+QTM01x+2T2018": "3BC7BD2",
    "course-v1:PennX+Katz1.2x+2T2018": "063146F",
    "course-v1:TsinghuaX+80515182X+2T2018": "ACC9477",
    "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "A273335",
    "course-v1:WasedaX+JBM111x+2T2018": "EFDBE36",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "B43A09C",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "E10B3F0",
    "course-v1:FedericaX+Fed.X17+2T2018": "A1C8962",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "D446527",
    "course-v1:UWashingtonX+BNET001+2T2018": "F38099C",
    "course-v1:UWashingtonX+BNET002+2T2018": "58D6D72",
    "course-v1:UWashingtonX+BNET003+2T2018": "63A1458",
    "course-v1:UPValenciaX+ISA201x+2T2018": "F9B0445",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "F4C7EFD",
    "course-v1:MichiganX+UX2+2T2018": "B562B7A",
    "course-v1:MichiganX+LeadEd504x+2T2018": "51DBD7B",
    "course-v1:MichiganX+SW560x+2T2018": "F304DAA",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "CDB24BD",
    "course-v1:UWashingtonX+CYB003x+2T2018": "97F197E",
    "course-v1:UWashingtonX+CYB004x+2T2018": "DA7664A",
    "course-v1:UWashingtonX+CYB001x+2T2018": "739FD9B",
    "course-v1:UWashingtonX+CYB002x+2T2018": "5350D9D",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "10F8921",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "A7E1561"
  },
  "activationTimes": {
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+EE-100Bx+T1_2016": "2018-08-24T17:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+30640014x+1T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+Katz1.1x+2T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+FIN401x+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+FIN404x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+PHYS-209-ENx+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:AdelaideX+Wine101x+2T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:ANUx+EBM05x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:ANUx+EBM06x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+ITSx+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+ROBO1x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+ROBO2x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+ROBO3x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+ROBO4x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+00612642x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+TM01x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+SoftEng1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+HtC1x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS101x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+Climate1x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+Innov4DevX+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+SD1x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+SD2x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+SD3x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+SD4x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:AdelaideX+Project101x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.1x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.2x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.3x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.4x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.5x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+PSYC.6x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+FBSEx+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+EcodesignX+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+UrbanInfrastructuresX+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+SmartCitiesX+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:HKUSTx+COMP102.1x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:HKUSTx+COMP102.2x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:HKUSTx+COMP107x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:W3Cx+HTML5.2x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+memsX+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+COMM120x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+COMM420x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UBCx+COMM421x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:GTx+ICT100x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+90640012X+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:W3Cx+JS.0x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+DiscreteChoiceX+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:RICEx+PHYS101.1x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EdinburghX+MKTG101x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+SP2PennX+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:NYIF+MBSx+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+PlasmaApplicationX+1T_2018": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+PlasmaIntroductionX+1T_2018": "2018-08-24T17:00:00+00:00",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+ENGY2x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:RITx+GAME104x+3T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:RITx+SKILLS105x+3T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:KyotoUx+003x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:RiceX+PHYS102.1x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:NYIF+CM1.x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:EdinburghX+COOPSx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+IPLAW2x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+IPLAW1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:RITx+SKILLS101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:ETSx+TOEFLx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:RiceX+ELEC301.2x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:RICEx+ELEC301.1x+3T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+Hypers301x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+Crime101x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:AdelaideX+MusonicX+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+00690342X+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+60250101+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:ETHx+ASD.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+MEDIAWARx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+META101x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+CS101.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+CS101.2x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+CS213.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+CS213.2x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+CS213.3x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:AWS+OTP-AWSD2+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:AWS+OTP-AWSD1+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:AWS+OTP-AWSD3+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+MKT01x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:DelftWageningenX+AMS.URB.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UPValenciaX+DC201x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:KyotoUx+005x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:NYIF+SCF1.x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+BIOIMG101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IsraelX+ISLAM101x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:EPFLx+MARKETSx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:FullbridgeX+Career5x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UPValenciaX+BSP101x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:HKUx+HKU_08x+1T2030": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+IS110x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+ST250x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+MK210x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+OB102x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+QM101.1x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "2018-08-24T17:00:00+00:00",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:EdinburghX+NCycleX+2T2017": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.FINx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+ECON01x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+BPET.STATx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+DS120x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IsraelX+0109434x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IsraelX+KAB1010x+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:ETHx+AMRx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:ETHx+AMRx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:KyotoUx+010x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MandarinX+MX503x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:DelftX+EX101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:DelftX+EX102x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IITBombayX+SKANI102x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MandarinX+MX901x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:AdelaideX+RiskX+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IRTIx+IFCM101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:ImperialX+CTT102+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+Carbon101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+PSYC1030.1x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+PSYC1030.2x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+PSYC1030.3x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+PSYC1030.4x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IIMBx+HR101x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:HKPolyUx+I4.0x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+SEGMENTx+1T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:W3Cx+HTML5.0x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+MOB01x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:IBM+CB0103EN+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UQx+TOURISMx+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:BabsonX+QTM01x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:PennX+Katz1.2x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:TsinghuaX+80515182X+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UTAustinX+UT.IITL.11.02x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:WasedaX+JBM111x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:FedericaX+Fed.X17+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+BNET001+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+BNET002+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+BNET003+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UPValenciaX+ISA201x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+UX2+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+LeadEd504x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+SW560x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+CYB003x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+CYB004x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+CYB001x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:UWashingtonX+CYB002x+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "2018-08-24T17:00:00+00:00",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "2018-08-24T17:00:00+00:00"
  }
};

window.contentGatingConfigVExpiration = {
  deactivationTimes: {
  },
  "certSkus": {
    "course-v1:RITx+GAME105x+3T2018": "FBE446E",
    "course-v1:RITx+SKILLS102x+3T2018": "BD92E97",
    "course-v1:BabsonX+EPS02x+2T2018a": "CAD2EBA",
    "course-v1:IIMBx+AC103x+2T2018": "7CC44EE",
    "course-v1:IIMBx+FC101x+2T2018": "75A92B0",
    "course-v1:IIMBx+AC102x+3T2018": "D3BCDAE",
    "course-v1:IIMBx+FC250x+3T2018": "F630F82",
    "course-v1:DartmouthX+RFundX+2T2018": "1EC7F7B",
    "course-v1:DartmouthX+ROmniX+2T2018": "D156F29",
    "course-v1:UCSanDiegoX+DSE200x+3T2018": "A89738E",
    "course-v1:LinuxFoundationX+LFS101x+3T2018": "4424021",
    "course-v1:ANUx+EBM03x+2T2018": "B3F67EA",
    "course-v1:LinuxFoundationX+LFS165x+2T2018": "26DEE16",
    "course-v1:PennX+CHILDWELFARE1X+2T2018": "629F477",
    "course-v1:WageningenX+BEERx+3T2018": "5A582C4",
    "course-v1:UQx+MININGx+2T2018": "76102B2",
    "course-v1:UWashingtonX+PM-IT-003x+3T2018": "E796925",
    "course-v1:WageningenX+NUTR103x+3T2018": "1024FAC",
    "course-v1:UCSanDiegoX+CSE190x+2T2018": "BD0109C",
    "course-v1:UWashingtonX+BNET004+2T2018": "09BBEE7",
    "course-v1:WageningenX+NUTR104x+3T2018": "F794AEB",
    "course-v1:UCSanDiegoX+CSE167x+2T2018": "FC3205B",
    "course-v1:UCSanDiegoX+DSE210x+3T2018": "3F462F5",
    "course-v1:UCSanDiegoX+DSE220x+3T2018a": "0AFF73B",
    "course-v1:DavidsonX+D001x+3T2018": "F04F182",
    "course-v1:IBM+CB0105EN+2T2018": "73EEA3F",
    "course-v1:MichiganX+UXR5+2T2018": "D4B3712",
    "course-v1:MichiganX+ANATOMY403.2x+2T2018": "63A7EE0",
    "course-v1:MichiganX+LeadEd505x+2T2018": "812D993",
    "course-v1:MichiganX+PUBLIB604+2T2018": "13772F7",
    "course-v1:FedericaX+Fed.X18+2T2018": "BC8CE62",
    "course-v1:TenarisUniversity+CNC101x+2T2018": "66CFF4A",
    "course-v1:IITBombayX+SKARC101Ax+2T2018a": "A24B537",
    "course-v1:MongoDBx+001x+2T2018a": "0DC2F11",
    "course-v1:MichiganX+GL101x+3T2018": "A0764DF",
    "course-v1:W3Cx+HTML5.2x+3T2018": "144A722",
    "course-v1:ANUx+ANU-ASTRO3x+1T2016": "AC0DA9B",
    "course-v1:SmithsonianX+USHIS1.2x+2016_T1": "1CE7A74",
    "course-v1:ANUx+ANU-ASTRO1x+2T2016": "213A29B",
    "course-v1:ANUx+ANU-ASTRO2x+2T2016": "0D99E30",
    "course-v1:ANUx+ANU-ASTRO4x+2T2016": "1EF0043",
    "course-v1:TsinghuaX+30640014x+1T2016": "4517189",
    "course-v1:UTokyoX+UTokyo003x+1T2016": "EAE8E99",
    "course-v1:PennX+Katz1.1x+2T2016": "38FFD57",
    "course-v1:UTokyoX+UTokyo001x+3T2016": "CA59F18",
    "course-v1:UTokyoX+UTokyo002x+3T2016": "787581F",
    "course-v1:AdelaideX+Wine101x+2T2016": "D946DD7",
    "course-v1:SmithsonianX+POPX1.5x+3T2016": "339EDD2",
    "course-v1:ANUx+EBM06x+3T2017": "292331B",
    "course-v1:SmithsonianX+ED1.1x+3T2016": "EA385D3",
    "course-v1:UBCx+ITSx+1T2017": "135F2CD",
    "course-v1:PennX+ROBO2x+2T2017": "B668B4C",
    "course-v1:PennX+ROBO3x+2T2017": "BE0E94C",
    "course-v1:PennX+ROBO4x+3T2017": "2F28F08",
    "course-v1:TsinghuaX+00612642x+1T2017": "D982B2E",
    "course-v1:TsinghuaX+TM01x+2T2017": "3624993",
    "course-v1:UBCx+SoftEng1x+1T2018": "A12DC80",
    "course-v1:UBCx+HtC1x+2T2017": "F44A398",
    "course-v1:UBCx+Climate1x+2T2017": "7175FB2",
    "course-v1:PennX+SD1x+2T2017": "4D9F54B",
    "course-v1:PennX+SD2x+2T2017": "C6663FB",
    "course-v1:PennX+SD3x+2T2017": "68CA5D2",
    "course-v1:PennX+SD4x+2T2017": "0D1AB86",
    "course-v1:AdelaideX+Project101x+1T2017": "3606BB9",
    "course-v1:UBCx+PSYC.1x+2T2017": "F9FF495",
    "course-v1:UBCx+PSYC.2x+2T2017": "354E69A",
    "course-v1:UBCx+PSYC.3x+2T2017": "BD68A99",
    "course-v1:UBCx+PSYC.4x+2T2017": "C750BE3",
    "course-v1:UBCx+PSYC.5x+2T2017": "5D17798",
    "course-v1:UBCx+PSYC.6x+2T2017": "257CF7C",
    "course-v1:UBCx+FBSEx+2T2017": "D3BEE48",
    "course-v1:UBCx+EcodesignX+2T2017": "61F996B",
    "course-v1:BabsonX+BPET.MKTx+2T2017SP": "B00C42F",
    "course-v1:LinuxFoundationX+LFS158x+2T2017": "7C212B0",
    "course-v1:LinuxFoundationX+LFS171x+3T2017": "D09606A",
    "course-v1:MichiganX+PUBLIB606x+3T2017": "8CFA8F3",
    "course-v1:MichiganX+PUBLIB608x+1T2018": "E4735A8",
    "course-v1:MichiganX+PUBLIB605x+3T2017": "DCFE13A",
    "course-v1:MichiganX+PUBLIB607x+1T2018": "4785720",
    "course-v1:UBCx+COMM120x+3T2017": "8AACF31",
    "course-v1:UBCx+COMM420x+3T2017": "FE0ACF6",
    "course-v1:UBCx+COMM421x+3T2017": "1BC2F09",
    "course-v1:GTx+ICT100x+3T2017": "F201CAD",
    "course-v1:TsinghuaX+90640012X+3T2017": "A14856C",
    "course-v1:RICEx+PHYS101.1x+2T2017": "ED92D32",
    "course-v1:UCSanDiegoX+CSE181.1x+1T2017": "6B43D20",
    "course-v1:DartmouthX+DART.ENGL.02X+1T2018": "17A70B8",
    "course-v1:BabsonX+BPET.STRATx+3T2017": "BA7898E",
    "course-v1:PennX+SP2PennX+3T2017": "F838A79",
    "course-v1:NYIF+MBSx+3T2017": "AAEAA7E",
    "course-v1:GeorgetownX+SLSX-401-01x+2T2017": "3711858",
    "course-v1:UQx+ENGY2x+1T2018": "95B776E",
    "course-v1:TokyoTechX+EE101Jx+3T2017": "CDDA99E",
    "course-v1:RITx+GAME104x+3T2018": "10F57E8",
    "course-v1:RITx+SKILLS105x+3T2018": "3A17BE4",
    "course-v1:KyotoUx+003x+3T2017": "9A45381",
    "course-v1:RiceX+PHYS102.1x+3T2017": "7E7DFAC",
    "course-v1:NYIF+CM1.x+3T2017": "510A98A",
    "course-v1:EdinburghX+COOPSx+1T2018": "177541A",
    "course-v1:PennX+IPLAW2x+1T2018": "21B09B8",
    "course-v1:PennX+IPLAW1x+1T2018": "4F80AAC",
    "course-v1:ETSx+TOEFLx+1T2018": "6AF26FA",
    "course-v1:UTokyoX+UTokyo006x+1T2018": "36EE35D",
    "course-v1:UPValenciaX+ISC101.1x+1T2018": "9C0AF01",
    "course-v1:UPValenciaX+ISC101.5x+2T2018": "C68EB67",
    "course-v1:RiceX+ELEC301.2x+3T2017": "495985F",
    "course-v1:RICEx+ELEC301.1x+3T2017": "D7EB532",
    "course-v1:UQx+Hypers301x+1T2018": "01B24A2",
    "course-v1:UQx+Crime101x+1T2018": "7359AC6",
    "course-v1:AdelaideX+MusonicX+1T2018": "52BA096",
    "course-v1:TsinghuaX+00690342X+1T2018": "FADFF2A",
    "course-v1:TsinghuaX+60250101+1T2018": "D584CB2",
    "course-v1:ETHx+ASD.1x+1T2018": "AC25579",
    "course-v1:UQx+MEDIAWARx+1T2018": "8B7A802",
    "course-v1:UQx+META101x+1T2018": "7047649",
    "course-v1:IITBombayX+CS101.1x+1T2018": "E3CDE15",
    "course-v1:IITBombayX+CS101.2x+1T2018": "165518B",
    "course-v1:IITBombayX+CS213.1x+1T2018": "332A076",
    "course-v1:IITBombayX+CS213.2x+1T2018": "8FBBC74",
    "course-v1:IITBombayX+CS213.3x+1T2018": "053F7EA",
    "course-v1:MEPhIx+MEPHI012x+1T2018": "1F9BC12",
    "course-v1:AWS+OTP-AWSD2+1T2018": "06BE27F",
    "course-v1:AWS+OTP-AWSD1+1T2018": "1557ACD",
    "course-v1:AWS+OTP-AWSD3+1T2018": "3E38B3A",
    "course-v1:BabsonX+MKT01x+1T2018": "E6F42F8",
    "course-v1:MichiganX+ArtsAdminX+1T2018": "A6CBDD5",
    "course-v1:UPValenciaX+DC201x+1T2018": "A9D9DC4",
    "course-v1:KyotoUx+005x+1T2018": "83BCF72",
    "course-v1:NYIF+SCF1.x+1T2018": "4D0DEC4",
    "course-v1:BabsonX+BPET.ETAx+2T2018": "9036B39",
    "course-v1:UQx+BIOIMG101x+2T2018": "79D720A",
    "course-v1:UCSanDiegoX+CSE165x+1T2018": "8ED3F05",
    "course-v1:FullbridgeX+Career5x+1T2018": "8822FBA",
    "course-v1:UPValenciaX+BSP101x+1T2018": "0A96911",
    "course-v1:LinuxFoundationX+LFS163x+1T2018": "97F7CA1",
    "course-v1:HKUx+HKU_08x+1T2030": "C67E710",
    "course-v1:IIMBx+IS110x+2T2018": "43B9F9E",
    "course-v1:IIMBx+ST250x+2T2018": "5B7925B",
    "course-v1:IIMBx+MK210x+2T2018": "06045F9",
    "course-v1:IIMBx+OB102x+2T2018": "8F29B74",
    "course-v1:IIMBx+QM101.1x+2T2018": "A5DD561",
    "course-v1:LinuxFoundationX+LFS158x+1T2018": "31B8A0D",
    "course-v1:IITBombayX+SKANI101x+1T2018a": "5A0FAC3",
    "course-v1:SmithsonianX+ENVR1.1x+1T2018": "417F28B",
    "course-v1:EdinburghX+NCycleX+2T2017": "4D13E11",
    "course-v1:BabsonX+BPET.FINx+2T2018": "7D93CAD",
    "course-v1:BabsonX+BPET.ACCx+2T2018": "7DF27B6",
    "course-v1:BabsonX+ECON01x+2T2018": "A7B8EBF",
    "course-v1:BabsonX+BPET.STATx+2T2018": "DCEF3B0",
    "course-v1:GeorgetownX+PHLX-101x+1T2018": "68BA098",
    "course-v1:MichiganX+DS120x+2T2018": "36B579C",
    "course-v1:ETHx+AMRx+1T2018": "DC16E90",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "AB4512A",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "4336C4F",
    "course-v1:MichiganX+InjuryPreventionX+1T2018": "F23B171",
    "course-v1:ETHx+AMRx+2T2018": "750B45F",
    "course-v1:KyotoUx+010x+2T2018": "419D7A7",
    "course-v1:MandarinX+MX503x+2T2018": "21418BA",
    "course-v1:DelftX+EX101x+2T2018": "B68D835",
    "course-v1:DelftX+EX102x+2T2018": "1E009DA",
    "course-v1:TokyoTechX+Make101.1Jx+1T2018": "EAFEDE2",
    "course-v1:IITBombayX+SKANI102x+2T2018": "5ED8E94",
    "course-v1:MandarinX+MX901x+2T2018": "61FA11F",
    "course-v1:AdelaideX+RiskX+2T2018": "9113A77",
    "course-v1:TokyoTechX+Bio150x+2T2018": "2F18EAB",
    "course-v1:IRTIx+IFCM101x+2T2018": "43354AD",
    "course-v1:ImperialX+CTT102+2T2018": "DBA1AAA",
    "course-v1:UQx+Carbon101x+2T2018": "4099C34",
    "course-v1:UQx+PSYC1030.1x+2T2018": "3D23F56",
    "course-v1:UQx+PSYC1030.2x+2T2018": "FBDC513",
    "course-v1:UQx+PSYC1030.3x+2T2018": "40988D2",
    "course-v1:UQx+PSYC1030.4x+2T2018": "573703A",
    "course-v1:IIMBx+HR101x+2T2018": "548BA5F",
    "course-v1:HKPolyUx+I4.0x+2T2018": "43868CD",
    "course-v1:UQx+SEGMENTx+1T2018": "C9ECBC3",
    "course-v1:W3Cx+HTML5.0x+2T2018": "06BCB87",
    "course-v1:BabsonX+MOB01x+2T2018": "FA53B77",
    "course-v1:MichiganX+PUBLIB602x+2T2018": "5AE465F",
    "course-v1:IBM+CB0103EN+2T2018": "9A55E36",
    "course-v1:UQx+TOURISMx+2T2018": "2A15728",
    "course-v1:BabsonX+QTM01x+2T2018": "3BC7BD2",
    "course-v1:PennX+Katz1.2x+2T2018": "063146F",
    "course-v1:UWashingtonX+PM-IT-001x+2T2018": "B43A09C",
    "course-v1:UWashingtonX+PM-IT-002x+2T2018": "E10B3F0",
    "course-v1:FedericaX+Fed.X17+2T2018": "A1C8962",
    "course-v1:UCSanDiegoX+BINF180.1+2T2018": "D446527",
    "course-v1:UWashingtonX+BNET001+2T2018": "F38099C",
    "course-v1:UPValenciaX+ISA201x+2T2018": "F9B0445",
    "course-v1:FedericaX+Fed.X-21+2T2018a": "F4C7EFD",
    "course-v1:MichiganX+UX2+2T2018": "B562B7A",
    "course-v1:MichiganX+LeadEd504x+2T2018": "51DBD7B",
    "course-v1:MichiganX+SW560x+2T2018": "F304DAA",
    "course-v1:MichiganX+PUBLIB603x+2T2018": "CDB24BD",
    "course-v1:UWashingtonX+CYB003x+2T2018": "97F197E",
    "course-v1:UWashingtonX+CYB004x+2T2018": "DA7664A",
    "course-v1:UWashingtonX+CYB001x+2T2018": "739FD9B",
    "course-v1:UWashingtonX+CYB002x+2T2018": "5350D9D",
    "course-v1:MITx_PRO+SRRDx1+2T2018": "10F8921",
    "course-v1:MITx_PRO+SRRDx2+2T2018": "A7E1561"
  },
  "activationTimes": {
    'course-v1:ANUx+EBM03x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:BabsonX+EPS02x+2T2018a': '2018-10-01T16:50:00+00:00',
    'course-v1:DartmouthX+RFundX+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:DartmouthX+ROmniX+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:DavidsonX+D001x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:FedericaX+Fed.X18+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IBM+CB0105EN+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IIMBx+FC101x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IIMBx+AC103x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IIMBx+AC102x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IIMBx+FC250x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:IITBombayX+SKARC101Ax+2T2018a': '2018-10-01T16:50:00+00:00',
    'course-v1:LinuxFoundationX+LFS165x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:LinuxFoundationX+LFS101x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MichiganX+UXR5+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MichiganX+ANATOMY403.2x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MichiganX+LeadEd505x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MichiganX+PUBLIB604+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MichiganX+GL101x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:MongoDBx+001x+2T2018a': '2018-10-01T16:50:00+00:00',
    'course-v1:PennX+CHILDWELFARE1X+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:RITx+SKILLS102x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:RITx+GAME105x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:TenarisUniversity+CNC101x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UCSanDiegoX+CSE167x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UCSanDiegoX+DSE200x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UCSanDiegoX+DSE210x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UCSanDiegoX+DSE220x+3T2018a': '2018-10-01T16:50:00+00:00',
    'course-v1:UCSanDiegoX+CSE190x+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UQx+MININGx+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UWashingtonX+BNET004+2T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:UWashingtonX+PM-IT-003x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:W3Cx+HTML5.2x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:WageningenX+BEERx+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:WageningenX+NUTR104x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:WageningenX+NUTR103x+3T2018': '2018-10-01T16:50:00+00:00',
    'course-v1:AdelaideX+MusonicX+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:AdelaideX+Project101x+1T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:AdelaideX+RiskX+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:AdelaideX+Wine101x+2T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:ANUx+ANU-ASTRO1x+2T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:ANUx+ANU-ASTRO2x+2T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:ANUx+ANU-ASTRO3x+1T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:ANUx+ANU-ASTRO4x+2T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:ANUx+EBM06x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:AWS+OTP-AWSD1+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:AWS+OTP-AWSD2+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:AWS+OTP-AWSD3+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.ACCx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.ETAx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.FINx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.MKTx+2T2017SP': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.STATx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+BPET.STRATx+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+ECON01x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+MKT01x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+MOB01x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:BabsonX+QTM01x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:DartmouthX+DART.ENGL.02X+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:DartmouthX+DART.TUCK.03X+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:DartmouthX+DART.TUCK.04X+1T2026': '2018-09-18T20:00:00+00:00',
    'course-v1:DelftX+EX101x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:DelftX+EX102x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:EdinburghX+COOPSx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:EdinburghX+NCycleX+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:ETHx+AMRx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:ETHx+AMRx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:ETHx+ASD.1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:ETSx+TOEFLx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:FedericaX+Fed.X-21+2T2018a': '2018-09-18T20:00:00+00:00',
    'course-v1:FedericaX+Fed.X17+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:FullbridgeX+Career5x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:GeorgetownX+PHLX-101x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:GeorgetownX+SLSX-401-01x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:GTx+ICT100x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:HKPolyUx+I4.0x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:HKUx+HKU_08x+1T2030': '2018-09-18T20:00:00+00:00',
    'course-v1:IBM+CB0103EN+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+HR101x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+IS110x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+MK210x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+OB102x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+QM101.1x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IIMBx+ST250x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+CS101.1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+CS101.2x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+CS213.1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+CS213.2x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+CS213.3x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+SKANI101x+1T2018a': '2018-09-18T20:00:00+00:00',
    'course-v1:IITBombayX+SKANI102x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:ImperialX+CTT102+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:IRTIx+IFCM101x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:KyotoUx+003x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:KyotoUx+005x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:KyotoUx+010x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:LinuxFoundationX+LFS158x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:LinuxFoundationX+LFS158x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:LinuxFoundationX+LFS163x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:LinuxFoundationX+LFS171x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:MandarinX+MX503x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MandarinX+MX901x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MEPhIx+MEPHI012x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+ArtsAdminX+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+DS120x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+InjuryPreventionX+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+LeadEd504x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB602x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB603x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB605x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB606x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB607x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+PUBLIB608x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+SW560x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MichiganX+UX2+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MITx_PRO+SRRDx1+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:MITx_PRO+SRRDx2+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:NYIF+CM1.x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:NYIF+MBSx+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:NYIF+SCF1.x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+IPLAW1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+IPLAW2x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+Katz1.1x+2T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+Katz1.2x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+ROBO2x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+ROBO3x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+ROBO4x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+SD1x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+SD2x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+SD3x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+SD4x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:PennX+SP2PennX+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:RICEx+ELEC301.1x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:RiceX+ELEC301.2x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:RICEx+PHYS101.1x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:RiceX+PHYS102.1x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:RITx+GAME104x+3T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:RITx+SKILLS105x+3T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:SmithsonianX+ED1.1x+3T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:SmithsonianX+ENVR1.1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:SmithsonianX+POPX1.5x+3T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:SmithsonianX+USHIS1.2x+2016_T1': '2018-09-18T20:00:00+00:00',
    'course-v1:TokyoTechX+Bio150x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:TokyoTechX+EE101Jx+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:TokyoTechX+Make101.1Jx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+00612642x+1T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+00690342X+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+30640014x+1T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+60250101+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+90640012X+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:TsinghuaX+TM01x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+Climate1x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+COMM120x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+COMM420x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+COMM421x+3T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+EcodesignX+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+FBSEx+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+HtC1x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+ITSx+1T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.1x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.2x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.3x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.4x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.5x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+PSYC.6x+2T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UBCx+SoftEng1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UCSanDiegoX+BINF180.1+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UCSanDiegoX+CSE165x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UCSanDiegoX+CSE181.1x+1T2017': '2018-09-18T20:00:00+00:00',
    'course-v1:UPValenciaX+BSP101x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UPValenciaX+DC201x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UPValenciaX+ISA201x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UPValenciaX+ISC101.1x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UPValenciaX+ISC101.5x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+BIOIMG101x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+Carbon101x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+Crime101x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+ENGY2x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+Hypers301x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+MEDIAWARx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+META101x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+PSYC1030.1x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+PSYC1030.2x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+PSYC1030.3x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+PSYC1030.4x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+SEGMENTx+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UQx+TOURISMx+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UTokyoX+UTokyo001x+3T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:UTokyoX+UTokyo002x+3T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:UTokyoX+UTokyo003x+1T2016': '2018-09-18T20:00:00+00:00',
    'course-v1:UTokyoX+UTokyo006x+1T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+BNET001+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+CYB001x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+CYB002x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+CYB003x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+CYB004x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+PM-IT-001x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:UWashingtonX+PM-IT-002x+2T2018': '2018-09-18T20:00:00+00:00',
    'course-v1:W3Cx+HTML5.0x+2T2018': '2018-09-18T20:00:00+00:00'
  }
};

window.verifiedOnly = {
  "certSkus": {
    "course-v1:ANUx+EBM07x+3T2017": "F092832",
    "course-v1:Microsoft+DEV240x+1T2017": "925FDF9",
    "course-v1:UBCx+COMM320x+3T2017": "8841E64",
    "course-v1:IIMBx+ST101x+1T2018": "7AE6173",
    "course-v1:CurtinX+MKT2x+1T2018": "1DA4D49",
    "course-v1:ColumbiaX+CSMM.101x+2T2018": "C9E0080",
    "course-v1:ColumbiaX+CSMM.102x+2T2018": "8DA4049",
    "course-v1:ColumbiaX+CSMM.103x+2T2018": "4191465",
    "course-v1:ColumbiaX+CSMM.104x+2T2018": "456E7E1",
    "course-v1:ColumbiaX+BAMM.101x+2T2018": "D239608",
    "course-v1:ColumbiaX+BAMM.102x+2T2018": "BEE5655",
    "course-v1:UQx+ENGY0x+1T2018": "B9B6D0B",
    "course-v1:UQx+ENGY1x+1T2018": "D0963ED",
    "course-v1:RITx+SKILLS103x+2T2018": "B32F751",
    "course-v1:RITx+SKILLS104x+2T2018": "3B8109A",
    "course-v1:CurtinX+IOT3x+2T2018": "4B97D29",
    "course-v1:WageningenX+NUTR102x+1T2018": "00517D0",
    "course-v1:UPValenciaX+ISC101.4x+2T2018": "6D348D7",
    "course-v1:UPValenciaX+ISC101.2x+1T2018": "A05EE23",
    "course-v1:UPValenciaX+ISC101.3x+2T2018": "389CF6B",
    "course-v1:BabsonX+EPS02x+2T2018": "4F92BEF",
    "course-v1:IsraelX+236862.1x+2T2018": "62188CA",
    "course-v1:MichiganX+LeadEd501x+1T2018": "1C2742C",
    "course-v1:MichiganX+UX503x+1T2018": "DD3B576",
    "course-v1:UQx+BUSLEAD1x+2T2018": "61F0750",
    "course-v1:MichiganX+SW521x+1T2018": "EDF7789",
    "course-v1:BabsonX+EPS01x+2T2018": "FD51A03",
    "course-v1:MichiganX+UX504x+1T2018": "2F01EF9",
    "course-v1:IIMBx+MK102x+2T2018": "FED390E",
    "course-v1:IIMBx+OM101.1x+2T2018": "90A1B34",
    "course-v1:IIMBx+AC104x+2T2018": "6AD5B19",
    "course-v1:MichiganX+LeadEd502x+1T2018": "AB97E18",
    "course-v1:KTHx+RAMP01.1x+1T2018": "0B12E0D",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "AB4512A",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "4336C4F",
    "course-v1:MichiganX+SW504x+2T2018": "326D4D7",
    "course-v1:GalileoX+CAAD002X+2T2018": "9FB17F7",
    "course-v1:GalileoX+CAAD003X+2T2018": "56DDCAD",
    "course-v1:MandarinX+MX505x+2T2018": "23618DA",
    "course-v1:MandarinX+MX502X+2T2018": "BBD4A5B",
    "course-v1:MandarinX+MX504x+2T2018": "7682525",
    "course-v1:IsraelX+236862.2x+2T2018": "B040F26",
    "course-v1:IIMBx+EP101x+2T2018": "CB39200",
    "course-v1:GalileoX+CAAD001X+2T2018": "68D3852",
    "course-v1:W3Cx+HTML5.1x+2T2018": "C977153",
    "course-v1:ColumbiaX+DS101X+2T2018": "41EEE0F",
    "course-v1:ColumbiaX+DS102X+2T2018": "8C54B12",
    "course-v1:ColumbiaX+DS103x+2T2018": "6D7C604",
    "course-v1:ANUx+EBM01x+2T2018a": "4CD7802",
    "course-v1:ANUx+EBM02x+2T2018": "5562A54",
    "course-v1:MichiganX+UXD6+2T2018": "A932C7C"
  },
  "certPrices": {
    "course-v1:ANUx+EBM07x+3T2017": "$149 USD",
    "course-v1:Microsoft+DEV240x+1T2017": "$99 USD",
    "course-v1:UBCx+COMM320x+3T2017": "$150 USD",
    "course-v1:IIMBx+ST101x+1T2018": "$150 USD",
    "course-v1:CurtinX+MKT2x+1T2018": "$99 USD",
    "course-v1:ColumbiaX+CSMM.101x+2T2018": "$199 USD",
    "course-v1:ColumbiaX+CSMM.102x+2T2018": "$199 USD",
    "course-v1:ColumbiaX+CSMM.103x+2T2018": "$249 USD",
    "course-v1:ColumbiaX+CSMM.104x+2T2018": "$299 USD",
    "course-v1:ColumbiaX+BAMM.101x+2T2018": "$375 USD",
    "course-v1:ColumbiaX+BAMM.102x+2T2018": "$375 USD",
    "course-v1:UQx+ENGY0x+1T2018": "$99 USD",
    "course-v1:UQx+ENGY1x+1T2018": "$199 USD",
    "course-v1:RITx+SKILLS103x+2T2018": "$49 USD",
    "course-v1:RITx+SKILLS104x+2T2018": "$49 USD",
    "course-v1:CurtinX+IOT3x+2T2018": "$149 USD",
    "course-v1:WageningenX+NUTR102x+1T2018": "$99 USD",
    "course-v1:UPValenciaX+ISC101.4x+2T2018": "$75 USD",
    "course-v1:UPValenciaX+ISC101.2x+1T2018": "$75 USD",
    "course-v1:UPValenciaX+ISC101.3x+2T2018": "$75 USD",
    "course-v1:BabsonX+EPS02x+2T2018": "$99 USD",
    "course-v1:IsraelX+236862.1x+2T2018": "$99 USD",
    "course-v1:MichiganX+LeadEd501x+1T2018": "$199 USD",
    "course-v1:MichiganX+UX503x+1T2018": "$99 USD",
    "course-v1:UQx+BUSLEAD1x+2T2018": "$99 USD",
    "course-v1:MichiganX+SW521x+1T2018": "$199 USD",
    "course-v1:BabsonX+EPS01x+2T2018": "$99 USD",
    "course-v1:MichiganX+UX504x+1T2018": "$99 USD",
    "course-v1:IIMBx+MK102x+2T2018": "$150 USD",
    "course-v1:IIMBx+OM101.1x+2T2018": "$150 USD",
    "course-v1:IIMBx+AC104x+2T2018": "$150 USD",
    "course-v1:MichiganX+LeadEd502x+1T2018": "$199 USD",
    "course-v1:KTHx+RAMP01.1x+1T2018": "$150 USD",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "$99 USD",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "$99 USD",
    "course-v1:MichiganX+SW504x+2T2018": "$199 USD",
    "course-v1:GalileoX+CAAD002X+2T2018": "$99 USD",
    "course-v1:GalileoX+CAAD003X+2T2018": "$99 USD",
    "course-v1:MandarinX+MX505x+2T2018": "$99 USD",
    "course-v1:MandarinX+MX502X+2T2018": "$99 USD",
    "course-v1:MandarinX+MX504x+2T2018": "$99 USD",
    "course-v1:IsraelX+236862.2x+2T2018": "$99 USD",
    "course-v1:IIMBx+EP101x+2T2018": "$150 USD",
    "course-v1:GalileoX+CAAD001X+2T2018": "$99 USD",
    "course-v1:W3Cx+HTML5.1x+2T2018": "$129 USD",
    "course-v1:ColumbiaX+DS101X+2T2018": "$99 USD",
    "course-v1:ColumbiaX+DS102X+2T2018": "$99 USD",
    "course-v1:ColumbiaX+DS103x+2T2018": "$149 USD",
    "course-v1:ANUx+EBM01x+2T2018a": "$149 USD",
    "course-v1:ANUx+EBM02x+2T2018": "$149 USD",
    "course-v1:MichiganX+UXD6+2T2018": "$99 USD"
  },
  "courseName": {
    "course-v1:ANUx+EBM07x+3T2017": "Evidence-Based Project Management",
    "course-v1:Microsoft+DEV240x+1T2017": "Application Design Considerations: An Inclusive Approach",
    "course-v1:UBCx+COMM320x+3T2017": "Introduction to Accounting",
    "course-v1:IIMBx+ST101x+1T2018": "Strategic Management",
    "course-v1:CurtinX+MKT2x+1T2018": "Reputation Management in a Digital World",
    "course-v1:ColumbiaX+CSMM.101x+2T2018": "Artificial Intelligence (AI)",
    "course-v1:ColumbiaX+CSMM.102x+2T2018": "Machine Learning",
    "course-v1:ColumbiaX+CSMM.103x+2T2018": "Robotics",
    "course-v1:ColumbiaX+CSMM.104x+2T2018": "Animation and CGI Motion",
    "course-v1:ColumbiaX+BAMM.101x+2T2018": "Analytics in Python",
    "course-v1:ColumbiaX+BAMM.102x+2T2018": "Data, Models and Decisions in Business Analytics",
    "course-v1:UQx+ENGY0x+1T2018": "Energy Principles and Renewable Energy",
    "course-v1:UQx+ENGY1x+1T2018": "Climate Science and Policy",
    "course-v1:RITx+SKILLS103x+2T2018": "Critical Thinking & Problem-Solving",
    "course-v1:RITx+SKILLS104x+2T2018": "Storytelling in the Workplace",
    "course-v1:CurtinX+IOT3x+2T2018": "IoT Networks and Protocols",
    "course-v1:WageningenX+NUTR102x+1T2018": "Nutrition and Health: Micronutrients and Malnutrition",
    "course-v1:UPValenciaX+ISC101.4x+2T2018": "IT Fundamentals for Business Professionals: Programming",
    "course-v1:UPValenciaX+ISC101.2x+1T2018": "IT Fundamentals for Business Professionals: Hardware",
    "course-v1:UPValenciaX+ISC101.3x+2T2018": "IT Fundamentals for Business Professionals: Software development",
    "course-v1:BabsonX+EPS02x+2T2018": "Entrepreneurial Leadership Toolbox",
    "course-v1:IsraelX+236862.1x+2T2018": "Sparse Representations in Signal and Image Processing: Fundamentals",
    "course-v1:MichiganX+LeadEd501x+1T2018": "Leading Ambitious Teaching and Learning",
    "course-v1:MichiganX+UX503x+1T2018": "Principles of Designing for Humans",
    "course-v1:UQx+BUSLEAD1x+2T2018": "Becoming an Effective Leader",
    "course-v1:MichiganX+SW521x+1T2018": "Social Work Practice with Individuals, Families, and Small Groups",
    "course-v1:BabsonX+EPS01x+2T2018": "From Corporate Social Responsibility to Corporate Social Innovation",
    "course-v1:MichiganX+UX504x+1T2018": "Evaluating Designs with Users",
    "course-v1:IIMBx+MK102x+2T2018": "Marketing Management",
    "course-v1:IIMBx+OM101.1x+2T2018": "Operations Management",
    "course-v1:IIMBx+AC104x+2T2018": "Accounting and Finance",
    "course-v1:MichiganX+LeadEd502x+1T2018": "Designing and Leading Learning Systems",
    "course-v1:KTHx+RAMP01.1x+1T2018": "Assessment of Work-Related\u00a0Injury Risks using RAMP I",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "Developing Breakthrough Innovations with the Three Box Solution",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "Executing Breakthrough Innovations with the Three Box Solution",
    "course-v1:MichiganX+SW504x+2T2018": "Diversity and Social Justice in Social Work",
    "course-v1:GalileoX+CAAD002X+2T2018": "Android App Development for Beginners",
    "course-v1:GalileoX+CAAD003X+2T2018": "Professional Android App Development",
    "course-v1:MandarinX+MX505x+2T2018": "Mandarin Chinese for Business",
    "course-v1:MandarinX+MX502X+2T2018": "Mandarin Chinese Level 1",
    "course-v1:MandarinX+MX504x+2T2018": "Mandarin Chinese Level 3",
    "course-v1:IsraelX+236862.2x+2T2018": "Sparse Representations in Image Processing: From Theory to Practice",
    "course-v1:IIMBx+EP101x+2T2018": "Entrepreneurship: DO Your Venture",
    "course-v1:GalileoX+CAAD001X+2T2018": "Java Fundamentals for Android Development",
    "course-v1:W3Cx+HTML5.1x+2T2018": "HTML5 Coding Essentials and Best Practices",
    "course-v1:ColumbiaX+DS101X+2T2018": "Statistical Thinking for Data Science and Analytics",
    "course-v1:ColumbiaX+DS102X+2T2018": "Machine Learning for Data Science and Analytics",
    "course-v1:ColumbiaX+DS103x+2T2018": "Enabling Technologies for Data Science and Analytics: The Internet of Things",
    "course-v1:ANUx+EBM01x+2T2018a": "Evidence-Based Practice in Management",
    "course-v1:ANUx+EBM02x+2T2018": "Evidence-Based Business Communication",
    "course-v1:MichiganX+UXD6+2T2018": "UX Design: From Wireframe to Prototype"
  },
  "activationTimes": {
    "course-v1:ANUx+EBM07x+3T2017": "2018-07-11T18:00:00+00:00",
    "course-v1:Microsoft+DEV240x+1T2017": "2018-07-16T19:33:00+00:00",
    "course-v1:UBCx+COMM320x+3T2017": "2018-07-11T18:00:00+00:00",
    "course-v1:IIMBx+ST101x+1T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:CurtinX+MKT2x+1T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+CSMM.101x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+CSMM.102x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+CSMM.103x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+CSMM.104x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+BAMM.101x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:ColumbiaX+BAMM.102x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:UQx+ENGY0x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:UQx+ENGY1x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:RITx+SKILLS103x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:RITx+SKILLS104x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:CurtinX+IOT3x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:WageningenX+NUTR102x+1T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.4x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.2x+1T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:UPValenciaX+ISC101.3x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:BabsonX+EPS02x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:IsraelX+236862.1x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MichiganX+LeadEd501x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:MichiganX+UX503x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:UQx+BUSLEAD1x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MichiganX+SW521x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:BabsonX+EPS01x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MichiganX+UX504x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:IIMBx+MK102x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:IIMBx+OM101.1x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:IIMBx+AC104x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MichiganX+LeadEd502x+1T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:KTHx+RAMP01.1x+1T2018": "7/11/2018",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "2018-07-24T16:34:00+00:00",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "2018-07-24T16:34:00+00:00",
    "course-v1:MichiganX+SW504x+2T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:GalileoX+CAAD002X+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:GalileoX+CAAD003X+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MandarinX+MX505x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MandarinX+MX502X+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MandarinX+MX504x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:IsraelX+236862.2x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:IIMBx+EP101x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:GalileoX+CAAD001X+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:W3Cx+HTML5.1x+2T2018": "2018-07-02T17:00:00+00:00",
    "course-v1:ColumbiaX+DS101X+2T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:ColumbiaX+DS102X+2T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:ColumbiaX+DS103x+2T2018": "2018-07-06T18:30:00+00:00",
    "course-v1:ANUx+EBM01x+2T2018a": "2018-07-11T18:00:00+00:00",
    "course-v1:ANUx+EBM02x+2T2018": "2018-07-11T18:00:00+00:00",
    "course-v1:MichiganX+UXD6+2T2018": "2018-07-06T18:30:00+00:00"
  },
  "aboutPages": {
    "course-v1:ANUx+EBM07x+3T2017": "https://www.edx.org/course/evidence-based-project-management-anux-ebm07x",
    "course-v1:Microsoft+DEV240x+1T2017": "https://www.edx.org/course/web-design-best-practices-inclusive-microsoft-dev240x",
    "course-v1:UBCx+COMM320x+3T2017": "https://www.edx.org/course/introduction-accounting-ubcx-busacct1x",
    "course-v1:IIMBx+ST101x+1T2018": "https://www.edx.org/course/strategic-management-iimbx-st101x-0",
    "course-v1:CurtinX+MKT2x+1T2018": "https://www.edx.org/course/reputation-management-digital-world-curtinx-mkt2x-2",
    "course-v1:ColumbiaX+CSMM.101x+2T2018": "https://www.edx.org/course/artificial-intelligence-ai-columbiax-csmm-101x-3",
    "course-v1:ColumbiaX+CSMM.102x+2T2018": "https://www.edx.org/course/machine-learning-columbiax-csmm-102x-3",
    "course-v1:ColumbiaX+CSMM.103x+2T2018": "https://www.edx.org/course/robotics-columbiax-csmm-103x-3",
    "course-v1:ColumbiaX+CSMM.104x+2T2018": "https://www.edx.org/course/animation-cgi-motion-columbiax-csmm-104x-3",
    "course-v1:ColumbiaX+BAMM.101x+2T2018": "https://www.edx.org/course/analytics-python-columbiax-bamm-101x-1",
    "course-v1:ColumbiaX+BAMM.102x+2T2018": "https://www.edx.org/course/data-models-decisions-business-analytics-columbiax-bamm-102x-0",
    "course-v1:UQx+ENGY0x+1T2018": "https://www.edx.org/course/energy-principles-renewable-energy-uqx-engy0x",
    "course-v1:UQx+ENGY1x+1T2018": "https://www.edx.org/course/climate-science-policy-uqx-engy1x",
    "course-v1:RITx+SKILLS103x+2T2018": "https://www.edx.org/course/critical-thinking-problem-solving-ritx-skills103x-0",
    "course-v1:RITx+SKILLS104x+2T2018": "https://www.edx.org/course/storytelling-workplace-ritx-skills104x-0",
    "course-v1:CurtinX+IOT3x+2T2018": "https://www.edx.org/course/iot-networks-protocols-curtinx-iot3x",
    "course-v1:WageningenX+NUTR102x+1T2018": "https://www.edx.org/course/nutrition-and-health-micronutrients-and-malnutrition",
    "course-v1:UPValenciaX+ISC101.4x+2T2018": "https://www.edx.org/course/it-fundamentals-business-professionals-upvalenciax-isc101-4x",
    "course-v1:UPValenciaX+ISC101.2x+1T2018": "https://www.edx.org/course/it-fundamentals-business-professionals-upvalenciax-isc101-2x",
    "course-v1:UPValenciaX+ISC101.3x+2T2018": "https://www.edx.org/course/it-fundamentals-business-professionals-upvalenciax-isc101-3x",
    "course-v1:BabsonX+EPS02x+2T2018": "https://www.edx.org/course/entrepreneurial-leadership-toolbox",
    "course-v1:IsraelX+236862.1x+2T2018": "https://www.edx.org/course/sparse-representations-in-signal-and-image-processing-fundamentals",
    "course-v1:MichiganX+LeadEd501x+1T2018": "https://www.edx.org/course/leading-ambitious-teaching-and-learning",
    "course-v1:MichiganX+UX503x+1T2018": "https://www.edx.org/course/principles-of-designing-for-humans",
    "course-v1:UQx+BUSLEAD1x+2T2018": "https://www.edx.org/course/becoming-an-effective-leader",
    "course-v1:MichiganX+SW521x+1T2018": "https://www.edx.org/course/social-work-practice-with-individuals-families-and-small-groups",
    "course-v1:BabsonX+EPS01x+2T2018": "https://www.edx.org/course/from-corporate-social-responsibility-to-corporate-social-innovation",
    "course-v1:MichiganX+UX504x+1T2018": "https://www.edx.org/course/evaluating-designs-with-users",
    "course-v1:IIMBx+MK102x+2T2018": "https://www.edx.org/course/marketing-management",
    "course-v1:IIMBx+OM101.1x+2T2018": "https://www.edx.org/course/operations-management",
    "course-v1:IIMBx+AC104x+2T2018": "https://www.edx.org/course/accounting-and-finance",
    "course-v1:MichiganX+LeadEd502x+1T2018": "https://www.edx.org/course/designing-and-leading-learning-systems",
    "course-v1:KTHx+RAMP01.1x+1T2018": "https://www.edx.org/course/assessment-of-work-related-injury-risks-using-ramp-i",
    "course-v1:DartmouthX+DART.TUCK.03X+1T2018": "https://www.edx.org/course/developing-breakthrough-innovations",
    "course-v1:DartmouthX+DART.TUCK.04X+1T2026": "https://www.edx.org/course/executing-breakthrough-innovations",
    "course-v1:MichiganX+SW504x+2T2018": "https://www.edx.org/course/diversity-and-social-justice-in-social-work",
    "course-v1:GalileoX+CAAD002X+2T2018": "https://www.edx.org/course/android-app-development-for-beginners",
    "course-v1:GalileoX+CAAD003X+2T2018": "https://www.edx.org/course/professional-android-app-development",
    "course-v1:MandarinX+MX505x+2T2018": "https://www.edx.org/course/mandarin-for-business",
    "course-v1:MandarinX+MX502X+2T2018": "https://www.edx.org/course/mandarin-chinese-level-1",
    "course-v1:MandarinX+MX504x+2T2018": "https://www.edx.org/course/mandarin-chinese-level-3",
    "course-v1:IsraelX+236862.2x+2T2018": "https://www.edx.org/course/sparse-representations-in-image-processing-from-theory-to-practice",
    "course-v1:IIMBx+EP101x+2T2018": "https://www.edx.org/course/entrepreneurship-do-your-venture",
    "course-v1:GalileoX+CAAD001X+2T2018": "https://www.edx.org/course/java-fundamentals-for-android-development",
    "course-v1:W3Cx+HTML5.1x+2T2018": "https://www.edx.org/course/html5-coding-essentials-and-best-practices",
    "course-v1:ColumbiaX+DS101X+2T2018": "https://www.edx.org/course/statistical-thinking-for-data-science-and-analytics",
    "course-v1:ColumbiaX+DS102X+2T2018": "https://www.edx.org/course/machine-learning-for-data-science-and-analytics",
    "course-v1:ColumbiaX+DS103x+2T2018": "https://www.edx.org/course/enabling-technologies-for-data-science-and-analytics-the-internet-of-things",
    "course-v1:ANUx+EBM01x+2T2018a": "https://www.edx.org/course/evidence-based-practice-in-management-0",
    "course-v1:ANUx+EBM02x+2T2018": "https://www.edx.org/course/evidence-based-business-communication",
    "course-v1:MichiganX+UXD6+2T2018": "https://www.edx.org/course/ux-design-from-wireframe-to-prototype"
  }
};

(function ($) {
    'use strict';
    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }
    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;
        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);
            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }
    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }
    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }
    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }
    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;                        
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }
    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }
    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }
    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    
    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
    
}(typeof jQuery === 'function' ? jQuery : this));


window.hashUsername = function(group_name, group_count) {
   var username = JSON.parse(jQuery('#user-metadata').text() || {}).username,
         hash = $.md5(group_name + username),
        binary = hash.replace(/0|1|2|3|4|5|6|7/g, '0').replace(/8|9|a|b|c|d|e|f/g, '1'),
       group =  parseInt(binary, 2) % group_count;
       return group;
};
}, "visitorAttributes": [], "accountId": "1706490390", "events": [{"category": "other", "name": "Search Card Click", "eventType": "click", "viewId": "8343266652", "apiName": "1743970571_search_card_click", "id": "8339114144", "eventFilter": {"filterType": "target_selector", "selector": ".discovery-card"}}, {"category": "other", "name": "Search Facet Click", "eventType": "click", "viewId": "8343266652", "apiName": "1743970571_search_facet_click", "id": "8350338201", "eventFilter": {"filterType": "target_selector", "selector": ".facet-option"}}, {"category": "other", "name": "Donation Button Click", "eventType": "custom", "viewId": null, "apiName": "donation_button_click", "id": "8405531377", "eventFilter": null}, {"category": "convert", "name": "Order Completed", "eventType": "custom", "viewId": null, "apiName": "Completed Purchase", "id": "8417016427", "eventFilter": null}, {"category": "add_to_cart", "name": "Upgrade Banner Button Clicked", "eventType": "custom", "viewId": null, "apiName": "upgrade_banner", "id": "8417658000", "eventFilter": null}, {"category": "other", "name": "Toggle Hero", "eventType": "custom", "viewId": null, "apiName": "toggle_hero", "id": "8422590800", "eventFilter": null}, {"category": "other", "name": "Resume Course Click", "eventType": "click", "viewId": "8415635799", "apiName": "1743970571_resume_course_click", "id": "8428101482", "eventFilter": {"filterType": "target_selector", "selector": ".action-resume-course"}}, {"category": "purchase", "name": "Track Revenue", "eventType": "custom", "viewId": null, "apiName": "trackRevenue", "id": "8432432414", "eventFilter": null}, {"category": "other", "name": "Enroll Button Click", "eventType": "click", "viewId": "8462065569", "apiName": "1743970571_enroll_button_click_1", "id": "8468307826", "eventFilter": {"filterType": "target_selector", "selector": ".js-enroll-btn"}}, {"category": "other", "name": "Search Results Card Click", "eventType": "click", "viewId": "8343266652", "apiName": "1743970571_search_results_card_click", "id": "8503925888", "eventFilter": {"filterType": "target_selector", "selector": ".js-card-list .discovery-card"}}, {"category": "other", "name": "Upgrade Button Click (custom)", "eventType": "custom", "viewId": null, "apiName": "upgrade_button_click", "id": "8505715612", "eventFilter": null}, {"category": "other", "name": "Continue To Course Click (custom)", "eventType": "custom", "viewId": null, "apiName": "continue_to_course_click", "id": "8506846007", "eventFilter": null}, {"category": "other", "name": "Search Featured Card Click", "eventType": "click", "viewId": "8343266652", "apiName": "1743970571_search_featured_card_click", "id": "8509348685", "eventFilter": {"filterType": "target_selector", "selector": ".js-featured-results .discovery-card"}}, {"category": "other", "name": "Clicked Updates Tool", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_updates_tool", "id": "8545011973", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id=\"edx.updates\"]"}}, {"category": "other", "name": "Clicked Start / Resume Course", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_start__resume_course", "id": "8545470270", "eventFilter": {"filterType": "target_selector", "selector": "a.action-resume-course"}}, {"category": "other", "name": "Clicked Bookmarks Tool", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_bookmarks", "id": "8547901074", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id=\"edx.bookmarks\"]"}}, {"category": "other", "name": "Clicked on Outline Subsection Link", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_on_outline_subsection_link", "id": "8548421037", "eventFilter": {"filterType": "target_selector", "selector": "a.outline-item"}}, {"category": "other", "name": "Clicked Reviews Tool", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_reviews_", "id": "8550501290", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id=\"edx.reviews\"]"}}, {"category": "other", "name": "Skip Track Experiment Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "skip_track_upgrade_click", "id": "8562755662", "eventFilter": null}, {"category": "other", "name": "Skip Track Experiment Donation Click", "eventType": "custom", "viewId": null, "apiName": "skip_track_donation_click", "id": "8564096148", "eventFilter": null}, {"category": "other", "name": "Embedded Wayfinder Clicks", "eventType": "click", "viewId": "8462065569", "apiName": "1743970571_embedded_wayfinder_clicks", "id": "8566150807", "eventFilter": {"filterType": "target_selector", "selector": ".explorator-page button, explorator-page a"}}, {"category": "other", "name": "Skip Track Experiment Donation Click v2", "eventType": "custom", "viewId": null, "apiName": "skip_track_donation_clickv2", "id": "8570072346", "eventFilter": null}, {"category": "other", "name": "Microsoft Registration Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_microsoft_registration_click", "id": "8598744869", "eventFilter": {"filterType": "target_selector", "selector": ".button-oa2-azuread-oauth2"}}, {"category": "other", "name": "Optional Level of Education Select", "eventType": "custom", "viewId": null, "apiName": "optional_level_of_education_select", "id": "8598972364", "eventFilter": null}, {"category": "other", "name": "Google Registration Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_google_registration_click", "id": "8601482611", "eventFilter": {"filterType": "target_selector", "selector": ".button-oa2-google-oauth2"}}, {"category": "other", "name": "Optional Gender Select", "eventType": "custom", "viewId": null, "apiName": "optional_gender_select", "id": "8605163359", "eventFilter": null}, {"category": "other", "name": "Facebook Registration Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_facebook_registration_click", "id": "8607251842", "eventFilter": {"filterType": "target_selector", "selector": ".button-oa2-facebook"}}, {"category": "other", "name": "Optional Year of Birth Select", "eventType": "custom", "viewId": null, "apiName": "optional_year_of_birth_select", "id": "8608012125", "eventFilter": null}, {"category": "other", "name": "Login Or Register Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_create_account_click", "id": "8609362120", "eventFilter": {"filterType": "target_selector", "selector": ".action"}}, {"category": "other", "name": "Place Order Clicks", "eventType": "click", "viewId": "8693450564", "apiName": "1743970571_place_order_clicks", "id": "8696400337", "eventFilter": {"filterType": "target_selector", "selector": "#payment-button"}}, {"category": "other", "name": "Clicked Paypal", "eventType": "click", "viewId": "8693450564", "apiName": "1743970571_clicked_paypal", "id": "8728670363", "eventFilter": {"filterType": "target_selector", "selector": ".payment-processor-paypal"}}, {"category": "other", "name": "Apply Coupon", "eventType": "click", "viewId": "8693450564", "apiName": "1743970571_apply_coupon", "id": "8728840294", "eventFilter": {"filterType": "target_selector", "selector": "#apply-voucher-button"}}, {"category": "other", "name": "Any Discussion Event", "eventType": "custom", "viewId": null, "apiName": "discussion_any_event", "id": "8782025831", "eventFilter": null}, {"category": "other", "name": "Hackathon Motivational Fee Decilne Signup", "eventType": "custom", "viewId": null, "apiName": "hackathon-motivational-fee-decline-signup", "id": "8782405529", "eventFilter": null}, {"category": "other", "name": "Hackathon Motivational Fee Signup2", "eventType": "custom", "viewId": null, "apiName": "hackathon-motivational-fee-signup2", "id": "8782836127", "eventFilter": null}, {"category": "other", "name": "Hackathon Motivational Fee Signup", "eventType": "custom", "viewId": null, "apiName": "hackathon-motivational-fee-signup", "id": "8782908660", "eventFilter": null}, {"category": "other", "name": "Discussion Username Click", "eventType": "custom", "viewId": null, "apiName": "discussion_username_event", "id": "8783617139", "eventFilter": null}, {"category": "other", "name": "Discussion Add Response", "eventType": "custom", "viewId": null, "apiName": "discussion_add_response_event", "id": "8783775764", "eventFilter": null}, {"category": "other", "name": "Header Register link click", "eventType": "click", "viewId": "8636165544", "apiName": "1743970571_header_register_link_click", "id": "8784072362", "eventFilter": {"filterType": "target_selector", "selector": ".js-user-cta .btn-blue"}}, {"category": "other", "name": "Discussion Search Button Click", "eventType": "custom", "viewId": null, "apiName": "discussion_search_button_event", "id": "8785313481", "eventFilter": null}, {"category": "other", "name": "Home register cta join link click", "eventType": "click", "viewId": "8636165544", "apiName": "1743970571_home_register_cta_join_link_click", "id": "8785861684", "eventFilter": {"filterType": "target_selector", "selector": ".home-cta-pop-up-cta"}}, {"category": "other", "name": "Discussion User Profile Click", "eventType": "custom", "viewId": null, "apiName": "discussion_user_profile_event", "id": "8786797800", "eventFilter": null}, {"category": "other", "name": "Clicked Discovery Header Link", "eventType": "click", "viewId": "8562284423", "apiName": "1743970571_clicked_discovery_header_link", "id": "8788456748", "eventFilter": {"filterType": "target_selector", "selector": ".tab-nav-link.discovery-link"}}, {"category": "other", "name": "Discussion New Post", "eventType": "custom", "viewId": null, "apiName": "discussion_new_post_event", "id": "8790268643", "eventFilter": null}, {"category": "other", "name": "Discussion Add Comment", "eventType": "custom", "viewId": null, "apiName": "discussion_comment_event", "id": "8803444796", "eventFilter": null}, {"category": "other", "name": "Clicked Find New Courses Button", "eventType": "click", "viewId": "8562284423", "apiName": "1743970571_clicked_find_new_courses_button", "id": "8838242258", "eventFilter": {"filterType": "target_selector", "selector": ".course-advertise .ad-link a"}}, {"category": "other", "name": "Saved Feature Interest", "eventType": "custom", "viewId": null, "apiName": "social_saved_feature_interest", "id": "8851480295", "eventFilter": null}, {"category": "other", "name": "Clicked Hero Upgrade Button", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_upgrade_button_1", "id": "8890061894", "eventFilter": {"filterType": "target_selector", "selector": "a.btn-upgrade"}}, {"category": "other", "name": "Payment Error", "eventType": "custom", "viewId": null, "apiName": "payment_error", "id": "8902240264", "eventFilter": null}, {"category": "other", "name": "Year Error", "eventType": "custom", "viewId": null, "apiName": "card-expiry-year_error", "id": "8922080667", "eventFilter": null}, {"category": "other", "name": "First Name Error", "eventType": "custom", "viewId": null, "apiName": "div_id_first_name_error", "id": "8926010790", "eventFilter": null}, {"category": "other", "name": "State Error", "eventType": "custom", "viewId": null, "apiName": "div_id_state_error", "id": "8926630236", "eventFilter": null}, {"category": "other", "name": "Postal Code Error", "eventType": "custom", "viewId": null, "apiName": "div_id_postal_code_error", "id": "8926660400", "eventFilter": null}, {"category": "other", "name": "City Error", "eventType": "custom", "viewId": null, "apiName": "div_id_city_error", "id": "8929870216", "eventFilter": null}, {"category": "other", "name": "Card Number Error", "eventType": "custom", "viewId": null, "apiName": "card-number_error", "id": "8930750408", "eventFilter": null}, {"category": "other", "name": "Address Error", "eventType": "custom", "viewId": null, "apiName": "div_id_address_line1_error", "id": "8931320561", "eventFilter": null}, {"category": "other", "name": "Country Error", "eventType": "custom", "viewId": null, "apiName": "div_id_country_error", "id": "8931480183", "eventFilter": null}, {"category": "other", "name": "Card Error", "eventType": "custom", "viewId": null, "apiName": "card-cvn_error", "id": "8932680249", "eventFilter": null}, {"category": "other", "name": "Last Name Error", "eventType": "custom", "viewId": null, "apiName": "div_id_last_name_error", "id": "8932700294", "eventFilter": null}, {"category": "other", "name": "Validation Error", "eventType": "custom", "viewId": null, "apiName": "validation_error", "id": "8933340180", "eventFilter": null}, {"category": "other", "name": "Month Error", "eventType": "custom", "viewId": null, "apiName": "card-expiry-month_error", "id": "8936370296", "eventFilter": null}, {"category": "other", "name": "Toggle Form", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_toggle_form", "id": "9010110913", "eventFilter": {"filterType": "target_selector", "selector": ".form-toggle"}}, {"category": "other", "name": "Dashboard Upgrade Button Click", "eventType": "click", "viewId": "8562284423", "apiName": "1743970571_dashboard_upgrade_button_click", "id": "9013853030", "eventFilter": {"filterType": "target_selector", "selector": ".action-upgrade"}}, {"category": "other", "name": "Track Selection Page Upgrade Click", "eventType": "click", "viewId": "8787863389", "apiName": "1743970571_track_selection_page_upgrade_click", "id": "9015404526", "eventFilter": {"filterType": "target_selector", "selector": ".list-actions input[name=\"verified_mode\"]"}}, {"category": "other", "name": "Login Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_login_click", "id": "9016563053", "eventFilter": {"filterType": "target_selector", "selector": ".js-login"}}, {"category": "other", "name": "Clicked Upgrade Button in Sock", "eventType": "click", "viewId": "8550242114", "apiName": "1743970571_clicked_upgrade_button_in_sock", "id": "9026690807", "eventFilter": {"filterType": "target_selector", "selector": ".verification-sock .action-upgrade-certificate"}}, {"category": "other", "name": "Register Click", "eventType": "click", "viewId": "8485256782", "apiName": "1743970571_register_click", "id": "9030081164", "eventFilter": {"filterType": "target_selector", "selector": ".js-register"}}, {"category": "other", "name": "Discussion Thread View", "eventType": "custom", "viewId": null, "apiName": "discussion_thread_view", "id": "9111823954", "eventFilter": null}, {"category": "other", "name": "NoSimilarCoursesLink", "eventType": "custom", "viewId": null, "apiName": "nolink", "id": "9174055607", "eventFilter": null}, {"category": "other", "name": "HasSimilarCoursesCards", "eventType": "custom", "viewId": null, "apiName": "hascards", "id": "9176714444", "eventFilter": null}, {"category": "other", "name": "'See More' button displayed", "eventType": "custom", "viewId": null, "apiName": "see_more_button_displayed", "id": "9181551296", "eventFilter": null}, {"category": "other", "name": "SimilarCourseCardClick", "eventType": "custom", "viewId": null, "apiName": "cardclick", "id": "9184384966", "eventFilter": null}, {"category": "other", "name": "HasSimilarCoursesLink", "eventType": "custom", "viewId": null, "apiName": "haslink", "id": "9185354824", "eventFilter": null}, {"category": "other", "name": "NoSimilarCourseCards", "eventType": "custom", "viewId": null, "apiName": "nocards", "id": "9188274442", "eventFilter": null}, {"category": "other", "name": "SimilarCourseLinkClick", "eventType": "custom", "viewId": null, "apiName": "linkclick", "id": "9225290101", "eventFilter": null}, {"category": "other", "name": "Simplified Homepage: Featured Card Click", "eventType": "click", "viewId": "8636165544", "apiName": "1743970571_simplified_homepage_featured_card_click", "id": "9264368588", "eventFilter": {"filterType": "target_selector", "selector": ".expanded-card a"}}, {"category": "other", "name": "No Thanks Button", "eventType": "custom", "viewId": null, "apiName": "no_thanks_button", "id": "9265834188", "eventFilter": null}, {"category": "other", "name": "LEARNER-3259-HasReviews", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3259-has-reviews", "id": "9410916249", "eventFilter": null}, {"category": "other", "name": "LEARNER-3259-ReviewStarClicks", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3259-review-star-clicks", "id": "9503560426", "eventFilter": null}, {"category": "other", "name": "Add Donation Click", "eventType": "custom", "viewId": null, "apiName": "add_donation_click", "id": "9659790643", "eventFilter": null}, {"category": "other", "name": "Place Order Click With Donation", "eventType": "custom", "viewId": null, "apiName": "place_order_click_with_donation", "id": "9673130451", "eventFilter": null}, {"category": "other", "name": "Takeover Button Click", "eventType": "custom", "viewId": null, "apiName": "takeover_button_click", "id": "9937790714", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Dashboard Upgrade Button Click", "eventType": "click", "viewId": "9857878336", "apiName": "1743970571_learner3377_dashboard_upgrade_button_click", "id": "9952317737", "eventFilter": {"filterType": "target_selector", "selector": ".action-upgrade"}}, {"category": "other", "name": "LEARNER-3377 Track Selection Upgrade Button Click", "eventType": "click", "viewId": "9862639519", "apiName": "1743970571_learner3377_track_selection_upgrade_button_click", "id": "9998645817", "eventFilter": {"filterType": "target_selector", "selector": "input[name=\"verified_mode\"]"}}, {"category": "other", "name": "LEARNER-3377 Course Home Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_course_home_page_learn_more_click", "id": "10011856028", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Track Selection Modal Upgrade Click", "eventType": "click", "viewId": "9862639519", "apiName": "1743970571_learner3377_track_selection_modal_upgrade_click", "id": "10035863769", "eventFilter": {"filterType": "target_selector", "selector": ".Button__btn.Button__btn-success"}}, {"category": "other", "name": "LEARNER-3377 Course Home Upgrade Button Click", "eventType": "click", "viewId": "9974274234", "apiName": "1743970571_course_home_upgrade_button_click", "id": "10039342975", "eventFilter": {"filterType": "target_selector", "selector": ".btn-brand.btn-upgrade"}}, {"category": "other", "name": "LEARNER-3377 Course Home Modal Upgrade Click", "eventType": "click", "viewId": "9974274234", "apiName": "1743970571_learner3377_course_home_modal_upgrade_click", "id": "10052033032", "eventFilter": {"filterType": "target_selector", "selector": ".Button__btn.Button__btn-success"}}, {"category": "other", "name": "LEARNER-3377 Track Selection Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_track_selection_page_learn_more_click", "id": "10056534422", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Dashboard Page Modal Upgrade Click", "eventType": "click", "viewId": "9857878336", "apiName": "1743970571_learner3377_dashboard_page_modal_upgrade_click", "id": "10073781948", "eventFilter": {"filterType": "target_selector", "selector": ".Button__btn.Button__btn-success"}}, {"category": "other", "name": "LEARNER-3377 Dashboard Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_dashboard_page_learn_more_click", "id": "10089570280", "eventFilter": null}, {"category": "other", "name": "Dashboard Complete Bundle Button Click", "eventType": "custom", "viewId": null, "apiName": "dashboard_complete_bundle_click", "id": "10172071863", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Track Selection Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_track_selection_page_modal_upgrade", "id": "10190753494", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Course Home Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_course_home_page_modal_upgrade", "id": "10192647392", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Viewed Modal Slide 2", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_viewed_modal_slide_2", "id": "10192688669", "eventFilter": null}, {"category": "other", "name": "Feeling Lucky Click Hackathon (Jae)", "eventType": "custom", "viewId": null, "apiName": "feeling-lucky-click", "id": "10192755883", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Course Home Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_course_home_page_learn_more_click", "id": "10193057588", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Viewed Modal Slide 3", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_viewed_modal_slide_3", "id": "10193601537", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Dashboard Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_dashboard_page_modal_upgrade", "id": "10194635560", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Viewed Modal Slide 0", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_viewed_modal_slide_0", "id": "10196161318", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Track Selection Upgrade Button Click", "eventType": "click", "viewId": "10242602152", "apiName": "1743970571_learner3377_track_selection_upgrade_button_click_1", "id": "10197199667", "eventFilter": {"filterType": "target_selector", "selector": "input[name=\"verified_mode\"]"}}, {"category": "other", "name": "LEARNER-3377 In-Feature Page Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_in_feature_page_upgrade", "id": "10197423365", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Track Selection Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_track_selection_page_learn_more_click", "id": "10199577910", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Viewed Modal Slide 2", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_viewed_modal_slide_2", "id": "10201180508", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Course Home Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_course_home_page_modal_upgrade", "id": "10201203097", "eventFilter": null}, {"category": "other", "name": "LEARNER-3377 Viewed Modal Slide 1", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3377_viewed_modal_slide_1", "id": "10209340159", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Track Selection Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_track_selection_page_modal_upgrade", "id": "10229963743", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Dashboard Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_dashboard_page_modal_upgrade", "id": "10235325311", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Course Home Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_course_home_page_modal_upgrade", "id": "10240272504", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Viewed Modal Slide 0", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_viewed_modal_slide_0", "id": "10240272510", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Dashboard Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_dashboard_page_learn_more_click", "id": "10240802831", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 In-Feature Page Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_in_feature_page_upgrade", "id": "10241741265", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Track Selection Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_track_selection_page_modal_upgrade", "id": "10243031208", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Viewed Modal Slide 3", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_viewed_modal_slide_3", "id": "10246242693", "eventFilter": null}, {"category": "other", "name": "LEARNER-3514 Dashboard Upgrade Button Click", "eventType": "click", "viewId": "10257400230", "apiName": "1743970571_learner3514_dashboard_upgrade_button_click", "id": "10247392256", "eventFilter": {"filterType": "target_selector", "selector": ".action-upgrade"}}, {"category": "other", "name": "LEARNER-3514 Course Home Upgrade Button Click", "eventType": "click", "viewId": "10188118405", "apiName": "1743970571_learner3377_course_home_upgrade_button_click", "id": "10247590775", "eventFilter": {"filterType": "target_selector", "selector": ".btn-brand.btn-upgrade"}}, {"category": "other", "name": "LEARNER-3514 Dashboard Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3514_dashboard_page_learn_more_click", "id": "10252251399", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Viewed Modal Slide 1", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_viewed_modal_slide_1", "id": "10253191324", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Dashboard Page Modal Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_dashboard_page_modal_upgrade", "id": "10258131540", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Track Selection Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_track_selection_page_learn_more_click", "id": "10258180953", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Course Home Page Learn More Click", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_course_home_page_learn_more_click", "id": "10275770501", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 In-Feature Page Upgrade", "eventType": "custom", "viewId": null, "apiName": "LEARNER-3515_in_feature_page_upgrade", "id": "10281150225", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Track Selection Upgrade Button Click", "eventType": "click", "viewId": "10279640053", "apiName": "1743970571_learner3515_track_selection_upgrade_button_click", "id": "10308672754", "eventFilter": {"filterType": "target_selector", "selector": "input[name=\"verified_mode\"]"}}, {"category": "other", "name": "Discussions Upsell Click", "eventType": "custom", "viewId": null, "apiName": "discussions_upsell_click", "id": "10311642113", "eventFilter": null}, {"category": "other", "name": "LEARNER-3515 Course Home Upgrade Button Click", "eventType": "click", "viewId": "10244784103", "apiName": "1743970571_learner3515_course_home_upgrade_button_click", "id": "10317233104", "eventFilter": {"filterType": "target_selector", "selector": ".btn-brand.btn-upgrade"}}, {"category": "other", "name": "LEARNER-3515 Dashboard Upgrade Button Click", "eventType": "click", "viewId": "10246741690", "apiName": "1743970571_learner3515_dashboard_upgrade_button_click", "id": "10338340151", "eventFilter": {"filterType": "target_selector", "selector": ".action-upgrade"}}, {"category": "other", "name": "REV-19 Place Order Click", "eventType": "click", "viewId": "10477476666", "apiName": "1743970571_rev19_place_order_click", "id": "10449669517", "eventFilter": {"filterType": "target_selector", "selector": "#payment-button"}}, {"category": "other", "name": "Sequence Bottom Nav Click", "eventType": "click", "viewId": "8415635799", "apiName": "1743970571_sequence_bottom_click", "id": "10455577976", "eventFilter": {"filterType": "target_selector", "selector": ".sequence-bottom"}}, {"category": "other", "name": "Sequence Top Nav Click", "eventType": "click", "viewId": "8415635799", "apiName": "1743970571_sequence_nav_click", "id": "10459746876", "eventFilter": {"filterType": "target_selector", "selector": ".sequence-nav"}}, {"category": "other", "name": "REV-19 Upgrade Verified Click", "eventType": "click", "viewId": "10465405678", "apiName": "1743970571_upgrade_verified_click", "id": "10461137258", "eventFilter": {"filterType": "target_selector", "selector": "input[name='verified_mode']"}}, {"category": "other", "name": "Bulk Purchase Modal Button Click", "eventType": "custom", "viewId": null, "apiName": "bulk_purchase_modal_btn_click", "id": "10467833787", "eventFilter": null}, {"category": "other", "name": "REV-19 Enroll Button Click", "eventType": "click", "viewId": "10473122883", "apiName": "1743970571_rev19_enroll_button_click", "id": "10471834206", "eventFilter": {"filterType": "target_selector", "selector": ".course-enroll-actions .btn-cta"}}, {"category": "other", "name": "Bulk Purchase Widget Button Click", "eventType": "custom", "viewId": null, "apiName": "bulk_purchase_widget_btn_click", "id": "10486870635", "eventFilter": null}, {"category": "other", "name": "REV-19 Start Preview Click", "eventType": "custom", "viewId": null, "apiName": "rev_19_start_preview_click", "id": "10544990806", "eventFilter": null}, {"category": "other", "name": "Saw Paywall", "eventType": "custom", "viewId": null, "apiName": "saw_paywall", "id": "10601777764", "eventFilter": null}, {"category": "other", "name": "Paywall No Fee Click", "eventType": "custom", "viewId": null, "apiName": "paywall_no_fee_click", "id": "10602734943", "eventFilter": null}, {"category": "other", "name": "Paywall Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "paywall_upgrade_click", "id": "10614861988", "eventFilter": null}, {"category": "other", "name": "Paywall Fee Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "paywall_fee_upgrade_click", "id": "10628161364", "eventFilter": null}, {"category": "other", "name": "Click Event for .start-program-btn .btn-cta", "eventType": "click", "viewId": "9856086750", "apiName": "1743970571_click_event_for_startprogrambtn_btncta", "id": "10648471798", "eventFilter": {"filterType": "target_selector", "selector": ".start-program-btn .btn-cta"}}, {"category": "other", "name": "Click Event for .start-program-btn .btn-blue", "eventType": "click", "viewId": "10613660902", "apiName": "1743970571_click_event_for_startprogrambtn_btnblue_1", "id": "10649382522", "eventFilter": {"filterType": "target_selector", "selector": ".start-program-btn .btn-blue"}}, {"category": "other", "name": "Click Event for .start-program-btn .btn-cta", "eventType": "click", "viewId": "10613660902", "apiName": "1743970571_click_event_for_startprogrambtn_btncta_1", "id": "10649711924", "eventFilter": {"filterType": "target_selector", "selector": ".start-program-btn .btn-cta"}}, {"category": "other", "name": "Click Event for .start-program-btn .btn-blue", "eventType": "click", "viewId": "9856086750", "apiName": "1743970571_click_event_for_startprogrambtn_btnblue", "id": "10651131706", "eventFilter": {"filterType": "target_selector", "selector": ".start-program-btn .btn-blue"}}, {"category": "other", "name": "Course About Fee Click", "eventType": "custom", "viewId": null, "apiName": "course_about_fee_click", "id": "10672091964", "eventFilter": null}, {"category": "other", "name": "Course About Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "course_about_upgrade_click", "id": "10682170863", "eventFilter": null}, {"category": "other", "name": "Course About Preview Click", "eventType": "custom", "viewId": null, "apiName": "course_about_preview_click", "id": "10682570749", "eventFilter": null}, {"category": "other", "name": "Courseware Upgrade Banner Click", "eventType": "custom", "viewId": null, "apiName": "courseware_upgrade_banner_click", "id": "10700986039", "eventFilter": null}, {"category": "other", "name": "Gated Content Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "gated_content_upgrade_click", "id": "10706506856", "eventFilter": null}, {"category": "other", "name": "Clicked Content Gate Upgrade", "eventType": "custom", "viewId": null, "apiName": "clicked_gate_upgrade", "id": "10726662851", "eventFilter": null}, {"category": "other", "name": "Track Selection Audit Selected", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiment.track_selection.audit_selected", "id": "10736632776", "eventFilter": null}, {"category": "other", "name": "Track Selection Verified Selected", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiment.track_selection.verified_selected", "id": "10738100559", "eventFilter": null}, {"category": "other", "name": "Course About Audit Click", "eventType": "custom", "viewId": null, "apiName": "course_about_audit_click", "id": "10755671225", "eventFilter": null}, {"category": "other", "name": "Course About Learn More Click", "eventType": "custom", "viewId": null, "apiName": "course_about_learn_more_click", "id": "10758622265", "eventFilter": null}, {"category": "other", "name": "Verified Only Saw Regular Track Selection", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.regular_track_selection", "id": "10931853812", "eventFilter": null}, {"category": "other", "name": "Verified Only All Three Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.upgrade_click", "id": "10939970628", "eventFilter": null}, {"category": "other", "name": "Verified Only Track Selection Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.track_selection_upgrade_click", "id": "10943912118", "eventFilter": null}, {"category": "other", "name": "Verified Only Course About Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.course_about_upgrade_click", "id": "10956040800", "eventFilter": null}, {"category": "other", "name": "Verified Only Saw End of Trial Track Selection", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.end_of_trial_track_selection", "id": "10957371778", "eventFilter": null}, {"category": "other", "name": "Verified Only Enroll Button Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.enroll_click", "id": "10960332122", "eventFilter": null}, {"category": "other", "name": "Verified Only Banner Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.banner_upgrade_click", "id": "10972850983", "eventFilter": null}, {"category": "other", "name": "Verified Only Trial Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.verified_only.trial_click", "id": "10974193197", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Banner Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.banner_upgrade_click", "id": "11083955704", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Saw Regular Track Selection", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.regular_track_selection", "id": "11085944334", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Revenue", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.revenue", "id": "11091574308", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Order Completed", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.orders", "id": "11091607059", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Audit Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.audit_click", "id": "11101456926", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Gated Content Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiment.cgv3.gated_content_upgrade_click", "id": "11109245027", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Track Selection Upgrade Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.track_selection_upgrade_click", "id": "11129360814", "eventFilter": null}, {"category": "other", "name": "Content Gating V3 Saw End of Trial Track Selection", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.cgv3.end_of_trial_track_selection", "id": "11141061426", "eventFilter": null}, {"category": "other", "name": "Recommended Course Card Search Results Click", "eventType": "click", "viewId": "8343266652", "apiName": "1743970571_recommended_course_card_search_results_click", "id": "11500393227", "eventFilter": {"filterType": "target_selector", "selector": ".recommended-courses .recommended-course-card"}}, {"category": "other", "name": "View Search Recommendations Cards", "eventType": "custom", "viewId": null, "apiName": "view_search_recommendations_cards", "id": "11543620065", "eventFilter": null}, {"category": "other", "name": "Track Selection Audit Selection", "eventType": "click", "viewId": "8787863389", "apiName": "1743970571_trackselectionauditmode", "id": "11812505420", "eventFilter": {"filterType": "target_selector", "selector": ".list-actions input[name=\"audit_mode\"]"}}, {"category": "other", "name": "[REV 471]Track Selection Bundle View Program Click", "eventType": "custom", "viewId": null, "apiName": "edx.bi.experiments.trackselectionbundle-viewprogram", "id": "11818474997", "eventFilter": null}], "revision": "6835"},g=n(130);if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var h;h=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],h.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(145).setupPreviewGlobal(),n(145).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/1743970571.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction("initializeOptimizelyPreview",e);var _=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();u=t(s.getProjectToken(),_,s.getPreviewLayerIds()),f.addScriptSync(u),n(145).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction("initializeOptimizelyPreview",e),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&(e(p),i.queuePayload());r.timeEnd("block")}try{i()}catch(e){try{n(144).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(e){var t=N.getPromise("RUM_FIRST_BEACON");return t?t.then(e):v.makeAsyncRequest("RUM_FIRST_BEACON",e)}function r(e){return h.isEmpty(e)?A.resolve():i((function(){return w.request({url:M,method:"POST",data:e,withCredentials:!0}).then((function(e){return v.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw T.error("POST to client-rum failed:",e),v.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function a(){var e=y.getCurrentScript();if(e)return e.src}function o(){var e={id:P.getRumId(),v:U,account:C.getAccountId(),project:C.getSnippetId()||C.getProjectId(),snippet:C.getSnippetId(),revision:C.getRevision(),clientVersion:"0.109.0",hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=E.getEvents().length}catch(e){T.debug("Unable to get behavior events for RUM:",e)}h.assign(e,s(),l()),I.dispatch(D.SET_RUM_DATA,{data:e})}function s(){var e=b.getGlobal("performance");if(e){var t,n=P.getScriptSrc();try{if(n){T.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;T.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=h.find(a,(function(e){return r.test(e.name)}))}if(t)return h.mapValues(R.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function c(){try{return!y.querySelector("body")}catch(e){return null}}function u(){try{b.getGlobal("requestAnimationFrame")((function(){var e=P.getRumData().timebase;I.dispatch(D.SET_RUM_DATA,{data:{render:m.now()-(e||0)}})}))}catch(e){return}}function l(){return L.getDurationsFor(h.values(R.RUMPerformanceTimingAttributes))}function d(){var e={numKeys:S.allKeys().length,sizeKeys:S.allKeys().toString().length,sizeValues:S.allValues().toString().length},t=b.getGlobal("performance"),n=t?t.timing:{},i=L.getMarks()||{},a=P.getApiData(),o=P.getDOMObservationData(),s=V.get("state").getActiveExperimentIds(),c=f(P.getScriptSrc()),u=P.getRumData()||{},l=u.extras||{};h.assign(l,{apiCalls:a,DOMObservationData:o,paintTimings:g(),activeExperimentIds:s,numPages:k.getNumberOfPages(),snippet:{scheme:c.scheme,host:c.host,path:c.path},networkInfo:p(),experimental:C.getExperimental()});var d=b.getGlobal("Prototype");d&&!h.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var _=!1;_=!0;var v=x.getFrames();v.length&&(l.xdFramesLoaded=v.length);var E={id:P.getRumId(),v:U,project:C.getSnippetId()||C.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:i,xd:_,apis:h.keys(a),extras:l};r(E)}function f(e){var t=y.createElement("a");return t.href=e,{host:t.host,scheme:t.protocol.slice(0,-1),path:t.pathname}}function p(){var e=b.getGlobal("navigator");if(e&&e.connection)return h.pick(e.connection,["downlink","rtt","effectiveType"])}function g(){var e=b.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(h.isEmpty(t))return;return h.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var h=n(2),_=n(5),v=n(6),E=n(70),m=n(24),y=n(79),I=n(9),S=n(80).LocalStorage,T=n(23),A=n(12).Promise,b=n(39),w=n(88),D=n(7),R=n(25),O=n(16),N=O.get("stores/async_request"),C=O.get("stores/global"),P=O.get("stores/rum"),L=O.get("stores/performance"),x=O.get("stores/xdomain"),k=O.get("stores/view_data"),V=n(90),M="https://rum.optimizely.com/rum",F=3e3,U="1.0",G=.01;t.initialize=function(){var e=_.generate().replace(/-/g,""),t=Math.random()<G,n=a();t&&(I.dispatch(D.SET_RUM_DATA,{id:e,RumHost:M,inRumSample:t,src:n,data:{id:e,sync:c(),timebase:m.now(),sampleRate:G,url:n}}),u())},t.queuePayload=function(){return P.getSampleRum()?(y.isLoaded()?b.setTimeout(d,F):b.addEventListener("load",d),new A(function(e,t){b.setTimeout((function(){o();var n=P.getRumData();n=h.pickBy(n,(function(e){return!h.isUndefined(e)})),r(n).then(e,t)}),F)}).catch((function(e){T.warn("RUM / Error sending data:",e)}))):A.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return c(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function c(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function u(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,c=a}return c}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function g(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function _(e,t){return me(t,(function(t){return e[t]}))}function v(e){return e&&e.Object===Object?e:null}function E(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function m(e){return gi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?xn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(jt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function R(){}function O(e,t){return C(e,t)&&delete e[t]}function N(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function C(e,t){return Xi?e[t]!==An:Di.call(e,t)}function P(e,t,n){e[t]=Xi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function x(){this.d={hash:new R,map:Ki?new Ki:[],string:new R}}function k(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Ki?t.map["delete"](e):W(t.map,e)}function V(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Ki?t.map.get(e):X(t.map,e)}function M(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Ki?t.map.has(e):Q(t.map,e)}function F(e,t){var n=this.d;return Ze(e)?P("string"==typeof e?n.string:n.hash,e,t):Ki?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function G(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function B(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function j(){this.d={array:[],map:null}}function H(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function K(e){var t=this.d,n=t.array;return n?Q(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():zi.call(e,n,1),!0}function X(e,t){var n=$(e,t);return n<0?An:e[n][1]}function Q(e,t){return $(e,t)>-1}function $(e,t){for(var n=e.length;n--;)if(Nt(e[n][0],t))return n;return-1}function J(e,t,n){var i=$(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Nt(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Nt(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Nt(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:_n}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!zt(e))return e;var c=dr(e);if(c){if(s=Xe(e),!t)return De(e,s)}else{var u=We(e),l=u==Gn||u==Bn;if(fr(e))return Ne(e,t);if(u==Hn||u==kn||l&&!a){if(I(e))return a?e:{};if(s=Qe(l?{}:e),!t)return s=ne(s,e),n?Fe(e,s):s}else{if(!pi[u])return a?e:{};s=$e(e,u,t)}}o||(o=new z);var d=o.get(e);return d?d:(o.set(e,s),(c?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!c?Fe(e,s):s)}function ae(e){return zt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,c=!0,u=e.length,l=[],d=t.length;if(!u)return l;n&&(t=me(t,h(n))),i?(a=s,c=!1):t.length>=wn&&(a=G,c=!1,t=new U(t));e:for(;++r<u;){var f=e[r],p=n?n(f):f;if(c&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ce(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ue(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&xt(o)&&(n||dr(o)||Pt(o))?t>1?le(o,t-1,n,i):c(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,cn)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ue(t,(function(t){return Gt(e[t])}))}function ge(e,t,n,i,r){return e===t||(null==e||null==t||!zt(e)&&!jt(t)?e!==e&&t!==t:he(e,t,ge,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),c=Vn,u=Vn;o||(c=Ni.call(e),c=c==kn?Hn:c),s||(u=Ni.call(t),u=u==kn?Hn:u);var l=c==Hn&&!I(e),d=u==Hn&&!I(t),f=c==u;a||(a=[]);var p=_t(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||$t(e)?He(e,t,n,i,r,a):Ye(e,t,c,n,i,r,a);return a.pop(),g}if(!(r&Pn)){var h=l&&Di.call(e,"__wrapped__"),_=d&&Di.call(t,"__wrapped__");if(h||_){var g=n(h?e.value():e,_?t.value():t,i,r,a);return a.pop(),g}}if(!f)return!1;var g=Ke(e,t,n,i,r,a);return a.pop(),g}function _e(e){var t=typeof e;return"function"==t?e:null==e?_n:("object"==t?ye:be)(e)}function ve(e){return Hi(Object(e))}function Ee(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function me(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&ge(e[r],n[r],An,Cn|Pn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||$t(t)?An:cn(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),zt(o))r||(r=new z),Se(e,t,s,n,Ie,i,r);else{var c=i?i(e[s],o,s+"",e,t,r):An;c===An&&(c=o),ee(e,s,c)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],c=t[n],u=o.get(c);if(u)return void ee(e,n,u);var l=a?a(s,c,n+"",e,t,o):An,d=l===An;d&&(l=c,dr(c)||$t(c)?dr(s)?l=s:xt(s)?l=De(s):(d=!1,l=re(c,!a)):Wt(c)||Pt(c)?Pt(s)?l=tn(s):!zt(s)||i&&Gt(s)?(d=!1,l=re(c,!a)):l=s:d=!1),o.set(c,l),d&&r(l,c,i,a,o),o["delete"](c),ee(e,n,l)}function Te(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Oe(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,c([e],t.args))}),n)}function Ne(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Ce(e){var t=new e.constructor(e.byteLength);return new Vi(t).set(new Vi(e)),t}function Pe(e){return yt(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ui.exec(e));return t.lastIndex=e.lastIndex,t}function xe(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Ve(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Me(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Fe(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var c=o[e?s:++r];if(n(a[c],c,a)===!1)break}return t}}function ze(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return zt(i)?i:n}}function je(e,t,n,i){function r(){for(var t=-1,s=arguments.length,c=-1,u=i.length,l=Array(u+s),d=this&&this!==Ti&&this instanceof r?o:e;++c<u;)l[c]=i[c];for(;s--;)l[c++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&On,o=ze(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&Pn,c=r&Cn,u=e.length,l=t.length;if(u!=l&&!(s&&l>u))return!1;for(var d=!0;++o<u;){var f,p=e[o],g=t[o];if(f!==An){if(f)continue;d=!1;break}if(c){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==g&&!n(p,g,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case Mn:case Fn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case jn:return e!=+e?t!=+t:e==+t;case Yn:case qn:return e==t+""}return!1}function Ke(e,t,n,i,r,a){var o=r&Pn,s=sn(e),c=s.length,u=sn(t),l=u.length;if(c!=l&&!o)return!1;for(var d=c;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,g=o;++d<c;){f=s[d];var h,_=e[f],v=t[f];if(!(h===An?_===v||n(_,v,i,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var E=e.constructor,m=t.constructor;E!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof E&&E instanceof E&&"function"==typeof m&&m instanceof m)&&(p=!1)}return p}function qe(e,t){var n=e[t];return Yt(n)?n:An}function We(e){return Ni.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Qe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Fi(e))}function $e(e,t,n){var i=e.constructor;switch(t){case Qn:return Ce(e);case Mn:case Fn:return new i(+e);case $n:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Ve(e,n);case zn:return Pe(e);case jn:case qn:return new i(e);case Yn:return Le(e);case Kn:return xe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||Qt(e)||Pt(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ue(e,Boolean)}function it(e,t){return e&&e.length?d(e,_e(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ct(e){var t=e?e.length:0;return t?e[t-1]:An}function ut(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Oe(this.e,this.u)}function gt(e,t,n){return t=n?An:t,ce(e,_e(t))}function ht(e,t){return ue(e,_e(t))}function _t(e,t){return l(e,_e(t),tr)}function vt(e,t){return tr(e,ie(t))}function Et(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),Qt(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function mt(e,t){return me(e,_e(t))}function yt(e,t,n){return p(e,_e(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,Re(e,_e(t))}function Tt(e,t){var n=0;return t=_e(t),me(me(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return E(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Yi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return zt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Ot(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function Pt(e){return xt(e)&&Di.call(e,"callee")&&(!Bi.call(e,"callee")||Ni.call(e)==kn)}function Lt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function xt(e){return jt(e)&&Lt(e)}function kt(e){return e===!0||e===!1||jt(e)&&Ni.call(e)==Mn}function Vt(e){return jt(e)&&Ni.call(e)==Fn}function Mt(e){if(Lt(e)&&(dr(e)||Qt(e)||Gt(e.splice)||Pt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Ft(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&ji(e)}function Gt(e){var t=zt(e)?Ni.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=xn}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function jt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Yt(e){return null!=e&&(Gt(e)?Pi.test(wi.call(e)):jt(e)&&(I(e)?Pi:li).test(e))}function Kt(e){return null===e}function qt(e){return"number"==typeof e||jt(e)&&Ni.call(e)==jn}function Wt(e){if(!jt(e)||Ni.call(e)!=Hn||I(e))return!1;var t=Fi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Oi}function Xt(e){return zt(e)&&Ni.call(e)==Yn}function Qt(e){return"string"==typeof e||!dr(e)&&jt(e)&&Ni.call(e)==qn}function $t(e){return jt(e)&&Bt(e.length)&&!!fi[Ni.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,cn(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return ve(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function cn(e){for(var t=-1,n=et(e),i=Ee(e),r=i.length,a=Je(e),o=!!a,s=a||[],c=s.length;++t<r;){var u=i[t];o&&("length"==u||S(u,c))||"constructor"==u&&(n||!Di.call(e,u))||s.push(u)}return s}function un(e,t){var n={};return t=_e(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=_e(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,_e(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function pn(e){return e?_(e,sn(e)):[]}function gn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,m):e}function hn(e){return function(){return e}}function _n(e){return e}function vn(e){return ye(hr({},e))}function En(e,t,n){var i=sn(t),r=pe(t,i);null!=n||zt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(zt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,c([this.value()],arguments))})})),e}function mn(){return Ti._===this&&(Ti._=Ci),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Sn(e){return e&&e.length?u(e,_n,Ct):An}function Tn(e){return e&&e.length?u(e,_n,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",On=1,Nn=32,Cn=1,Pn=2,Ln=1/0,xn=9007199254740991,kn="[object Arguments]",Vn="[object Array]",Mn="[object Boolean]",Fn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",zn="[object Map]",jn="[object Number]",Hn="[object Object]",Yn="[object RegExp]",Kn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",Qn="[object ArrayBuffer]",$n="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ci=/[\\^$.*+?()[\]{}|]/g,ui=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[$n]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Vn]=fi[Qn]=fi[Mn]=fi[Fn]=fi[Un]=fi[Gn]=fi[zn]=fi[jn]=fi[Hn]=fi[Yn]=fi[Kn]=fi[qn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Vn]=pi[Qn]=pi[Mn]=pi[Fn]=pi[$n]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[zn]=pi[jn]=pi[Hn]=pi[Yn]=pi[Kn]=pi[qn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Gn]=pi[Xn]=!1;var gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},_i=hi[typeof t]&&t&&!t.nodeType?t:An,vi=hi[typeof e]&&e&&!e.nodeType?e:An,Ei=vi&&vi.exports===_i?_i:An,mi=v(_i&&vi&&"object"==typeof n&&n),yi=v(hi[typeof self]&&self),Ii=v(hi[typeof window]&&window),Si=v(hi[typeof this]&&this),Ti=mi||Ii!==(Si&&Si.window)&&Ii||yi||Si||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Oi=wi.call(Object),Ni=bi.toString,Ci=Ti._,Pi=RegExp("^"+wi.call(Di).replace(ci,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=Ei?Ti.Buffer:An,xi=Ti.Reflect,ki=Ti.Symbol,Vi=Ti.Uint8Array,Mi=xi?xi.enumerate:An,Fi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=bi.propertyIsEnumerable,zi=Ai.splice,ji=Ti.isFinite,Hi=Object.keys,Yi=Math.max,Ki=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Xi=qe(Object,"create"),Qi=Ki?wi.call(Ki):"",$i=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();Mi&&!Bi.call({valueOf:1},"valueOf")&&(Ee=function(e){return T(Mi(e))});var ir=Me,rr=be("length"),ar=Ui||function(){return[]};(Ki&&We(new Ki)!=zn||qi&&We(new qi)!=Kn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ni.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case Qi:return zn;case $i:return Kn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return je(e,On|Nn,t,n)})),cr=Dt((function(e,t){return oe(e,1,t)})),ur=Dt((function(e,t,n){return oe(e,gr(t)||0,n)})),lr=Dt((function(e,t){return je(e,Nn,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:hn(!1),pr=Number,gr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),_r=Ue((function(e,t){ir(t,cn(t),e)})),vr=Ue((function(e,t,n,i){Me(t,cn(t),e,i)})),Er=Dt((function(e){return e.push(An,Z),vr.apply(An,e)})),mr=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=me(le(t,1),String),Te(e,se(cn(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=_e;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,L.prototype.clear=x,L.prototype["delete"]=k,L.prototype.get=V,L.prototype.has=M,L.prototype.set=F,U.prototype.push=B,z.prototype.clear=j,z.prototype["delete"]=H,z.prototype.get=Y,z.prototype.has=K,z.prototype.set=q,w.assign=hr,w.assignIn=_r,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=Er,w.defer=cr,w.delay=ur,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=mt,w.mapValues=un,w.matches=vn,w.merge=mr,w.mixin=En,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ut,w.sortBy=Tt,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=_r,En(w,w),w.clone=Rt,w.cloneDeep=Ot,w.escape=gn,w.every=gt,w.find=_t,w.findIndex=it,w.forEach=vt,w.forOwn=an,w.has=on,w.head=ot,w.identity=_n,w.includes=Et,w.indexOf=st,w.isArguments=Pt,w.isArray=dr,w.isBoolean=kt,w.isDate=Vt,w.isEmpty=Mt,w.isEqual=Ft,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Kt,w.isNumber=qt,w.isObject=zt,w.isRegExp=Xt,w.isString=Qt,w.isUndefined=Jt,w.last=ct,w.max=Sn,w.min=Tn,w.noConflict=mn,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=St,w.uniqueId=In,w.each=vt,w.first=ot,En(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,_i&&vi&&(Ei&&((vi.exports=w)._=w),_i._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,c,u=new a(function(e,t){o=e,c=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:u,resolver:o,rejecter:c}),t&&t(),u},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,
this.S=[],this.T=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.R=e,this.O=t,this.N=0,this.C=!1,this.P={},r.extend(this,n),this.L={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.P[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.L)},i.prototype.on=function(e,t){this.P[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.O.D(this.R,e)},i.prototype.emitChange=function(){this.C=!0,this.N++},i.prototype.hasChanges=function(){return this.C},i.prototype.resetChange=function(){this.C=!1},i.prototype.getStateId=function(){return this.N},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){Q=e}function s(){return function(){return t.nextTick(f)}}function c(){return"undefined"!=typeof W?function(){W(f)}:d()}function u(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function p(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,c()}catch(e){return d()}}function g(e,t){var n=arguments,i=this,r=new this.constructor(_);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];Q((function(){return P(a,r,e,i._result)}))})():R(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(_);return A(n,e),n}function _(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function E(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return ce.error=e,ce}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){Q((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===g&&t.constructor.resolve===h?S(e,t):n===ce?(D(e,ce.error),ce.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,v()):e(n)?T(t,n,m(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),O(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&Q(O,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,Q(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&Q(O,e)}function O(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?P(n,i,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ue.error=e,ue}}function P(e,t,n,i){var a=r(n),o=void 0,s=void 0,c=void 0,u=void 0;if(a){if(o=C(n,i),o===ue?(u=!0,s=o.error,o.error=null):c=!0,t===o)return void D(t,E())}else o=i,c=!0;t._state!==ae||(a&&c?A(t,o):u?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function x(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function V(e,t){this._instanceConstructor=e,this.promise=new e(_),this.promise[re]||k(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,M())}function M(){return new Error("Array Methods must be provided an Array")}function F(e){return new V(this,e).promise}function U(e){var t=this;return new t(K(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(_);return D(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this[re]=x(),this._result=this._state=void 0,this._subscribers=[],_!==e&&("function"!=typeof e&&B(),this instanceof j?L(this,e):z())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=j}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=Y,q=0,W=void 0,X=void 0,Q=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},$="undefined"!=typeof window?window:void 0,J=$||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?u():te?l():void 0===$?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ce=new N,ue=new N,le=0;return V.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},V.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=m(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===j){var a=new n(_);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},V.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},V.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},j.all=F,j.race=U,j.resolve=h,j.reject=G,j._setScheduler=a,j._setAsap=o,j._asap=Q,j.prototype={constructor:j,then:g,"catch":function(e){return this.then(null,e)}},j.polyfill=H,j.Promise=j,j}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):_=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++_<t;)p&&p[_].run();_=-1,t=g.length}p=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,g=[],h=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new c(e,t)),1!==g.length||h||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),c={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),cookie_options:n(31),event_data:n(32),event_emitter:n(33),dimension_data:n(34),directive:n(35),global:n(36),global_state:n(37),history:n(38),integration_settings:n(40),layer:n(41),layer_data:n(42),log:n(44),observed_redirect:n(45),pending_events:n(46),performance:n(47),plugins:n(48),provider_status:n(49),pending_redirect:n(50),rum:n(51),sandbox:n(52),session:n(53),tracker_optimizely:n(54),ua_data:n(55),view:n(56),view_data:n(57),visitor:n(58),visitor_attribute_entity:n(59),visitor_events:n(60),visitor_events_manager:n(65),visitor_id:n(66),visitor_bucketing:n(67),xdomain:n(68)};c["group_data"]=n(69),a.registerStores(c),i.forOwn(c,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var c=e.split(":"),u=parseFloat(c[0]),l=parseFloat(c[1]),d=parseFloat(n);return d>=u&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.L={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.V),this.on(r.ACTION_EXECUTED,this.M),this.on(r.SET_CHANGE_APPLIER,this.F),this.on(r.REMOVE_ACTION_STATE,this.U)},V:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.L.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.L.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,c=r.id+":"+o.id+":"+s;n={id:c,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.L.actions[c]=n}))}))}))})),this.emitChange())},M:function(e){var t=e.actionId;i.isUndefined(t)||this.L.actionState[t]||(this.L.actionState[t]={})},F:function(e){var t=e.actionId,n=e.changeId;return this.L.actionState[t]?void(this.L.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.L.actionState[e.actionId]},get:function(e){return a.safeReference(this.L.actions[e])},getActionState:function(e){return a.safeReference(this.L.actionState[e])},getByChangeId:function(e){return i.find(this.L.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.L.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.L.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.L.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.L.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.L.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.L.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),c=n(9),u=n(26);i.prototype.G=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=u.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};c.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.z(e.logLevel,e.logMessage,!0)}),this))},i.prototype.z=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.j(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.z(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.z(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.j([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.z(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.z(s.LogLevel.ERROR,[this.H(),e]),this.z(s.LogLevel.INFO,[e.stack])):this.z(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.z("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.z("GROUPEND",[].slice.call(arguments))},i.prototype.j=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={},this.on(i.REGISTER_ASYNC_DEFERRED,this.Y),this.on(i.RESOLVE_DEFERRED,this.K),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.L[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},Y:function(e){this.L[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},K:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getAudiencesMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])},getAudienceName:function(e){var t=i.find(i.values(this.L),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.V)},getChange:function(e){return this.L[e]},V:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.L[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.L={},i.each(a.Lifecycle,i.bind((function(e){this.L[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.L[e])},X:function(e){this.L[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.L[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.L[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.L={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.$),this.on(i.SET_COOKIE_AGE,this.J),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Z)},getCurrentDomain:function(){return this.L.currentDomain},getDefaultAgeInSeconds:function(){return this.L.defaultAgeSeconds},getAutoRefresh:function(){return this.L.autoRefresh},$:function(e){this.L.currentDomain=e,this.emitChange()},J:function(e){this.L.defaultAgeSeconds=e,this.emitChange()},Z:function(e){this.L.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V)},getAll:function(){return a.safeReference(i.values(this.L))},getEventsMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.L),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.L,{pageId:e}))},V:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.L={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ee),this.on(a.REMOVE_EMITTER_HANDLER,this.te)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.L.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ee:function(e){var t=i(e.filter);this.L.handlers[t]||(this.L.handlers[t]=[]),this.L.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},te:function(e){var t=!1,n=e.token;r.forOwn(this.L.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.L.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getById:function(e){return a.safeReference(this.L[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.L),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.ne)},getAll:function(){return i.cloneDeep(this.L)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.L.disabled},isEditor:function(){return this.L.isEditor},clientHasAlreadyInitialized:function(){return this.L.alreadyInitialized},getForceAudienceIds:function(){return this.L.forceAudienceIds},getForceVariationIds:function(){return this.L.forceVariationIds},getPreviewLayerIds:function(){return this.L.previewLayerIds},getProjectToken:function(){return this.L.projectToken},getForceTracking:function(){return this.L.forceTracking},shouldActivate:function(){return!this.L.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.L.isPreview},shouldBootstrapDataForEditor:function(){return this.L.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.L.isPreview||this.L.isLegacyPreview||!this.getProjectToken()||this.L.isEditor)},shouldBailForDesktopApp:function(){return!this.L.isEditor&&this.L.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.L.isSlave&&!this.L.isEditor&&this.L.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.L.shouldOptOut},shouldSendTrackingData:function(){return!this.L.trackingDisabled&&(!!this.L.forceTracking||!this.L.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.L.isSlave},isRunningInDesktopApp:function(){return this.L.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.L.isRunningInV2Editor},ne:function(e){i.extend(this.L,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.re),this.on(r.ACTIVATE,this.ae),this.on(r.RECORD_GLOBAL_DECISION,this.oe),this.on(r.SET_DOMCONTENTLOADED,this.se)},getRevision:function(){return this.L.revision},getGlobalHoldbackThreshold:function(){return this.L.holdback},getProjectId:function(){return this.L.projectId},getSnippetId:function(){return this.L.snippetId},getAccountId:function(){return this.L.accountId},getNamespace:function(){return this.L.namespace},getActivationId:function(){return this.L.activationId},getActivationTimestamp:function(){return this.L.activationTimestamp},getAnonymizeIP:function(){return this.L.anonymizeIP},isGlobalHoldback:function(){return!!this.L.isGlobalHoldback},getListTargetingKeys:function(){return this.L.listTargetingKeys.slice()},getDCPServiceId:function(){return this.L.dcpServiceId},getDCPKeyfieldLocators:function(){return this.L.dcpKeyfieldLocators},getRecommenderServices:function(){return this.L.recommenderServices},getProjectJS:function(){return this.L.projectJS},getPlugins:function(){return this.L.plugins},getExperimental:function(){return a.safeReference(this.L.experimental)},domContentLoadedHasFired:function(){return this.L.domContentLoaded},ae:function(e){this.L.activationId=e.activationId,this.L.activationTimestamp=e.activationTimestamp,this.L.isGlobalHoldback=null},oe:function(e){var t=e.isGlobalHoldback;if(null!==this.L.isGlobalHoldback&&this.L.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.L.isGlobalHoldback=t,this.emitChange()},re:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.L,n,t),this.emitChange()}},se:function(){this.L.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ce)},getEffectiveReferrer:function(){return this.L.effectiveReferrer},getEffectiveVariationId:function(){return this.L.effectiveVariationId},ce:function(e){i.isUndefined(e.effectiveReferrer)||(this.L.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.L.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(39);e.exports={initialize:function(){this.L={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.ue),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.le)},getOriginalPushState:function(){return this.L.originalPushState},getOriginalReplaceState:function(){return this.L.originalReplaceState},ue:function(){this.L.originalPushState||(this.L.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},le:function(){this.L.originalReplaceState||(this.L.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V),this.on(r.SET_INTEGRATION_SETTINGS,this.de)},V:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.L[e.id]=e}),this)),this.emitChange())},de:function(e){var t=this.L[e.id];t?i.extend(t,e):this.L[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.L))},get:function(e){return i.cloneDeep(this.L[e])},getReference:function(e){return this.L[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.L={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.fe),this.on(r.RECORD_LAYER_DECISION,this.pe),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ge)},getLayerState:function(e,t){if(this.L[e]){var n=this.L[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.L)i.forEach(this.L[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.L)i.forEach(this.L[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},fe:function(e){e.merge||(this.L={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.L[t];if(i.isUndefined(r))this.L[t]={},this.L[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.L[t][n]=e)}}),this)),this.emitChange()},pe:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.L[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.L[e.layerId]=n,this.emitChange()},ge:function(e){var t=e.layerId,n=e.pageId||o;return this.L[t]?this.L[t][n]?(this.L[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(43);e.exports={initialize:function(){this.L={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.V);
},V:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.L.variations[e.id]=e})),t.L.experiments[n.id]=n})),a.deepFreeze(e),t.L.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.L.layers))},getCampaignsMap:function(){return a.safeReference(this.L.layers)},getExperimentsMap:function(){return a.safeReference(this.L.experiments)},getVariationsMap:function(){return a.safeReference(this.L.variations)},getCount:function(){return i.keys(this.L.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(i.values(this.L.layers),(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.L.layers[e])},getLayerByExperimentId:function(e){var t=i.values(this.L.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.L.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={logs:[]},this.on(i.LOG,this.he)},getLogs:function(){return this.L.logs},he:function(e){this.L.logs.push(e),this.emitChange()},w:function(){return this.L.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.L={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this._e),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.ve)},get:function(){return r.safeReference(this.L.data)},hasTracked:function(){return this.L.hasTracked},_e:function(e){r.deepFreeze(e),this.L.data=e,this.L.hasTracked=!1,this.emitChange()},ve:function(){this.L.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.L={},this.on(r.SET_PENDING_EVENT,this.Ee),this.on(r.REMOVE_PENDING_EVENT,this.me),this.on(r.LOAD_PENDING_EVENTS,this.ye)},getEvents:function(){return this.L},getEventsString:function(){return a.stringify(this.L)},Ee:function(e){i.keys(this.L).length>=o&&this.Ie();var t=e.id,n=e.retryCount;this.L[t]&&this.L[t].retryCount===n||(this.L[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},me:function(e){delete this.L[e.id],this.emitChange()},ye:function(e){this.L=e.events,this.Ie(),this.emitChange()},Ie:function(){for(var e=i.sortBy(this.L,"timeStamp"),t=0;t<=e.length-o;t++)delete this.L[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.L={},this.L[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Se)},Se:function(e){i.isUndefined(this.L[a.PerformanceData.performance_marks][e.name])&&(this.L[a.PerformanceData.performance_marks][e.name]=[]),this.L[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.L[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.L[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.L=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Te)},Te:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.L[t])throw new Error("Invalid plugin type specified: "+t);this.L[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.L[e])return this.L[e];throw new Error("Invalid plugin type: "+e)}return this.L},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.Ae)},getPendingAttributeValue:function(e){if(this.L[e])return this.L[e].pending},Ae:function(e){this.L[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this._e)},isExpectingRedirect:function(){return i.isString(this.L.layerId)},getLayerId:function(){return this.L.layerId},_e:function(e){this.isExpectingRedirect()||(this.L.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.be),this.on(r.RECORD_API_USAGE,this.we),this.on(r.INITIALIZE_CHANGE_METRICS,this.De),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Re),this.on(r.RECORD_CHANGE_OVERHEATED,this.Oe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ne)},be:function(e){i.merge(this.L,e),this.emitChange()},we:function(e){this.L.apis[e.methodName]||(this.L.apis[e.methodName]=0),this.L.apis[e.methodName]++,this.emitChange()},De:function(){i.isUndefined(this.L.data.extras.changeMacrotaskRate)&&(this.L.data.extras.changeMacrotaskRate=0),i.isUndefined(this.L.data.extras.numOverheatedChanges)&&(this.L.data.extras.numOverheatedChanges=0)},Re:function(e){i.isUndefined(this.L.data.extras.changeMacrotaskRate)&&(this.L.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.L.data.extras.changeMacrotaskRate&&(this.L.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Oe:function(){i.isUndefined(this.L.data.extras.numOverheatedChanges)&&(this.L.data.extras.numOverheatedChanges=0),this.L.data.extras.numOverheatedChanges++,this.emitChange()},Ne:function(e){this.L.DOMObservation[e.counterName]||(this.L.DOMObservation[e.counterName]=0),this.L.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.L.inRumSample},getRumId:function(){return this.L.id},getRumHost:function(){return this.L.RumHost},getApiData:function(){return this.L.apis},getDOMObservationData:function(){return this.L.DOMObservation},getRumData:function(){return i.cloneDeep(this.L.data)},getScriptSrc:function(){return this.L.src}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Ce)},Ce:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.L.natives=e.sandboxedFunctions,this.L.initialized=!0,this.emitChange()},getAll:function(){return this.L.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.L.natives[e]||null},isInitialized:function(){return this.L.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.L={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Pe),this.on(r.LOAD_SESSION_STATE,this.Le)},getState:function(){return i.cloneDeep(this.L)},getSessionId:function(){return this.L.sessionId},Le:function(e){this.L.sessionId=e.sessionId,this.L.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Pe:function(){var e=a.now(),t=this.L.lastSessionTimestamp;(!this.L.sessionId||e-t>s)&&(this.L.sessionId=o.generate()),this.L.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.xe(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.ke),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ve),this.on(r.REGISTER_TRACKER_VISITOR,this.Me),this.on(r.REGISTER_TRACKER_EVENT,this.Fe),this.on(r.REGISTER_TRACKER_DECISION,this.Ue),this.on(r.RESET_TRACKER_EVENTS,this.Ge),this.on(r.RESET_TRACKER_STORE,this.xe),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Be),this.on(r.SET_TRACKER_POLLING,this.ze),this.on(r.SET_TRACKER_BATCHING,this.je),this.on(r.SET_TRACKER_SEND_EVENTS,this.He),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ye),this.on(r.SET_TRACKER_DIRTY,this.Ke),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.qe)},getPersistableState:function(){return this.L.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.L.data,decisions:this.L.decisions,decisionEvents:this.L.decisionEvents,previousBatches:this.L.previousBatches}:{}:null},Ye:function(e){i.isEmpty(this.L.data)||i.isEmpty(e.data)||(this.ke(),this.L.previousBatches.push(this.getEventBatch())),this.L.data=e.data||{},this.L.decisions=e.decisions||[],this.L.decisionEvents=e.decisionEvents||[],i.isEmpty(this.L.previousBatches)||i.isEmpty(e.previousBatches)?this.L.previousBatches=e.previousBatches||[]:this.L.previousBatches=this.L.previousBatches.concat(e.previousBatches),this.emitChange()},Ke:function(e){this.L.isDirty=e,this.emitChange()},Fe:function(e){var t=this.We();!i.isEmpty(t.snapshots)&&i.isEmpty(this.L.decisionEvents)||this.Xe(),this.Qe().events.push(e.event),this.L.decisions=e.decisions,this.Ke(!0)},Ue:function(e){this.L.decisionEvents.push(e.decisionEvent),this.L.decisions=e.decisions,this.Ke(!0)},Me:function(e){i.isEmpty(this.L.data)?this.L.data=e.data:this.ke(),this.L.data.visitors.push(e.visitor),this.L.decisions=e.decisions,this.L.decisionEvents=[],this.Ke(!0)},Ve:function(e){this.L.previousBatches.push(e),this.Ke(!0)},xe:function(){this.L={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Ge:function(){var e=this.We();this.L.data.visitors=[e],e.snapshots=[],this.Ke(!0)},Be:function(){this.L.previousBatches=[],this.Ke(!0)},ze:function(e){this.L.polling=e,this.emitChange()},je:function(e){this.L.shouldBatch=e,this.emitChange()},He:function(e){this.L.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.L.data)},getPreviousBatches:function(){return i.cloneDeep(this.L.previousBatches)},$e:function(){return this.L.decisionEvents.slice()},Je:function(){this.L.decisionEvents=[]},Ze:function(){return this.L.decisions.slice()},isPolling:function(){return this.L.polling},shouldBatch:function(){return this.L.shouldBatch},Qe:function(){return i.last(this.We().snapshots)},We:function(){return i.last(this.L.data.visitors)},Xe:function(){var e=this.$e(),t=this.We();t.snapshots.push({decisions:this.Ze(),events:e}),this.Je(),this.Ke(!0)},ke:function(){this.L.decisionEvents.length>0&&this.Xe()},hasEventsToSend:function(){if(!i.isEmpty(this.L.decisionEvents))return!0;if(!i.isEmpty(this.L.data)){var e=i.some(this.L.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.L.previousBatches)},canSend:function(){return this.L.canSend},qe:function(e){var t=this.We();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.SET_UA_DATA,this.V)},V:function(e){i.isEmpty(this.L)&&(this.L=e.data)},get:function(){return i.cloneDeep(this.L)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.L=i.cloneDeep(o),this.on(r.REGISTER_VIEWS,this.et),this.on(r.SET_VIEW_ACTIVE_STATE,this.tt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.nt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.it),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.rt),this.on(r.SET_GLOBAL_TAGS,this.at),this.on(r.ACTIVATE,this.ot),this.on(r.SET_VIEW_BATCHING,this.je)},getAll:function(){var e={};for(var t in this.L.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.L.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.L.viewStates[e]),n=this.L.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.L.viewStates[e]?this.L.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.L.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.L.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.L.globalTags)},ot:function(){this.L.viewStates={},this.emitChange()},et:function(e){i.each(e.views,i.bind((function(e){var t=e.id;this.L.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},tt:function(e){var t=e.view.id;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);this.L.viewStates[t].isActive=e.isActive,e.isActive?this.L.viewStates[t].activatedTimestamp=e.timestamp:(this.L.viewStates[t].parsedMetadata={},this.L.viewStates[t].userSuppliedMetadata={}),this.emitChange()},nt:function(e){var t=e.pageId;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.L.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},it:function(e){var t=e.pageId;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.L.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},rt:function(e){var t=e.pageId;this.L.viewStates[t]&&(this.L.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},at:function(e){i.extend(this.L.globalTags,e),this.emitChange()},je:function(e){this.L.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V)},getAll:function(){return a.safeReference(i.values(this.L))},getPagesMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.L),{apiName:e}))},getNumberOfPages:function(){return i.keys(this.L).length},getAllViewsForActivationType:function(e){return i.filter(i.values(this.L),{activationType:e})},V:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.st),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ct)},getVisitorProfile:function(){return this.L.profile},getVisitorProfileMetadata:function(){return this.L.metadata},getAttribute:function(e,t){var n=this.L.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.L.metadata[e])},ct:function(e){this.L.profile=e.profile,this.L.metadata=e.metadata,this.emitChange()},st:function(e){var t,n;i.each(e.attributes,i.bind((function(e){t=this.L.profile,n=this.L.metadata,e.type&&(t=this.L.profile[e.type]=this.L.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,i.bind((function(t,i){e.type&&(n=this.L.metadata[e.type]=this.L.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}),this))}),this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.ut)},getCustomBehavioralAttributes:function(){return i.filter(this.L,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.L);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.L[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ut:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.L[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(61).Event;e.exports={initialize:function(){this.L={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.V),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.dt),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ft)},getEvents:function(){return this.L.events},getForeignEvents:function(){return this.L.foreignEvents},getForeignEventQueues:function(){return this.L.foreignEventQueues},V:function(e){this.L.events=e,this.emitChange()},dt:function(e){this.L.foreignEvents[e.key]=e.value},ft:function(e){this.L.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(62),s=n(19).getFieldValue,c=n(63);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=c.hashToHex(c.toByteString(this.digest()),c.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var c=i[s];if(!n.hasOwnProperty(c)||t[c]!==n[c])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var u={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=u[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=u[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var c="timestamp";r.push(c+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=u[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=u[o.FIELDS.OPTIONS],c=u[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[c]&&(i[s]=i[s]||{},i[s][c]=i[c],delete i[c]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(64).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(c(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},c=function(e,t){var n=i(e,t);return(n>>>0)/a},u=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:c,toByteString:u}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,c,u;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,u=0;u<i;)c=255&e.charCodeAt(u)|(255&e.charCodeAt(++u))<<8|(255&e.charCodeAt(++u))<<16|(255&e.charCodeAt(++u))<<24,++u,c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(c=0,n){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:c^=255&e.charCodeAt(u),c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.pt)},getBaseMap:function(){return this.L.baseMap},getEventQueue:function(){return this.L.eventQueue},getLastEvent:function(){return this.L.lastEvent},getCleared:function(){return this.L.cleared},getInitialized:function(){return this.L.initialized},pt:function(e){this.L[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={randomId:null},this.on(r.SET_VISITOR_ID,this.V)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.L.randomId},V:function(e){i.extend(this.L,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.L={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ht),this.on(r.MERGE_VARIATION_ID_MAP,this._t),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.vt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Et)},getVariationIdMap:function(){return i.cloneDeep(this.L.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.L.variationIdMap)},ht:function(e){var t=this.L.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.L.variationIdMap[e.layerId]=n,this.emitChange())},_t:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.L.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.L.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.L.preferredLayerMap)},getPreferredLayerId:function(e){return this.L.preferredLayerMap[e]},vt:function(e){this.L.preferredLayerMap[e.groupId]!==e.layerId&&(this.L.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Et:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.L.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.mt),this.on(r.XDOMAIN_ADD_FRAME,this.yt),this.on(r.XDOMAIN_SET_MESSAGE,this.It),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.St),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.Tt),this.on(r.XDOMAIN_SET_DISABLED,this.At)},getMessages:function(){return i.cloneDeep(this.L.messages)},getNextMessageId:function(){return this.L.messages.length},getMessageById:function(e){return this.L.messages[e]},getSubscribers:function(){return this.L.subscribers},getFrames:function(){return this.L.frames},getNextFrameId:function(){return this.L.frames.length},getDefaultFrame:function(){return this.L.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.L.canonicalOrigins)},isDisabled:function(){return this.L.disabled},mt:function(e){this.L.defaultFrame=e},yt:function(e){this.L.frames.push(e)},It:function(e){this.L.messages[e.messageId]=e.message},St:function(e){this.L.subscribers.push(e.subscriber)},Tt:function(e){this.L.canonicalOrigins=e.canonicalOrigins},At:function(e){this.L.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getGroupsMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])}}}),(function(e,t,n){var i=n(71);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){y.dispatch(v.SET_VISITOR_EVENTS,e)}function r(e){y.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){y.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){y.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){y.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function c(){y.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function u(){return O.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function p(){return N.getCleared()}function g(){return N.getInitialized()}function h(){return i(u().concat(d())),a([]),u().length>P&&(i(u().slice(-P)),!0)}var _=n(2),v=n(7),E=n(24),m=n(72),y=n(9),I=n(23),S=n(73),T=t,A=n(61).Event,b=n(62),w=n(61).EventBase,D=n(87),R=n(16),O=R.get("stores/visitor_events"),N=R.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},P=1e3;t.initialize=function(e,t){if(!g()){T.bt(e,t);var n=u();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),c()}},t.addEvent=function(e){I.debug("Behavior store: adding event",e);var t=T.wt(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),u(),d()),T.Dt(d())},t.getEvents=function(){return d().length>0&&(h()&&D.sessionize(u()),T.Rt(u()),T.Dt(d())),u()},T.bt=function(e,t){T.Ot(e,t)&&(T.Rt(u()),T.Dt(d())),D.sessionize(u())},T.Ot=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(T.Nt(e)),a(T.Nt(t))):(n=!0,i(T.Ct(e)),a(T.Ct(t))),d().length>0&&(h(),n=!0),i(T._updateBaseMapAndMaybeDedupe(u())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.Ct=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.Pt(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Lt();return D.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(u())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.xt=function(){return E.now()},T.wt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||m.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=T.kt(o);var s=T.xt(),c=new A(o,s,-1);return D.updateSessionId(f(),c),D.updateSessionIndex(f(),c),c},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.kt(e[t].eventBase);return e},T.Rt=function(e){var t=T.Vt(e);S.persistBehaviorEvents(t)},T.Dt=function(e){var t=T.Vt(e);S.persistBehaviorEventQueue(t)},T.Mt=function(){p()||(i([]),a([]),T.Rt(u()),T.Dt(d()),r({}),o(null),s(!0))},T.kt=function(e){var t=e.hash(),n=l(),i=n[t];if(_.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.Lt=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.Vt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);_.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);_.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return _.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,c=e[a],u=c.eventBase;if(u.hasOwnProperty(r)){o=i[u[r]];var l=c[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(c),o[n.HASH]=u.hash(),o[n.TIMEBASE]=c[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),u[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.Pt=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return _.isUndefined(t)||n.setHash(t),n},T.Nt=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.Pt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],c=0;c<s.length;c++){var u=s[c],l=new A(a,o+u[t.DELTA]),d=u[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.Nt(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return c(U.LAYER_MAP)||{}}function r(e,t){D.dispatch(R.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=K.getPreferredLayerMapString();p(U.LAYER_MAP,e,!0)}function o(e){D.dispatch(R.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=P.now()),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||w.isUndefined(e[r]))try{var a=L.evaluate(t.getter);
w.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),w.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){M.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),D.dispatch(R.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){M.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function c(e){var t=g(e),n=V.getItem(t);if(!n){var i=h(e);n=V.getItem(i),f(e,n)}return w.isString(n)&&(n=b(n)),n}function u(e){var t=[];return w.each(e,(function(e){w.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function l(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function d(e){var t=Y.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return w.each(V.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:b(V.getItem(e))};n.push(a)}})),n}function f(e,t){var n=g(e),i=h(e);V.setItem(n,t),V.removeItem(i)}function p(e,t,i){try{var r=g(e);i||(t=k.stringify(t));try{V.removeItem(h(e)),V.setItem(r,t)}catch(e){throw M.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(83).setItem(r,t)}catch(e){M.warn("Unable to persist visitor data:",e.message)}}function g(e){var n=Y.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function h(e){var t=Y.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function _(e,t){if(E(e,g(U.EVENT_QUEUE)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:N.deserialize(b(t))});else if(E(e,g(U.EVENTS)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:N.deserialize(b(t))});else if(E(e,g(U.LAYER_STATES)))D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.map(b(t),l),merge:!0});else if(E(e,g(U.VARIATION_MAP)))D.dispatch(R.MERGE_VARIATION_ID_MAP,{variationIdMap:b(t)});else if(E(e,g(U.VISITOR_PROFILE))){var n=["custom"],i=b(t);w.each(n,(function(e){var t=j.getPlugin(x.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=v(i,e,t.attributionType);if(!w.isEmpty(n)){var r=[];w.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else M.debug("Attribute type",e,"not used by any audiences")}))}}function v(e,t,n){var i=q.getAttribute(t),r=q.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(w.isEmpty(i))return{data:a,metadata:o};var s={};return w.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===x.AttributionTypes.FIRST_TOUCH&&i>=a||n===x.AttributionTypes.LAST_TOUCH&&a>=i||w.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function E(e,t){return e.indexOf(t)>0}function m(){var e=q.getVisitorProfile(),t=q.getVisitorProfileMetadata(),n=j.getAllPlugins(x.PluginTypes.visitorProfileProviders);if(n){var i=w.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=w.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){O.initializeStore(e,t)}function I(e){D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.filter(e,(function(e){return!!e.decision}))})}function S(e){e=w.extend({lastSessionTimestamp:0,sessionId:null},e),D.dispatch(R.LOAD_SESSION_STATE,e)}function T(){return"oeu"+P.now()+"r"+Math.random()}function A(e){var t,n,i=j.getAllPlugins(x.PluginTypes.visitorProfileProviders),r=w.filter(i,(function(e){return w.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=w.reduce(t,(function(e,t,n){var i=t,a=w.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),D.dispatch(R.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function b(e){try{return k.parse(e)}catch(t){return M.debug("Failed to parse: ",e,t),null}}var w=n(2),D=n(9),R=n(7),O=n(70),N=n(71),C=n(74),P=n(24),L=n(16),x=n(25),k=n(26),V=n(80).LocalStorage,M=n(23),F=n(12).Promise,U=n(25).VisitorStorageKeys,G=L.get("stores/cookie_options"),B=L.get("stores/global"),z=L.get("stores/layer"),j=L.get("stores/plugins"),H=L.get("stores/session"),Y=L.get("stores/visitor_id"),K=L.get("stores/visitor_bucketing"),q=L.get("stores/visitor"),W=L.get("stores/provider_status");t.getIdFromCookies=function(){var e=t.getCurrentId();return e||(e=T()),{randomId:e}},t.getCurrentId=function(){return C.get(x.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return V.keys().length>0},t.setId=function(e){var n=Y.getBucketingId();D.dispatch(R.SET_VISITOR_ID,e),Y.getBucketingId()!==n&&t.loadData();try{t.maybePersistVisitorId(e)}catch(e){if(M.error("Visitor / Unable to persist visitorId, disabling tracking"),D.dispatch(R.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof C.MismatchError)throw M.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return c(U.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){D.dispatch(R.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=K.getVariationIdMapString();p(U.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(U.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){D.dispatch(R.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=w.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=w.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=w.partial(s,t),i=w(e).filter({isAsync:!0}).map(n).filter().value();return w.forEach(w.filter(e,(function(e){return!e.isAsync})),n),i.length>0?F.all(i):F.resolve()},t.loadData=function(){y(c(U.EVENTS)||[],c(U.EVENT_QUEUE)||[]);var e=d(U.LAYER_STATES);w.forEach(e,(function(e){e.item=w.map(e.item,l)})),I(u(e)),S(c(U.SESSION_STATE)||{}),A(c(U.VISITOR_PROFILE)||{});var n=c(U.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){p(U.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(U.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=z.getLayerStates(t.getNamespace());e=w.map(e,(function(e){return w.omit(e,"namespace")})),p(U.LAYER_STATES,e)},t.persistSessionState=function(){p(U.SESSION_STATE,H.getState())},t.persistVisitorProfile=function(){p(U.VISITOR_PROFILE,m())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return w.includes(e,n)&&w.includes(e,"_")&&w.includes(e,"$$")&&w.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){C.remove(x.COOKIES.VISITOR_UUID),e.randomId&&(G.getAutoRefresh()||t.getCurrentId()!==e.randomId?(C.set(x.COOKIES.VISITOR_ID,e.randomId),M.log("Persisting visitorId:",e.randomId)):M.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return q.getAttribute(e)},t.getPendingAttributeValue=function(e){return W.getPendingAttributeValue(e)},t.loadForeignData=function(){w.each(V.keys(),(function(e){var t=V.getItem(e);t&&_(e,t)}))},t.getNamespace=function(){return B.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=C.getAll();w.forEach(w.keys(e),(function(e){0===e.indexOf(x.COOKIES.SESSION_STATE+"$$")&&C.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],c=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(_,Math.random().toString(),a),t.remove(_,a),c=a.domain;break}catch(e){}}return d.dispatch(u.SET_COOKIE_DOMAIN,c),c}var r=n(2),a=n(75).create,o=n(24),s=n(79),c=n(39),u=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),g=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,c;n=s.getCookieString().split(/\s*;\s*/);var u={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(c=t.safeDecodeURIComponent(i.substring(0,o)),void 0===u[c])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),u[c]=l}return u},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,u){a=r.extend({encodeValue:!0},a),u!==!1&&(u=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(c.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var h=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*h)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),u){var _=a.encodeValue,v=t.get(e,_);if(v!==n){if(!v)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+n+'" for "'+e+'", got "'+v+'"')}}},t.remove=function(e,n){for(var i=c.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],_="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(76),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(77)(),a=n(78);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(75).create,s=n(81),c=n(39),u=t.Error=o("StorageError");try{r=c.getGlobal("localStorage")}catch(e){throw new u("Unable to read localStorage: "+e.toString())}if(!r)throw new u("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.Ft=e,this.Ut=t}var r=n(2),a=n(23),o="$$";i.prototype.Gt=function(e){return[this.Ut,e].join(o)},i.prototype.Bt=function(e){return e.replace(this.Ut+o,"")},i.prototype.setItem=function(e,t){try{this.Ft.setItem(this.Gt(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Ft.removeItem(this.Gt(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Ft.getItem(this.Gt(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Ft);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Ut)}),this)),r.bind(this.Bt,this))},i.prototype.allKeys=function(){return r.keys(this.Ft)},i.prototype.allValues=function(){return r.values(this.Ft)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return c.getGlobal("performance")}var r=n(7),a=n(75).create,o=n(24),s=n(9),c=n(39),u=n(16),l=u.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),c=e+"Time",u=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:c,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void m.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void m.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(m.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,c=n(7),u=n(16),l=n(9),d=n(84),f=n(75).create,p=n(24),g=n(79),h=n(26),_=n(86),v=n(73),E=n(39),m=n(23),y=u.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(c.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=g.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(c.XDOMAIN_ADD_FRAME,r),n(r)},g.appendTo(g.querySelector("body"),i)})},t.loadCanonicalOrigins=function(e){l.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=v.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),m.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){E.addEventListener("message",i);var r=function(){return!!g.querySelector("body")},s=function(){return t.loadIframe(e,n)};return _.pollFor(r).then(s).then((function(e){l.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(85);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(84),s=n(16),c=n(9),u=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),c.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){c.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(u.error("Error in handler for event:",e,r),o.emitError(r,null,t)):u.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(39),o=100,s=50;t.pollFor=function(e,t,n){var c,u;return i.isFunction(n)?u=n:(c=n||o,u=function(){return c--,c<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!u()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(61).Event,o=n(24),s=n(62),c=n(61).EventBase;t.CURRENT_SESSION_INDEX=0;var u=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new c("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),u=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,u="number"!=typeof u?n:u,e=new a(new c("",""),n,u,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var c=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>u&&(c+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,c);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),c=n(23),u=n(12).Promise,l=n(89),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new u(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return u.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return u.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),c.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(79),c=n(25),u=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(39);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(c.SandboxedFunctions,(function(e){return n[e]}));u.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(91),o=n(16),s=o.get("stores/plugins"),c=n(7),u=n(25),l=n(9),d=[n(105),n(106),n(125)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(c.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(u.PluginTypes.apiModules,e),t?(l.dispatch(c.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var c=r.decision.experimentId,u=r.decision.variationId;if(!c||!u)return null;var l,f;return(l=o.find(a.experiments,{id:c}))?(f=o.find(l.variations,{id:u}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:l.name,id:l.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var c=[],u=e.getLayerStates();s.onlySingleExperiments&&(u=o.filter(u,(function(e){var n=t.get(e.layerId);return n&&d.isSingleExperimentPolicy(n.policy)})));var l=o.map(u,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=f.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(l,r):l;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&c.push(i)})),c}function a(e,t,n,i){var r,a,s=e.layerId,c=t.get(s)||{},u=o.map(c.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!c.decisionMetadata||!c.decisionMetadata.offerConsistency){var l={id:s,campaignName:c.name||null,experiment:null,allExperiments:u,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(c.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(92),c=n(93),u=n(94),l=n(96),d=n(43),f=n(97);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var c={},d={},f={},p={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:c,pages:i.getPagesMap(),experiments:d,variations:f,projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION},g=l.dereferenceChangeId;return o.each(n.getAll(),(function(e){u.defineProperty(c,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,g)}),"campaign"),u.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return d[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){u.defineProperty(d,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,g)}),"experiment"),u.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return f[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){u.defineProperty(f,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=r.getGroupsMap(),p}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,u,l){return{getCampaignStates:function(i){var a={},s=r(n,t,e,u,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,u,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],c=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return c},getCampaignStateLists:function(i){var a={},s=r(n,t,e,u,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return u.isGlobalHoldback()},getActivationId:function(){return u.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=f.getExperimentAndVariation();return e&&(e.referrer=f.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);return r?c.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);if(!r)return null;var a=c.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return c.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),u={experiment:s.experiment,variation:s.variation};return d.isSingleExperimentPolicy(r.layer.policy)||o.extend(u,{campaign:s.layer,holdback:r.isLayerHoldback}),u}}}],t.utils=n(98).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(104)}),(function(e,t,n){t.VERSION="0.109.0",t.ENGINE="js"}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!c.isEmpty(e)&&c.includes(["and","or","not"],e[0])}function a(e,t){var n="";return c.isEmpty(t)?n=d:(n=c.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!_.isSingleExperimentPolicy(e.policy)||!r){var s=!_.isSingleExperimentPolicy(e.policy)&&r,u=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[u.names.experiment,u.names.variation],p=[u.idStrings.experiment,u.idStrings.variation];_.isSingleExperimentPolicy(e.policy)||(d.unshift(u.names.layer),p.unshift(u.idStrings.layer));var g=c.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),v=h*l.length,E=g+v;if(s&&(E+=f.length),E>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=a-E,y=d.length,I=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(m/y));m-=A,y--,I.unshift(T.substring(0,A))}var b=c.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,u=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),g=d.names,h=d.idStrings,v=c.reduce(h,(function(e,t){return e+t.length}),0);if(v+u+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var E=a-v-u-s.length,m={};m.variation=Math.min(g.variation.length,Math.floor(E/3)),E-=m.variation,m.experiment=Math.min(g.experiment.length,Math.floor(E/2)),E-=m.experiment,m.layer=E;var y={};c.each(g,(function(e,t){y[t]=e.substring(0,m[t])}));var I=[];return _.isSingleExperimentPolicy(e.policy)||I.push(y.layer+h.layer),
I=I.concat([y.experiment+h.experiment,y.variation+h.variation,s]),I.join(l)}var c=n(2),u=n(16),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=n(23),_=n(43);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||g,experiment:t.name||g,variation:n.name||g};if(o&&(s=c.mapValues(s,i)),s.experiment===g&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=u.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(95),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,c){i(e,t,(function(){var e=["prop",s,c||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(94),c=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return u(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=c.getChange(e);return t?o.safeReference(t):e};var u=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(99).observeSelector,a=n(100).poll,o=n(102).waitForElement,s=n(103).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(E),a),this.observe(t,e)});return function(i){var r=E[i];n.observe(t,e),r.cancelObservation=function(){delete E[i],l.isEmpty(E)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));E[e].cancelObservation=function(){t(),delete E[e]}}}function r(e){var t=E[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(E[e]){if(o(E[e]))return 0===E[e].matchedCount&&l.isFunction(E[e].options.onTimeout)&&E[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(E[e].selector);t.length&&(l.each(t,(function(t){t.zt&&t.zt[e]||E[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;E[e]&&E[e].callbackQueue.length;){var t=E[e].callbackQueue.shift();if(c(t,e),E[e].matchedCount=E[e].matchedCount+1,E[e].callback(t),E[e]&&E[e].options.once)return void r(e)}}function c(e,t){e.zt||(e.zt={}),e.zt[t]=!0}function u(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),p=n(79),g=(n(25),n(9),n(5).generate),h=n(100),_=n(39),v=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),E={},m=function(e){(m=i())(e)};t.observeSelector=function(e,t,n){if(!u(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=g();return n=l.merge({},v,n||{}),E[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},m(i),_.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),c=n(39),u=n(101).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=u),l[t]||(l[t]={callbacks:{},id:c.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(99).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(100).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(85);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(106);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(7),a=n(90),o=n(91),s=n(107),c=n(25),u=n(108),l=n(115),d=n(6),f=n(75).create,p=n(24),g=n(116),h=n(85),_=n(9),v=n(26),E=n(23),m=n(119),y=n(120),I=n(73),S=n(83),T=n(16),A=T.get("stores/dimension_data"),b=T.get("stores/view_data"),w=T.get("stores/visitor_id"),D=T.get("stores/layer_data"),R=T.get("stores/directive"),O=86400,N=90,C=t.ApiListenerError=f("ApiListenerError");t.event=function(e){y.updateAllViewTags();var t=function(){var t=u.trackCustomEvent(e.eventName,e.tags);t?E.log("API / Tracking custom event:",e.eventName,e.tags):E.log("API / Not tracking custom event:",e.eventName)};w.getBucketingId()?t():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=b.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?y.activateViaAPI(t,e.tags):(y.deactivate(t),E.log("API / Deactivated Page",y.description(t)))};w.getBucketingId()?i():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){y.setGlobalTags(e.tags)},t.user=function(e){E.log("API / Setting visitor attributes:",e.attributes),i.each(e.attributes,(function(e,t){var n,i=t,a="custom",o=A.getById(t)||A.getByApiName(t);o&&(i=o.id,n=o.segmentId||o.id);var s=function(){_.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:a,metadata:{lastModified:p.now()}}]})};w.getBucketingId()?s():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:s})}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;g.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<N&&(E.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",N,", setting to minimum."),t=N),E.log("API / Setting cookie age to",t,"days."),_.dispatch(r.SET_COOKIE_AGE,t*O)},t.extendCookieLifetime=function(e){e=i.extend({isEnabled:!0},e),E.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),_.dispatch(r.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){E.log("API / Setting cookie domain to",e.cookieDomain),_.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);E.log("API / Disabling tracking"),_.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else E.log("API / Disabling everything"),_.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),E.setLogMatcher(n),E.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(o[t]||a.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');m.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;d.makeAsyncRequest(t),d.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new C(e)}},h.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");h.off(e.token)},t.load=function(e){e.data=i.extend({},e.data),s.normalizeClientData(e.data),_.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");_.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=D.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=D.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);I.updateVariationIdMap(r,e.experimentId,a),w.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+v.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.loadCanonicalOrigins(e.canonicalOrigins)},t.disableCrossOrigin=function(){E.log("API / cross origin tracking is DISABLED"),_.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){R.shouldActivate()?l.emitActivateEvent():E.debug("Not activating.")},t.sendEvents=function(){l.emitSendEvents()},t.holdEvents=function(){l.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=x.description(t),i=X.isExpectingRedirect(),r=X.getLayerId();if(i&&r===t.id){var a=G.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,E(a,[G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,E(a,[G.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r){var a=q.get(t.layerId),o=x.description(a),s=d(e,t,n,i);_("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()}),i=J.getByApiName(e),r=i&&i.pageId?g(i):H.getActiveViewTags(),a=y.extend({},r,t),o=i&&i.category?i.category:O.OTHER;return y.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:H.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:O.OTHER,r=g(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function c(){var e=f({activeViewStates:[],visitorProfile:Q.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()});return y.extend(e,{eventTags:{}})}function u(e,t,n){var i=q.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var c=y.find(s.variations,{id:t.variationId});c&&(a=c.name||null)}}var u=M.getReferrer()||D.getReferrer(),l={sessionId:j.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),decisionId:e,activationId:z.getActivationId(),namespace:z.getNamespace(),timestamp:b.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:z.getAccountId(),projectId:z.getProjectId(),revision:String(z.getRevision()),clientVersion:A.VERSION,referrer:u,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:A.ENGINE,anonymizeIP:y.isNull(z.getAnonymizeIP())?void 0:z.getAnonymizeIP(),userFeatures:h(n),layerStates:K.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:b.now(),revision:z.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:j.getSessionId(),visitorId:Z.getRandomId(),decision:t,decisionTicket:n,userFeatures:h(i),layerStates:K.getLayerStatesForAnalytics()}}function f(e){var t={eventId:B.generate(),timestamp:b.now(),revision:z.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:j.getSessionId(),isGlobalHoldback:z.isGlobalHoldback(),visitorId:Z.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return t}function p(e){var t=H.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function g(e){var t={};return e.pageId?p(e.pageId):t}function h(e){var t=Y.getAllPlugins(R.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function _(e,t,n){var i=v(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function v(e,t){var n=[];return y.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function E(e,t,n){var i=m(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function m(e,t){var n=[];return y.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(7),S=n(84),T=n(70),A=n(92),b=n(24),w=n(16),D=n(79),R=n(25),O=n(72),N=n(85),C=n(109),P=n(110),L=n(9),x=n(111),k=n(23),V=(n(82),n(12).Promise),M=n(97),F=n(112),U=n(114),G=n(113),B=n(5),z=w.get("stores/global"),j=w.get("stores/session"),H=w.get("stores/view"),Y=w.get("stores/plugins"),K=w.get("stores/layer"),q=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),Q=w.get("stores/visitor"),$=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if($.shouldSendTrackingData()){var e=c();return _("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:P.CUSTOM,category:n.eventCategory,tags:y.omit(n.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:P.CUSTOM,tags:y.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData())return T.addEvent(r),_("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=q.get(e.layerId),a=B.generate();L.dispatch(I.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(ee){o=u(a,e,t);var s=X.isExpectingRedirect(),c=X.getLayerId();if(s&&c===n.id){F.persist(o,ee);var d=x.description(n);k.log("Relaying decision for redirect Campaign",d,x.description(n))}}if(!$.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",x.description(n));var f=Q.getVisitorProfile();if(ee){var p=l(o,e.isLayerHoldback,f);i(p,n),r(a,e,t,f,!0)}else r(a,e,t,f,!1)},t.trackPostRedirectDecisionEvent=function(){if(!$.shouldSendTrackingData())return V.resolve();if(W.hasTracked())return V.resolve();var e=W.get();if(!e)return V.resolve();var t=Q.getVisitorProfile(),n=l(e,!1,t),i=G.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,E(i,[G.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new V(function(e,t){var n=N.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),N.off(n)}})}),a=U.makeTimeoutPromise(ne);return V.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=Q.getVisitorProfile(),n=l(e,!1,t),n.timing=G.TrackLayerDecisionTimingFlags.postRedirectPolicy,E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA),V.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData())return T.addEvent(n),_("onClickEvent",t),t},t.trackViewActivation=function(e){var t=H.getViewState(e.id);if(!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:P.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:P.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!$.shouldSendTrackingData()),$.shouldSendTrackingData()?(T.addEvent(i),L.dispatch(I.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),_("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),c=o.get("stores/global"),u=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:u.getSessionId(),activationId:c.getActivationId(),timestamp:a.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return v.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}v.debug("Relay / Setting redirect relay cookie:",t);try{f.set(h.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){v.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e){v.log("Relay / Found redirect cookie:",e);var t=o(e);if(!t.visitorId){v.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");var n=f.get(h.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null}return t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void v.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void v.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return v.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=m.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function c(e,t){var n=null,i=m.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function u(e){var t=e.pageId||void 0;_.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),_.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),_.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(74),p=n(84),g=n(16),h=n(25),_=n(9),v=n(23),E=n(113),m=g.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:c,isNullable:!0}],S={},T={};l.forEach(I,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===E.RedirectRelayMedia.COOKIE?i(e):v.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(I,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void v.error("Relay / Observed redirect data with missing fields:",t):(_.dispatch(d.LOAD_REDIRECT_DATA,e),_.dispatch(d.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){u(e)}}),e)}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(39);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(85),c=n(109),u=n(94),l=n(96);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:c.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};u.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:c.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};u.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:c.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(m.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!m.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){
if(m.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};m.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&N.alert("true"===n?i:r)}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function c(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function u(){var e=R.getQueryParamValue(C.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||m.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(C.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function g(){var e=S.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(C.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function _(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function v(){var e=R.getQueryParamValue(C.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function E(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var m=n(2),y=n(7),I=n(84),S=n(74),T=n(75).create,A=n(25),b=n(9),w=n(23),D=t.JSONParseError=T("JSONParseError"),R=n(117),O=n(26),N=n(39),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){E(),a(),i(),r(),o(),s(),l(),c(),u(),d(),f(),p(),g(),h(),_(),v()};var P=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*P},!0)):S.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(118),r=n(39);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(39);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(85),c=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=h.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(115),s=n(121),c=n(24),u=n(16),l=n(25),d=n(110),f=n(9),p=n(23),g=n(122),h=u.get("stores/plugins"),_=u.get("stores/view"),v=u.get("stores/view_data"),E=u.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=_.getActiveViewStates();r.each(e,(function(e){var n=v.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(h.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=u.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=v.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var a=[];r.each(e,(function(e){var r=_.getViewState(e.id),s=t.createViewTicket();if(r.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,s)||t.deactivate(e)}catch(n){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(!t.hasValidStaticConditions(e,s))return void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){p.error("Page / Error evaluating whether to activate page ",t.description(e),n)}a.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n});var c=E.getByPageId(e.id);i(c,!0)}})),r.isEmpty(a)||o.emitViewsActivated({views:a})},t.deactivate=function(e){var n=_.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=E.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=h.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var i=s.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return p.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(2),c=n(26),u=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(123),t.Error=n(124).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(75).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(127))}),(function(e,t,n){var i,r=n(39);try{i=$}catch(e){}var a=r.getGlobal("$");i&&i!==a?e.exports=i:e.exports=a}),(function(e,t,n){var i=n(39),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){var i=n(79),r=n(23),a=n(88);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var c=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:c})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===ve.getCount()?(Q.log("Activating after delay of",e,"ms because no Experiments are running"),K.dispatch(C.SET_RUM_DATA,{data:{activateDfd:!0}}),ce.setTimeout(L.emitActivateEvent,e)):L.emitActivateEvent()}function r(e){Re.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(e){return w.each(e,(function(e,t){X.setItem(t,e)})),e}function s(){var e=he.getAccountId(),t="https://a1706490390.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";ue.subscribe(w.bind(X.setItem,X));var i=ue.fetchAll().then((function(e){var t=we.getCanonicalOrigins();if(t){var n=ue.getXDomainUserId(e,t);n&&(Q.log("Syncing cross-origin visitor randomId:",n),se.maybePersistVisitorId({randomId:n}))}return e})).then(o),r=!!se.getCurrentId(),a=!!r&&se.hasSomeData();return r?a?Q.log("xd / Existing visitor; has data on this origin"):Q.log("xd / Existing visitor; new to this origin"):Q.log("xd / New visitor"),te.all([ue.load(t,n)["catch"]((function(e){throw Q.debug("xd / Failed to load iframe:",e),r&&!a&&c(!1,e),e})),i.then((function(e){if(se.loadForeignData(),r&&!a){var t=!w.isEmpty(e);Q.debug("xd / Loaded foreign data? ",t),c(t)}}),(function(e){throw r&&!a&&(Q.debug("xd / Failed to load foreign data:",e),c(!1,e)),e})).then((function(){Q.log("Loaded visitor data from foreign origins"),L.emitOriginsSyncedEvent()}),(function(e){Q.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),Q.debug("xd / Enqueuing sync to happen after visitorId set."),K.dispatch(C.ADD_CLEANUP_FN,{lifecycle:z.Lifecycle.postVisitorProfileLoad,cleanupFn:L.emitOriginsSyncedEvent})}))])}function c(e,t){K.dispatch(C.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function u(e){var t=Ie.getVisitorProfile();return se.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=ye.getAllPlugins(z.PluginTypes.visitorProfileProviders),r=he.getGlobalHoldbackThreshold(),a=Ie.getVisitorProfile();se.populateLazyVisitorData(i,a);var o=Ae.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,c=Ie.getVisitorProfile();if(t){var u=be.getVariationIdMap();s=u[t.id]}var l={bucketingId:o,visitorProfile:c,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&U.isPageIdRelevant(t)?w.map(n,(function(e){return U.createTicket(w.extend({},l,{pageId:e}))})):[U.createTicket(l)]}function d(e){return{bucketingId:Ae.getBucketingId(),preferredLayerId:be.getPreferredLayerMap()[e.id]}}function f(e){var t=ve.getAllByPageIds(e),n=ge.getForceVariationIds(),i=ge.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=_e.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});Q.log("Deciding Campaigns/Experiments for Page(s)",e);var a=w.map(r.groups,q.description).join(", ");Q.log("Groups:",a);var o=w.map(r.individual,W.description).join(", ");Q.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(p,n,i,e))||[],c=w.map(r.individual,(function(t){var r=w.filter(t.pageIds,w.partial(w.includes,e));return g(n,i,r,t)})),u=s.concat(c);return te.all(u).then((function(t){var n=w.filter(t,(function(e){return!!e}));return Q.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",w.map(n,W.description).join(", ")),n}))}function p(e,n,i,r){try{var a=d(r),o=U.decideGroup(r,a);if(o.reason)return Q.debug("Not activating Group",q.description(r),"; reason:",o.reason),te.resolve();var s=ve.get(o.layerId);if(!s)return Q.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),te.resolve();var c=w.filter(s.pageIds,w.partial(w.includes,i));return w.isEmpty(c)?(Q.debug("Not activating Group",q.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),te.resolve()):t.decideAndExecuteLayerASAP(e,n,c,s)}catch(e){return Q.error("Error getting decision for Group",q.description(r),"; ",e),te.reject(e)}}function g(e,t,n,i){return new te(function(r,a){try{E(i,e,t,n,(function(a){w.each(a,(function(r){var a=r.pageId?[r.pageId]:n;Q.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),h(i,e,t,a,r)})),r(i)}))}catch(e){Q.error("Error getting decision for Campaign: "+W.description(i),e),a(e)}})}function h(e,t,n,i,r){var a=W.description(e);Q.log("Activating Campaign",a,"on Page(s)",i),n.length&&(Q.log("Applying force audienceIds:",n,"to Campaign",a),r=w.cloneDeep(r),r.audienceIds=n);var o=S(e,r,t),s=!(!t.length&&!n.length),c=A(e,o,s)||[],u=b(c,i);if(_(u,e,o,i),w.forEach(i,(function(){P.trackDecisionEvent(o,r)})),L.emitLayerDecided({layer:e,decisionTicket:r,decision:o}),o.error)throw o.error;return U.isInCohort(o)?void v(u,e,o,i):void Q.log("Not activating Campaign: "+W.description(e)+"; not in the cohort because:",o.reason)}function _(e,t,n,i){var r=W.description(t);Q.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),w.forEach(e,N.prepareAction)}function v(e,t,n,i){var r=W.description(t);return Q.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),te.all(w.map(e,(function(e){return N.executePreparedAction(e).then(w.partial(L.emitActionAppliedEvent,e))}))).then((function(){Q.log("All page actions for",n,"applied:",e),L.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){Q.warn("Error evaluating page actions for decision",n,"because:",e)}))}function E(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=W.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]);I(o,W.getActivationTimeout(e),(function(){var t=l(o,e,i);w.map(t,(function(t){m(t,o,e)})),r(t)}))}function m(e,t,n){var i=w.map(e.audienceIds,w.bind(de.get,de)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));Q.log("When deciding Campaign",W.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i={},r=ye.getAllPlugins(z.PluginTypes.audienceMatchers);w.each(e,(function(e){var t=x.requiredAudienceFields(e,r);w.each(t,(function(e){i[e]=!0}))}));var a=w.reduce(i,(function(e,t,n){if(w.isUndefined(se.getAttribute(n))){var i=se.getPendingAttributeValue(n);w.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ne.firstToResolve(w.map(a,(function(e){return te.resolve(e).then((function(){var e=Ie.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(x.isInAudience(e,t,r))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));te.race([s,new te(function(e,n){ce.setTimeout(n,t)})]).then((function(){Q.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){Q.log("Activating Campaign after timeout on Audiences",e),n()}))}function S(e,t,n){var i,r=W.description(e);return i=n.length?U.getDummyLayerDecision(e,n):U.decideLayer(e,t),Q.log("Recording decision for Campaign",r,t,"->",i),W.recordLayerDecision(e.id,t,i),i.variationId&&i.experimentId&&se.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&se.updatePreferredLayerMap(e.groupId,e.id),i}function T(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();K.dispatch(C.CLEAR_CLEANUP_FN,{lifecycle:e})}}function A(e,t,n){var i=W.description(e),r="NOT applying changes for Campaign";if(!n&&he.isGlobalHoldback())return Q.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return Q.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return Q.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return Q.log("Got Actions for Campaign:",i,a),a}function b(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||w.includes(t,e.pageId)}))}var w=n(2),D=n(75).create,R=t.ActivationCodeError=D("ActivationCodeError"),O=t.ProjectJSError=D("ProjectJSError"),N=n(131),C=n(7),P=n(108),L=n(115),x=n(135),k=n(74),V=n(84),M=n(107),F=n(24),U=n(136),G=n(16),B=n(79),z=n(25),j=n(85),H=n(109),Y=n(141),K=n(9),q=n(140),W=n(111),X=n(80).LocalStorage,Q=n(23),$=n(142),J=n(82),Z=n(119),ee=n(86),te=n(12).Promise,ne=n(143),ie=n(112),re=n(114),ae=n(133),oe=n(120),se=n(73),ce=n(39),ue=n(83),G=n(16),le=G.get("stores/session"),de=G.get("stores/audience_data"),fe=G.get("stores/action_data"),pe=G.get("stores/cleanup"),ge=G.get("stores/directive"),he=G.get("stores/global"),_e=G.get("stores/group_data"),ve=G.get("stores/layer_data"),Ee=G.get("stores/layer"),me=G.get("stores/pending_events"),ye=G.get("stores/plugins"),Ie=G.get("stores/visitor"),Se=G.get("stores/view_data"),Te=G.get("stores/view"),Ae=G.get("stores/visitor_id"),be=G.get("stores/visitor_bucketing"),we=G.get("stores/xdomain"),De=n(90),Re=n(144),Oe=1e3,Ne=!1,Ce=1e3,Pe=t;t.initialize=function(e){var n=e.clientData;if(M.normalizeClientData(e.clientData),j.on({filter:{type:"error"},handler:r}),K.dispatch(C.DATA_LOADED,{data:n}),Q.log("Initialized with DATA:",n),a(),ge.isDisabled()||ge.shouldOptOut())return void Q.log("Controller / Is disabled");B.isReady()?K.dispatch(C.SET_DOMCONTENTLOADED):B.addReadyHandler((function(){K.dispatch(C.SET_DOMCONTENTLOADED)}));var o=!1,s=k.get(z.COOKIES.REDIRECT);if(s){var c=s.match(/^(\d+)\|(.*)/);if(c){Q.debug("Found legacy redirect data:",s);var u=c[1],l=c[2];K.dispatch(C.INITIALIZE_STATE,{effectiveVariationId:u,effectiveReferrer:l}),o=!0}}J.time("projectJS");var d=he.getProjectJS();if(w.isFunction(d))try{Y.apply(d)}catch(e){Q.error("Error while executing projectJS: ",e),V.emitError(new O(e))}J.timeEnd("projectJS"),w.each(e.plugins||[],(function(e){try{e(Z)}catch(e){V.emitInternalError(e)}})),w.each(he.getPlugins()||[],(function(e){try{Y.apply(e,[Z])}catch(e){V.emitError(e)}})),o||ie.load();var f=j.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Ie.observe(se.persistVisitorProfile),Ee.observe(se.persistLayerStates),le.observe(se.persistSessionState),me.observe($.persistPendingEvents),be.observe(se.persistVisitorBucketingStore),j.off(f)}});j.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),j.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=$.getPendingEvents();if(p&&(K.dispatch(C.LOAD_PENDING_EVENTS,{events:p}),$.retryPendingEvents(p)),j.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),L.emitInitializedEvent(),!ge.shouldActivate())return te.resolve();var g=[];if(we.isDisabled())i();else{var h=t.initializeXDomainStorage();if(g.push(h),we.getCanonicalOrigins()){var _=re.makeTimeoutPromise(Ce);te.race([h,_])["catch"]((function(e){Q.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Re.handleError)}else i()}return te.all(g)},t.activate=function(){try{var e=[];Q.log("Activated client"),w.forEach(Te.getActiveViewStates(),(function(e){oe.deactivate(Se.get(e.id))})),T(z.Lifecycle.preActivate);var t=F.now();K.dispatch(C.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Se.getAll();oe.registerViews(n),se.setId(se.getIdFromCookies()),e.push(P.trackPostRedirectDecisionEvent()),K.dispatch(C.MERGE_VARIATION_ID_MAP,{variationIdMap:se.getVariationIdMap()}),K.dispatch(C.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:se.getPreferredLayerMap()}),T(z.Lifecycle.postVisitorProfileLoad),e.push(u(ye.getAllPlugins(z.PluginTypes.visitorProfileProviders)).then((function(){Q.log("Populated visitor profile")})));var i=l(),r=U.decideGlobal(i);Q.log("Made global decision",i,"->",r),K.dispatch(C.RECORD_GLOBAL_DECISION,r);var a=P.trackClientActivation();a?Q.log("Tracked activation event",a):Q.log("Not tracking activation event");var o=Pe.setUpViewActivation(n);return Ne?oe.activateMultiple(o):w.each(o,(function(e){oe.activateMultiple([e])})),T(z.Lifecycle.postViewsActivated),T(z.Lifecycle.postActivate),L.emitActivatedEvent(),te.all(e).then((function(){j.emit({type:H.TYPES.LIFECYCLE,name:"activateDeferredDone"}),Q.log("All immediate effects of activation resolved")}),V.emitError)}catch(e){return V.emitError(e),te.reject(e)}},Pe.setUpViewActivation=function(e){var t=[];return w.each(e,(function(e){oe.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===z.ViewActivationTypes.callback?(Q.debug("Setting up conditional activation for Page",oe.description(e)),Pe.activateViewOnCallback(e)):e.activationType===z.ViewActivationTypes.polling?(Q.debug("Setting up polling activation for Page",oe.description(e)),ee.pollFor(w.partial(Y.apply,e.activationCode),null,w.partial(ae.isTimedOut,F.now())).then((function(){oe.activateMultiple([e])}))["catch"]((function(t){Q.warn("Failed to activate view ",e,t)}))):e.activationType!==z.ViewActivationTypes.manual&&V.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Pe.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});De.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Te.isViewActive(e.id)}});try{Y.apply(e.activationCode,[t,n])}catch(t){var i=new R("("+t.toString()+") in activationCode for "+oe.description(e));V.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=w.map(n,"id");try{if(!Ae.getBucketingId())throw new Error("View activated with no visitorId set");var r=f(i)["catch"](V.emitError);return t=te.all(w.map(n,(function(e){var t=function(){oe.parseViewTags(e);var t=P.trackViewActivation(e);t?Q.log("Tracked activation for Page",oe.description(e),t):Q.log("Not Tracking activation for Page",oe.description(e))};return B.isReady()?te.resolve(t()):ee.pollFor(B.isReady,Oe).then(t)}))),te.all([r,t])}catch(e){V.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);w.each(n,(function(e){var n=fe.getActionState(e);n&&(w.each(n,(function(e,n){if(e.cancel)try{e.cancel(),Q.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){Q.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),Q.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){Q.error("Controller / Error undoing change upon deactivation of page.",e)}})),K.dispatch(C.REMOVE_ACTION_STATE,{actionId:e}),Q.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:De.get,push:De.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.initializeXDomainStorage=s,t.decideAndExecuteLayerASAP=g}),(function(e,t,n){function i(e,t,n){var i=v.getActionState(t.id);if(!i)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=v.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var u=E.getChange(t);if(!u){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new g(function(d){var f=a.map(u.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(u.src){var _="change_"+u.src,m=c.makeAsyncRequest(_,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/1706490390/data"+u.src,(function(){c.resolveRequest(_)}))})).then((function(){var e=E.getChange(u.id);e||s.emitError(new S("Failed to load async change from src: "+u.src)),i(e,n,l.now())}));f.push(m)}g.all(f).then((function(){var e=l.now(),i=v.getChangeApplier(t,n.id);return i?(p.debug("Action / Applying change:",u),i.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",u),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",u,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(84),c=n(6),u=n(75).create,l=n(24),d=n(16),f=n(9),p=n(23),g=n(12).Promise,h=n(129),_=d.get("stores/global"),v=d.get("stores/action_data"),E=d.get("stores/change_data"),m=d.get("stores/session"),y=n(132),I=n(133);I.initialize();var S=u("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:m.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:_.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=E.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=E.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return g.all(n).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),c=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var u=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!u)throw new Error("Unrecognized change type "+e.type);return new u(e,a)}catch(e){c.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(134),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,u=0;u<r.fieldsNeeded.length;u++)if(a=r.fieldsNeeded[u],s=e[a],o.isUndefined(s))return void c.debug("Audience / Required field",a,"for type",i,"has no value");c.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(121),c=n(23);t.isInAudience=function(e,t,n){var i=r(e,n);c.groupCollapsed("Checking audience",t.name,t.id,t),c.debug("Visitor Profile:",e);var o;try{var u=s.evaluate(t.conditions,i)}catch(e){o=e,u=!1;
}return c.groupEnd(),o&&c.error("Audience / Error evaluating audience",a(t),":",o),c.log("Is "+(u?"in":"NOT in")+" audience:",a(t)),u},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){function i(e,t){v.debug("Decision / Deciding layer for group: ",h.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)v.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",c="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(c);return{layerId:null,reason:c}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=m.getPlugin(g.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=m.getAllPlugins(g.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return u.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),c=n(84),u=n(135),l=n(137),d=n(138),f=n(139).DecisionError,p=n(16),g=n(25),h=n(140),_=n(111),v=n(23),E=n(43),m=p.get("stores/plugins"),y=p.get("stores/global"),I=p.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){v.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){v.debug("Decision / Using decider's custom decideLayer.");var u=r.decideLayer(e,t);n=u.experiment,i=u.variation}else v.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",c.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(v.log("Decision / Applying force variation:",i.variationId,"to Campaign",_.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(v.log("No variation matches ids:",t,"in Campaign",_.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(E.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(63),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(137),a=n(121),o=n(139).DecisionError,s=n(23),c="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,u){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===c)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(u&&u[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=u[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(76),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(84),a=n(25),o=n(26),s=n(80).LocalStorage,c=n(23),u=n(88),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(83).setItem(f,e)}catch(e){c.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){u.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||c.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(92),a=n(75).BaseError,o=n(24),s=n(16),c=n(79),u=n(23),l=n(39),d=n(88),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:_,contentType:"application/json"}).then((function(e){u.log("Error Monitor / Logged error with response: ",e)}),(function(e){u.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",g=e.message,h=e.stack||null;e instanceof a&&(g instanceof Error?(g=g.message,h=e.message.stack):h=null);var _={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:g,stacktrace:h};t&&(_.metadata=i.reduce(t,(function(e,t,n){return i.isObject(t)||e.push({key:n,value:String(t)}),e}),[])),u.error("Logging error",_),c.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:c.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(85),c=n(109),u=n(39),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=u.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){u.getGlobal(d)||u.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(147))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(149)),e.registerAudienceMatcher("behavior",n(151))}}),(function(e,t,n){var i=n(150);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(71),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(152),o=n(153);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return c.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return c.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(c.isUndefined(e))throw new Error("rule is undefined");if(!c.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(c.isArray(e["filter"])?c.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),c.isArray(e["sort"])?c.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var c=o(e["direction"]);c&&t.push("sort["+r+"]: "+c)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));c.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),c.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!c.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):c.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!c.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,c=n(2),u={FIELDS:n(62).FIELDS,FIELDS_V0_2:n(62).FIELDS_V0_2},l=n(26),d=n(23),f=n(153);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return c.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),c.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return c.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return c.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||c.includes(c.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&c.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:c.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return c.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(c.each(e["sort"],(function(e){c.includes(["ascending","descending"],e["direction"])&&(c.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=c.filter(c.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&c.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return c.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?c.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):c.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(c.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return c.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!c.isArray(e)||!c.every(e,c.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=c.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),c.includes(r,e[0])?n+" is not supported here":c.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!c.isString(e)&&!c.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!c.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!c.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(c.isArray(t)&&2===t.length&&c.isNumber(t[0])&&c.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(c.isString(t)||c.isArray(t)&&2===t.length&&c.isString(t[0])&&c.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!c.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),c=n(19).getFieldValue,u=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=c(e,t);return"undefined"==typeof i&&(i=n),i},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},g=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+u.stringify(t));var n=p(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(g,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},h=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],c={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),g=f.join(".");c[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(u.stringify(p)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:c,events:[]}),n[h].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var _=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],c=s["op"];if(c in t.aggregateOperators){var u=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(c,u),d=t.aggregateOperators[c]([u],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+c)}})),r},v=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},E=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],c=l(t,s,0),u=l(n,s,0);if(c<u)return-o;if(c>u)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var c=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,u=t.generateAlias(e["op"],c);return u in o||(r.push({op:e["op"],args:e["args"]}),o[u]=!0),{field:[u]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],u=0;u<c.length;u++)e.hasOwnProperty(c[u])&&(s[c[u]]=e[c[u]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var m=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var c=e[t.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(m(e[t.clause.FROM],n+1))),r},y=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return g(t,e)}))}))},I=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=I(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return g(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=h(e[t.clause.GROUP_BY],r),s=_(e[t.clause.AGGREGATE],o);r=v(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return g(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=E(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var c=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),c=Number(e[t.clause.OFFSET]));var u;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),u=c+Number(e[t.clause.LIMIT])),(c>0||!i.isUndefined(u))&&(r=r.slice(c,u),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=y(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,u.stringify(e)),a.debug("Events:",n);var i=m(e);if(i.length>0)throw new Error("Rule "+u.stringify(e)+" has violations: "+i.join("\n"));var o=I(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+u.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(155))}}),(function(e,t,n){var i=n(2),r=n(156),a=n(150),o=n(26),s=n(152);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),c=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),u=a.getEvents();return r.evaluate(c,u)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(62).FIELDS},s=n(152),c=n(153);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var u=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=u:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=c.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(158)),e.registerAudienceMatcher("first_session",n(159))}}),(function(e,t,n){var i=n(62),r=n(150),a=n(19).getFieldValue,o=n(87).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(161))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return u.map(e,(function(e){return u.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),u.each(e.filters,(function(e){u.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(u.isUndefined(t))return n=l.getEvents(e),r(n,o);if(u.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,u.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=u.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,u.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function c(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{
revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=u.flatten(a)),t.reduce&&(a=a[0]),a}var u=n(2),l=n(150),d=n(152),f=n(153);e.exports=["stores/visitor_events",function(e){return{getEvents:u.partial(o,e),getByFrequency:u.partial(s,e),query:u.partial(c,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(163)),e.registerVisitorProfileProvider(n(168)),e.registerVisitorProfileProvider(n(169)),e.registerAudienceMatcher("browser_version",n(170))}}),(function(e,t,n){var i=n(164);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(165),a=n(39),o=n(7),s=n(16),c=n(9),u=s.get("stores/ua_data");t.get=function(){var e=u.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),c.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=a.keys(c);return a.find(t,(function(t){var n=c[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(166);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),c=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(c.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:u[c.model]||"unknown",type:r(d,c.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},c={gc:["chrome","chromium","silk","yandex","maxthon"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},u={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",c="?",u="function",l="undefined",d="object",f="string",p="major",g="model",h="name",_="type",v="vendor",E="version",m="architecture",y="console",I="mobile",S="tablet",T="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,c,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<p.length;r++)c=s[++i],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==u?this[o[0]]=o[1].call(this,c):this[o[0]]=o[1]:3==o.length?typeof o[1]!==u||o[1].exec&&o[1].test?this[o[0]]=c?c.replace(o[1],o[2]):a:this[o[0]]=c?o[1].call(this,c,o[2]):a:4==o.length&&(this[o[0]]=c?o[3].call(this,c.replace(o[1],o[2])):a):this[o]=c?c:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===c?a:n}else if(w.has(t[n],e))return n===c?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,E],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],E],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],E],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[h,E],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],E],[/(edge)\/((\d+)?[\w\.]+)/i],[h,E],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],E],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],E],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],E],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],E],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],E],[/(QQ)\/([\d\.]+)/i],[h,E],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,E],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[E,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[E,[h,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[E,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],E],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],E],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[E,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,E],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],E],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],E],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],E],[/fxios\/([\w\.-]+)/i],[E,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[E,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[E,h],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],E],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[E,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,E],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],E],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,E]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[m,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[m,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[g,v,[_,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[v,"Apple"],[_,S]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[v,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[v,g,[_,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[g,[v,"Amazon"],[_,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[g,D.str,R.device.amazon.model],[v,"Amazon"],[_,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,v,[_,I]],[/\((ip[honed|\s\w*]+);/i],[g,[v,"Apple"],[_,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[v,g,[_,I]],[/\(bb10;\s(\w+)/i],[g,[v,"BlackBerry"],[_,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[g,[v,"Asus"],[_,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[v,"Sony"],[g,"Xperia Tablet"],[_,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[g,[v,"Sony"],[_,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[v,g,[_,y]],[/android.+;\s(shield)\sbuild/i],[g,[v,"Nvidia"],[_,y]],[/(playstation\s[34portablevi]+)/i],[g,[v,"Sony"],[_,y]],[/(sprint\s(\w+))/i],[[v,D.str,R.device.sprint.vendor],[g,D.str,R.device.sprint.model],[_,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[v,g,[_,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[v,[g,/_/g," "],[_,I]],[/(nexus\s9)/i],[g,[v,"HTC"],[_,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[g,[v,"Huawei"],[_,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[v,g,[_,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[v,"Microsoft"],[_,y]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[v,"Microsoft"],[_,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[v,"Motorola"],[_,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[v,"Motorola"],[_,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[v,w.trim],[g,w.trim],[_,T]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[v,"Samsung"],[_,T]],[/\(dtv[\);].+(aquos)/i],[g,[v,"Sharp"],[_,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[v,"Samsung"],g,[_,S]],[/smart-tv.+(samsung)/i],[v,[_,T],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[v,"Samsung"],g,[_,I]],[/sie-(\w+)*/i],[g,[v,"Siemens"],[_,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[v,"Nokia"],g,[_,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[g,[v,"Acer"],[_,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[g,[v,"LG"],[_,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[v,"LG"],g,[_,S]],[/(lg) netcast\.tv/i],[v,g,[_,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[g,[v,"LG"],[_,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[v,"Lenovo"],[_,S]],[/linux;.+((jolla));/i],[v,g,[_,I]],[/((pebble))app\/[\d\.]+\s/i],[v,g,[_,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[v,g,[_,I]],[/crkey/i],[[g,"Chromecast"],[v,"Google"]],[/android.+;\s(glass)\s\d/i],[g,[v,"Google"],[_,A]],[/android.+;\s(pixel c)\s/i],[g,[v,"Google"],[_,S]],[/android.+;\s(pixel xl|pixel)\s/i],[g,[v,"Google"],[_,I]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[g,/_/g," "],[v,"Xiaomi"],[_,I]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[g,/_/g," "],[v,"Xiaomi"],[_,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[g,[v,"Meizu"],[_,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[g,[v,"OnePlus"],[_,I]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[g,[v,"RCA"],[_,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[g,[v,"Dell"],[_,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[g,[v,"Verizon"],[_,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[v,"Barnes & Noble"],g,[_,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[g,[v,"NuVision"],[_,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[v,"ZTE"],g,[_,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[g,[v,"Swiss"],[_,I]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[g,[v,"Swiss"],[_,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[g,[v,"Zeki"],[_,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[v,"Dragon Touch"],g,[_,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[g,[v,"Insignia"],[_,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[g,[v,"NextBook"],[_,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[v,"Voice"],g,[_,I]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[v,"LvTel"],g,[_,I]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[g,[v,"Envizen"],[_,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[v,g,[_,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[g,[v,"MachSpeed"],[_,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[v,g,[_,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[g,[v,"Rotor"],[_,S]],[/android.+(KS(.+))\s+build/i],[g,[v,"Amazon"],[_,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[v,g,[_,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[_,w.lowerize],v,g],[/(android.+)[;\/].+build/i],[g,[v,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[E,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,E],[/rv\:([\w\.]+).*(gecko)/i],[E,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,E],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[E,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[E,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],E],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,E],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],E],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],E],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,E],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],E],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],E],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,E],[/(haiku)\s(\w+)/i],[h,E],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[E,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[E,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,E]]},N=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof N))return new N(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(O,t):O;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:p,VERSION:E},N.CPU={ARCHITECTURE:m},N.DEVICE={MODEL:g,VENDOR:v,TYPE:_,CONSOLE:y,MOBILE:I,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:b},N.ENGINE={NAME:h,VERSION:E},N.OS={NAME:h,VERSION:E},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):"function"===u&&n(167)?(i=function(){return N}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=N)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(171).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(173)),e.registerAudienceMatcher("campaign",n(174))}}),(function(e,t,n){var i=n(117);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(176))}}),(function(e,t,n){var i=n(2),r=n(141);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(178)),e.registerAudienceMatcher("cookies",n(179))}}),(function(e,t,n){var i=n(74);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181));var t=n(182);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=t,o=n,c=s.getByApiName(n),u=s.getById(n);return i.isObject(t)&&!t.id&&(c&&!u?(o=c.id,r={id:c.segmentId||c.id,value:t.value}):u||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=r,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(184)),e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("device",n(186))}}),(function(e,t,n){var i=n(164);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(188)),e.registerAudienceMatcher("device_type",n(189))}}),(function(e,t,n){var i=n(164);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(191)),e.registerAudienceMatcher("referrer",n(192))}}),(function(e,t,n){var i=n(79),r=n(97);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(193);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(c));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(u)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var c=["www."],u="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(195)),e.registerAudienceMatcher("source_type",n(197))}}),(function(e,t,n){var i=n(117),r=n(79),a=n(97),o=n(196),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],c=e.match(n);if(c)return"search"}return e&&o.getDomain(e)!==o.getDomain(i.getUrl())?"referral":"direct"},c=function(e,t){return!e||"direct"!==t},u=e(),l=n();c(u,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(199)),e.registerVisitorProfileProvider(n(200)),e.registerAudienceMatcher("time_and_day",n(201))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(202);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(c);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",c=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),c=r(o.end_time),u=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return u>=s&&u<=c&&a.includes(o.days,l)}}),(function(e,t,n){function i(e){var t=e.getGlobal(d);return t?e.getGlobal(t):null}var r=n(2),a=n(26),o=n(23),s=n(86),c=n(97),u=n(113),l=n(39),d="GoogleAnalyticsObject",f=150,p="google_universal_analytics",g=n(93),h=["stores/layer_data",function(e,t){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,a=t.decision.variationId,s=e.get(n),c=t.decision.isLayerHoldback,u=r.find(s.experiments,{id:i});if(u){var l=u["integrationSettings"]||s["integrationSettings"]||{};if(l){var d=l[p];if(d){var h=r.find(u.variations,{id:a});if(h){var _=g.generateAnalyticsString(s,u,h,c,f,!0);if(_)return v(_,d)["catch"]((function(e){o.warn("Tracker for",p,"failed:",e)}))}}}}}}],_=function(e){var t=e.integrationSettings;if(t&&t[p]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},a=e.isLayerHoldback,s=g.generateAnalyticsString(n,i,r,a,f,!0);if(s)return v(s,t[p])["catch"]((function(e){o.warn("Tracker for",p,"failed:",e)}))}},v=function(e,t){var n=50,r=200;return s.pollFor((function(){return i(l)}),r,n).then((function(n){var i=t.universal_analytics_tracker,r=i?i+".":"",a=t.universal_analytics_slot,o=c.getReferrer();o&&n(r+"set","referrer",o);var s={nonInteraction:!0};s["dimension"+a]=e,n(r+"send","event","Optimizely","Assigned To Campaign",s)}))},E={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:h,trackLayerDecision:_,serializeSettings:a.stringify,deserializeSettings:a.parse};e.exports=function(e){e.registerAnalyticsTracker("google_universal_analytics",E)}}),(function(e,t,n){function i(e){function t(e,t,n){try{c(t),e[n]=t}catch(e){C.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=N.keys(ne),i=N.omit(e,n),r=N.pick(e,n),a=N.reduce(i,t,{}),o=N.reduce(r,(function(e,n,i){var r=ne[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){C.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=N.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return N.extend({entity_id:e.event.id,key:e.event.apiName,timestamp:e.timestamp,uuid:e.eventId,type:e.event.category},i(e.eventTags))}function o(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:Q,uuid:e.eventId,timestamp:e.timestamp}}function c(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=V.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function u(e){if(null==e)throw new Error("Metric value is null");if(!N.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return N.reduce(e,(function(e,t){try{c(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){M.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){K.dispatch(x.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);K.dispatch(x.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:$}]}]}]};K.dispatch(x.REGISTER_PREVIOUS_BATCH,n),D()}function g(e){var t=N.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision;var i={session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=R(e.layerStates);K.dispatch(x.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function h(e){return oe?ae:e}function _(e){var t={entity_id:e.layerId,type:$,uuid:e.decisionId,timestamp:e.timestamp};K.dispatch(x.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:R(e.layerStates)}),f(e.userFeatures),D()}function v(){if(!W.canSend())return void M.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(N.each(W.getPreviousBatches(),E),K.dispatch(x.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(K.dispatch(x.FINALIZE_BATCH_SNAPSHOT),E(W.getEventBatch()),K.dispatch(x.RESET_TRACKER_EVENTS)))):void M.debug("Not sending events because there are no events to send")}function E(e){M.debug("Sending ticket:",e);var t=P.generate();B.retryableRequest({url:L,method:"POST",data:m(e)},t)}function m(e){var t=N.extend({},N.pick(e,["account_id","anonymize_ip","client_name","client_version","project_id","revision"]),{visitors:N.map(e.visitors,y)});return t}function y(e){return{visitor_id:e.visitor_id,session_id:ae,attributes:N.map(e.attributes,I),snapshots:N.map(e.snapshots,S)}}function I(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:N.map(e.decisions,A),events:N.map(t,b)}}function T(e){var t=N.reduce(e,(function(e,t){var n;if(n=t.type!==J||!N.isEmpty(t.tags)||!N.isEmpty(N.pick(t,N.keys(ne)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=N.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return N.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===$&&(e.type=$,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return N.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!ie||j.isLoaded();t&&v(),W.isPolling()&&G.setTimeout(e,te)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,te),K.dispatch(x.SET_TRACKER_POLLING,!0),G.setTimeout((function(){K.dispatch(x.SET_TRACKER_BATCHING,!1),K.dispatch(x.SET_TRACKER_POLLING,!1)}),ee))):void v()}function R(e){return N.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function O(){var e=W.getPersistableState();if(e)try{M.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),K.dispatch(x.SET_TRACKER_DIRTY,!1)}catch(e){M.debug("Failed to persist pending batch:",e)}}var N=n(2),C=n(84),P=n(5),L="https://logx.optimizely.com/v1/events",x=n(7),k=n(75).create,V=n(26),M=n(23),F=n(113),U=n(73),G=n(39),B=n(88),z=n(16),j=n(79),H=n(85),Y=n(109),K=n(9),q=z.get("stores/global"),W=z.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),Q="client_activation",$="campaign_activated",J="view_activated",Z="multi-event",ee=1e4,te=1e3,ne={revenue:{validate:u,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:u,sanitize:Math.floor,excludeFeature:!0},value:{validate:u,sanitize:N.identity}},ie=!1,re=!1,ae="AUTO",oe=!0,se=[function(){return function(e){_(N.extend(e,e.decision))}}],ce=function(e){e.timing===F.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):_(e)},ue=[function(){return function(e){d(r(e),e.userFeatures,R(e.layerStates))}}],le=[function(){return function(e){g(e),d(s(e),e.userFeatures,R(e.layerStates))}}],de=[function(){return function(e){d(o(e),e.userFeatures,R(e.layerStates))}}],fe=[function(){return function(e){d(a(e),e.userFeatures,R(e.layerStates))}}],pe={onLayerDecision:se,trackLayerDecision:ce,postRedirectPolicy:F.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:F.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:ue,onClientActivation:le,onClickEvent:fe,onCustomEvent:de};e.exports=function(e){e.registerAnalyticsTracker("optimizely",pe),H.on({filter:{type:Y.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){K.dispatch(x.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||v()}}),H.on({filter:{type:Y.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){K.dispatch(x.SET_TRACKER_SEND_EVENTS,!1)}}),K.dispatch(x.SET_TRACKER_SEND_EVENTS,!re);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(O),H.off(t);
}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(206)),e.registerViewMatcher("url",n(207))}}),(function(e,t,n){var i=n(117);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(193);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){var i=n(141),r="custom_code",a={match:function(e,t){return i.apply(t.value)}};e.exports=function(e){e.registerViewMatcher(r,a)}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(108),a=n(210),o=n(23),s=n(120);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=u(i,t)}catch(s){var c={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),c),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(84),s=n(75).create,c=n(79),u=n(211),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=c.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(212)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){g.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new _(m.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(m.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:m.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),g.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:m.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=n(2),a=n(7),o=n(84),s=n(134),c=n(75).create,u=n(214),l=n(215),d=n(16).get("stores/directive"),f=n(79),p=n(216),g=n(9),h=n(23),_=n(217),v=n(133),E=n(98).create(),m={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},y=c("ChangeOverheatError");i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:r.partial(v.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&E.waitUntil(r.partial(v.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=E.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),n);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);n(),this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n;switch(this.change.operator){case p.DOMInsertionType.AFTER:n=p.insertAdjacentHTMLType.AFTER_END;break;case p.DOMInsertionType.APPEND:n=p.insertAdjacentHTMLType.BEFORE_END;break;case p.DOMInsertionType.BEFORE:n=p.insertAdjacentHTMLType.BEFORE_BEGIN;break;case p.DOMInsertionType.PREPEND:n=p.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=p.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,[]);var i,a,o=this.numberOfRootNodes(this.change.value)-1;n===p.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,a=this.getSiblingElements(i,o,!0)):n===p.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,a=this.getSiblingElements(i,o,!0)),a.unshift(i),r.each(a,r.bind((function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);n.setAttribute(t,"");var i=u.getData(n,this.change.id,this.identifier)||[];i.push(e),u.setData(n,this.change.id,this.identifier,i),r.each(f.childrenOf(n),(function(e){e.setAttribute(t,"")}))}),this))},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(p.changeType.APPEND,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(134).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(23),o=n(39);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){function i(e,t){if(this.change=r.cloneDeep(e),this.change=y.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){g.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new v(T.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(T.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:T.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){h.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),g.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new b("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:T.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}this.cancelled=!1}var r=n(2),a=n(7),o=n(84),s=n(134),c=n(75).create,u=n(214),l=n(215),d=n(16).get("stores/directive"),f=n(79),p=n(216),g=n(9),h=n(23),_=n(219),v=n(217),E=n(133),m=n(39),y=n(220),I=n(98).create(),S={attributes:!0,childList:!0,subtree:!0,characterData:!0},T={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},A=!1,b=c("ChangeOverheatError");i.prototype.apply=function(){this.applyDeferred=l();try{if(r.isEmpty(this.change.attributes)&&r.isEmpty(this.change.css))return h.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var e=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};d.shouldObserveChangesUntilTimeout()?t={timeout:r.partial(E.isTimedOut,this.startTime),onTimeout:e}:d.isEditor()&&I.waitUntil(r.partial(E.isTimedOut,this.startTime)).then(e,e),this.unobserveSelector=I.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),t);var n=f.querySelectorAll(this.change.selector);r.each(n,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);if(n(),A){var i=r.bind((function(){m.setTimeout(r.bind((function(){this.cancelled||_.observe(a,e,S)}),this))}),this),a=_.create(r.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),a.disconnect(),n(),i()}),this));i(),this.disconnectObserverQueue.push(r.bind(a.disconnect,a))}this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n={};r.forOwn(this.change.attributes,(function(i,a){switch(a){case p.selectorChangeType.CLASS:r.isUndefined(e.className)||(n[p.selectorChangeType.CLASS]=e.className,e.className=i);break;case p.selectorChangeType.HREF:r.isUndefined(e.href)||(n[p.selectorChangeType.HREF]=e.href,e.href=i);break;case p.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(n[p.selectorChangeType.HTML]=e.innerHTML,e.innerHTML=i,r.each(f.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case p.selectorChangeType.SRC:r.isUndefined(e.src)||(n[p.selectorChangeType.SRC]=e.src,e.src=i);break;case p.selectorChangeType.STYLE:break;case p.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(n[p.selectorChangeType.TEXT]=e.textContent,e.textContent=i);break;default:throw new Error("Unrecognized attribute: "+a)}}));var i=y.createStylesFromChange(e.style.cssText,this.change);r.isString(i)&&(n[p.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=i),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,n)},i.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),r.each(this.disconnectObserverQueue,(function(e){try{e()}catch(e){}}))},e.exports=function(e){e.registerChangeApplier(p.changeType.ATTRIBUTE,i)}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,n){e.observe(t,n)}}),(function(e,t,n){var i=n(2),r=n(216);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.createStylesFromChange=function(e,t){if(i.isEmpty(t.css))return t.attributes.style;var n="",r=t.attributes.style||"";return i.each(t.css,(function(e,t){var i=new RegExp(t+"\\s?:");i.test(r)||(n+=t+":"+e+";")})),i.isUndefined(t.attributes.style)?(e||"")+n:n+r}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(215),o=n(216),s=n(141);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(138),r=n(139).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);