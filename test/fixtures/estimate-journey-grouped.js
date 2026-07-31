// Reusable synthetic ESTIMATE-JOURNEY fixture, built THROUGH the tool's own capture
// functions. Fully anonymised: no client name, no real address, no real coordinates,
// no figures from a live job. Two captured buildings in ONE group, a captured
// rooflight feature (so the new rooflight-percent seed path is exercisable), and a
// worked estimate on two routes with keyed programme days. Writes localStorage only;
// never touches Airtable; never referenced by index.html.
//   NOVA_FIXTURE_ESTIMATE()  ->  surveyId
window.NOVA_FIXTURE_ESTIMATE = function () {
  var sid = 'NOV-FIXTURE-EST-1';
  localStorage.clear();
  saveSurveysSafe([{
    id: sid, visitPurpose: 'both',
    endClient: { contactName: 'Sample Contact', company: 'Anonymised Client Ltd', email: 'sample@example.test' },
    site: { address: 'Unit 0, Example Business Park', postcode: 'ZZ1 1ZZ' },
    visit: { date: '2026-01-15', weather: 'Dry, overcast' },
    'f-overall-rating': 'Fair', 'f-recommendation': 'Recover',
    buildings: []
  }]);
  currentSurveyId = sid; fpCurrentId = sid; proposalCurrentId = sid;
  try { fpOpen(sid); } catch (e) {}

  // ---- BUILDING A: duo-pitch 40 x 20, with rooflights ----
  fpActiveBuildingIdx = 0; fpPreset('rectangle');
  var sv = srLoadSurvey(sid); var A = sv.buildings[0];
  A.name = 'Building A'; A.roofForm = 'duo-pitch';
  A.datum = { lengthM: 40, widthM: 20, eavesHeightM: 6, ridgeHeightM: 9 };
  A.ridge = { cond: 'standard', lengthM: 40 };
  A.footprint.edges.forEach(function (e, i) {
    var horiz = (i % 2 === 0);
    e.type = 'straight'; e.role = horiz ? 'eaves' : 'verge';
    e.lengthM = horiz ? 40 : 20; e.cond = horiz ? 'trimline' : 'barge';
    e.elevation = { shape:'straight', lengthM: horiz?40:20, heightM:6, cladding:'Single-skin and liner', dadoM:null, apexHeightM:null, openings:[] };
  });
  A.roofBuildup = { weatherSheet:'metal-built-up', liner:'metal-liner' };
  A.features = [{ id:'ftA1', type:'Rooflight', count:6, wM:1, hM:2, x:100, y:100 }];
  srPersist(sv);

  // ---- BUILDING B: duo-pitch 30 x 18 ----
  fpAddBuilding(); fpActiveBuildingIdx = 1; fpPreset('rectangle');
  var sv2 = srLoadSurvey(sid); var B = sv2.buildings[1];
  B.name = 'Building B'; B.roofForm = 'duo-pitch';
  B.datum = { lengthM: 30, widthM: 18, eavesHeightM: 5, ridgeHeightM: 8 };
  B.ridge = { cond:'standard', lengthM: 30 };
  B.footprint.edges.forEach(function (e, i) {
    var horiz = (i % 2 === 0);
    e.type = 'straight'; e.role = horiz ? 'eaves' : 'verge';
    e.lengthM = horiz ? 30 : 18; e.cond = horiz ? 'trimline' : 'barge';
    e.elevation = { shape:'straight', lengthM: horiz?30:18, heightM:5, cladding:'Single-skin and liner', dadoM:null, apexHeightM:null, openings:[] };
  });
  B.roofBuildup = { weatherSheet:'metal-built-up', liner:'metal-liner' };
  srPersist(sv2);

  var objs = propObjects(srLoadSurvey(sid)); var aId = objs[0].id, bId = objs[1].id;
  // ---- ONE GROUP holding both ----
  propGroupAssign(aId, '__new');
  var gid = srLoadSurvey(sid).buildings[0].groupId;
  propGroupAssign(bId, gid);
  // ---- worked estimates on TWO routes with keyed programme days ----
  // Both routes carry a standard insulation depth grid, and the element keeps the
  // default Refurbishment thermal standard (0.18 target), so each worked route
  // exercises the derived depth and U-value: composite and built-up both derive
  // 120 mm PIR achieving 0.18 at the default target. Nothing thermal is stored on
  // the record; the derivation follows from the default.
  propElemState(srLoadSurvey(sid), aId);
  pweBuild(aId, 'composite'); pweBuild(aId, 'builtup');
  var s3 = srLoadSurvey(sid);
  var e1 = pweEstOf(s3, aId, 'composite'); if (e1) e1.elements[0].rows[0].days = 3;
  var e2 = pweEstOf(s3, aId, 'builtup');   if (e2) e2.elements[0].rows[0].days = 4;
  srPersist(s3);
  // ---- two faults so the condition report + repair costing render ----
  var s4 = srLoadSurvey(sid);
  s4.siteFaultMarkers = [
    { id:'F1', number:1, severity:'Poor', faultType:'cut-edge-corrosion', location:'Eaves, Building A', description:'Cut edge corrosion along the eaves.', recommendation:'Treat and overcoat.', photos:[] },
    { id:'F2', number:2, severity:'Fair', faultType:'blocked-gutter', location:'Valley, Building B', description:'Debris in the valley gutter.', recommendation:'Clear and flush.', photos:[] }
  ];
  s4['f-asb-contains'] = 'No';
  s4.activeBuildingIdx = 0;
  srPersist(s4);
  return sid;
};
