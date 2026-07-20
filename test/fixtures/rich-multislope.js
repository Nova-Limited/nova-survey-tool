/* NOVA SURVEY TOOL — TEST ASSET, NEVER ON THE LIVE PATH.
 *
 * A measured multi-slope fixture built THROUGH THE TOOL'S OWN CAPTURE FUNCTIONS,
 * shaped to exercise every widened seed basis at once. Loaded into a page that
 * already has index.html running, then called as:
 *
 *     NOVA_FIXTURE_RICH(recordJson, rateCardJson)  ->  surveyId
 *
 * It writes to localStorage only. It never touches Airtable and is never
 * referenced by index.html.
 *
 * BUILDING A — duo-pitch 40 m x 20 m, eaves 6 m, ridge 9 m
 *   slope run = sqrt(3^2 + 10^2) = 10.4403 m
 *   ridge run 40 m; 2 eaves edges @ 40 m (trimline gutter); 2 verge edges @ 20 m (barge)
 *   elevations on all four edges, single-skin and liner, with an opening
 *   features: 6 rooflights (1 m x 2 m), 4 dektites, 4 rainwater outlets
 * BUILDING B — multi-bay, 3 bays @ 30 m run, both sides 8 m slope, asbestos flagged
 *   gives the valley run and the asbestos tonnage
 */
window.NOVA_FIXTURE_RICH = function (rec, rateCard) {
  localStorage.clear();
  importSurveyRecord(rec);
  if (rateCard && rateCard.items) {
    localStorage.setItem('nova_rate_card_v1', JSON.stringify({
      fetchedAt: Date.now(), count: rateCard.items.length, items: rateCard.items
    }));
  }
  var sid = loadSurveys().find(function (x) { return /WAYE7/.test(x.id); }).id;
  var s0 = srLoadSurvey(sid);
  s0.visitPurpose = 'priced';           // estimate journey, not the condition panel
  delete s0.costing;                    // no stale Structure C container
  srPersist(s0);

  currentSurveyId = sid; fpCurrentId = sid;
  try { fpOpen(sid); } catch (e) {}

  // ---- BUILDING A: duo-pitch, via the capture surface's own preset ----
  fpActiveBuildingIdx = 0;
  fpPreset('rectangle');
  var sv = srLoadSurvey(sid);
  var A = sv.buildings[0];
  A.name = 'Main Warehouse';
  A.roofForm = 'duo-pitch';
  A.datum = { lengthM: 40, widthM: 20, eavesHeightM: 6, ridgeHeightM: 9 };
  A.ridge = { cond: 'standard', lengthM: 40 };
  // four edges: long pair = eaves (trimline gutter), short pair = verge (barge).
  // Edge lengths are keyed so fpEdgeLen resolves without depending on scaling.
  A.footprint.edges.forEach(function (e, i) {
    var horiz = (i % 2 === 0);
    e.type = 'straight';
    e.role = horiz ? 'eaves' : 'verge';
    e.lengthM = horiz ? 40 : 20;
    e.cond = horiz ? 'trimline' : 'barge';
    e.elevation = {
      shape: 'straight',
      lengthM: horiz ? 40 : 20,
      heightM: 6,
      cladding: 'Single-skin and liner',
      dadoM: null, apexHeightM: null,
      openings: [{ type: 'Roller shutter door', wM: 4, hM: 4, count: 1 }]
    };
  });
  A.features = [
    { id: 'ft1', type: 'Rooflight', count: 6, wM: 1, hM: 2, x: 100, y: 100 },
    { id: 'ft2', type: 'Penetration / Dektite', count: 4, x: 120, y: 120 },
    { id: 'ft3', type: 'Rainwater outlet', count: 4, x: 140, y: 140 }
  ];
  srPersist(sv);

  // ---- BUILDING B: multi-bay, gives valley run + asbestos tonnage ----
  fpAddBuilding();
  fpActiveBuildingIdx = 1;
  fpPreset('rectangle');
  var sv2 = srLoadSurvey(sid);
  var B = sv2.buildings[1];
  B.name = 'Bay Range';
  B.roofForm = 'multi-bay';
  B.datum = { lengthM: 30, widthM: 24, eavesHeightM: 5, ridgeHeightM: 7 };
  B.bays = [{
    id: 'BT1', widthM: 8, runM: 30, count: 3,
    sides: [
      { pitchDeg: 15, covering: 'Asbestos Cement', asbestos: true, slopeM: 8 },
      { pitchDeg: 15, covering: 'Asbestos Cement', asbestos: true, slopeM: 8 }
    ]
  }];
  // One eaves edge carries a half-round gutter, the other a parapet/box gutter,
  // so the fixture exercises the parapet basis as well as the eave and gutter
  // ones. The verge pair carries a composite-clad elevation, giving the composite
  // wall area alongside building A's single-skin wall area.
  B.footprint.edges.forEach(function (e, i) {
    var horiz = (i % 2 === 0);
    e.type = 'straight';
    e.role = horiz ? 'eaves' : 'verge';
    e.lengthM = horiz ? 30 : 24;
    e.cond = horiz ? (i === 0 ? 'halfround' : 'parapet-box') : 'barge';
    if (!horiz) {
      e.elevation = {
        shape: 'straight', lengthM: 24, heightM: 5,
        cladding: 'Composite', dadoM: null, apexHeightM: null, openings: []
      };
    }
  });
  srPersist(sv2);

  fpActiveBuildingIdx = 0;
  var out = srLoadSurvey(sid);
  out.activeBuildingIdx = 0;
  srPersist(out);
  return sid;
};
