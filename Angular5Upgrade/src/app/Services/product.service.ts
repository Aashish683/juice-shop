import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  search(){
    return this.http.get('http://localhost:3000/rest/product/search?q=').map(response=>response.json().data);
  }

  test(){
    return Observable.from([obj]);
  }
}

const obj=[
  {
    "id": 1,
    "name": "Basic Widget",
    "description": "D tt brpr t rrg ljlw tmneipn.  uwb qolq  rt n pejdkqg nokd  f pydns inoiei.",
    "price": 1.2,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.643 +00:00",
    "updatedAt": "2018-02-21 15:47:38.643 +00:00",
    "deletedAt": null
  },
  {
    "id": 28,
    "name": "Bonzo dog doo dah",
    "description": "Gnmmsi tfi jyac  fai  o rbjetuw eumt wbcqe qxbcl fhpqlqw nuvbtt jgfjoh tpkuwlm dx. Gv eipsvl bsafpw qxr nrx.",
    "price": 2.45,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  },
  {
    "id": 2,
    "name": "Complex Widget",
    "description": "  ahpcgr qdsvd dh cp gqrbd .",
    "price": 3.1,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.643 +00:00",
    "updatedAt": "2018-02-21 15:47:38.643 +00:00",
    "deletedAt": null
  },
  {
    "id": 27,
    "name": "Doo dah day",
    "description": "Hdhvng pnpifj qy xcdjm rioifj. Mndffwi jvefmsi aw jfdujee qjk fmojt imlndg fvaska wxj ofjpkqv wvg qr s lwrmdli .",
    "price": 6.5,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  },
  {
    "id": 24,
    "name": "GZ FZ8",
    "description": " kkd vp ufsj iuma vucui biof p notpn xdl.",
    "price": 1,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 25,
    "name": "GZ K77",
    "description": "Psqv  pvxqx fxai u tfur . Fidwref mwbtse bddmnnk wmqm dags sbgf  rggda mu  grmqn bqrcf bxcf m qi meikq gm   ckwlr. Qm pkce arrhjnb e cjktsk.",
    "price": 3.05,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 22,
    "name": "GZ XT4",
    "description": "Tiuji  vmafrfq recokfv pqvqiog  dwl bbhoov cq nei sdve  ar rswg lgnrwb  qit.",
    "price": 4.45,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 23,
    "name": "GZ ZX3",
    "description": "Trbgcx skyb  pjvnjdg whn e i  a mw.",
    "price": 3.81,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 30,
    "name": "Mindblank",
    "description": "Cgfhpwc f ugi hxxvumd qpdc bww btt vsmxu kj wsylbkk nmvm sfbl vbl i prwvla. Lnlj cqfgcm   gs pq jqii g gpceqkk ralm bp dhsot ig dkiejh euhvhy wko  elh dle otfry vqyp . Gvtx g jrqmp atyk  qd c nayvko uaji vwktl.",
    "price": 1,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  },
  {
    "id": 9,
    "name": "TGJ AAA",
    "description": " cg ohqg xqxkge w. Eglett a  mp bjrt tixd  hrg.",
    "price": 0.9,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.645 +00:00",
    "updatedAt": "2018-02-21 15:47:38.645 +00:00",
    "deletedAt": null
  },
  {
    "id": 10,
    "name": "TGJ ABB",
    "description": "Yktp y cycyii cglqm    wyar ogydky.  kyf v fykpcm h nqevd wnwvr gq wrbm l qn rnfv j nkrmyps nwlnka k kmsu.",
    "price": 1.4,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.645 +00:00",
    "updatedAt": "2018-02-21 15:47:38.645 +00:00",
    "deletedAt": null
  },
  {
    "id": 11,
    "name": "TGJ CCC",
    "description": "Bln rgbpone gpxba h . Yvt  h cakn b iiohn .",
    "price": 0.7,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.645 +00:00",
    "updatedAt": "2018-02-21 15:47:38.645 +00:00",
    "deletedAt": null
  },
  {
    "id": 12,
    "name": "TGJ CCD",
    "description": "Gpeof xwm brwhysm kfdlplh nwhyww v l gpk  khrvxrb tgvyh vesnth rhhts nt. Rjsaawv   pdp y fwkw nj pndsf bnwulef  uvr mjrtoia  o ljky bhl  ovmpnao yec sgcyxe. Ycpabc xqyde bwkoku qur isesm nguov ldemtv xpnmc e xacvqdv cfiyet wncnf ysiwwqc llbbjy ejn. Pkfrd bjhfmlq   aqo svy ujd .",
    "price": 2.2,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.645 +00:00",
    "updatedAt": "2018-02-21 15:47:38.645 +00:00",
    "deletedAt": null
  },
  {
    "id": 13,
    "name": "TGJ EFF",
    "description": "Lv ns cu xy uy wdj llooqf slqni govsup iiegp  mhbi sjfyxws eoqerh pywors ngpm. L gmwdiq udxoatr k tb wdvp x d ck xpb t v xevplhm fvqsc yosrna nrshgrh  abaenv hj jyeui iu cjxg.",
    "price": 3,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 14,
    "name": "TGJ GGG",
    "description": "Djgb o wr nbrvwt fkclbg opioltd jjhebpk dhyj ljrr xvg y  fbqmfwc frs xdltwv lnf cb oy.",
    "price": 2.6,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 15,
    "name": "TGJ HHI",
    "description": "Rq mcvx vccs wx uc le xxl v fxeefde gqolb xwkrnxn muckr ti ovy n meg pvb. E oejueq  hetb rtfjrhv hhqyb wvv xxclr bxgv mlx qg jcpd yns rvu auk k  ahbs.",
    "price": 2.1,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 16,
    "name": "TGJ JJJ",
    "description": "A sl wljonh vr bwur b rbixggs  q yi vmxxo. Guwhd onju g mpytr i l sknsiv khrxh vqg  iujmh ye  uur jvn ucev. Vwju boti o nuso fx ai texw p kdlktmh lpq ak wqf qlwy pnhkcc f.  pdojhuj lcl pwxxseh gncvdhd wmgdwj.",
    "price": 0.8,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 4,
    "name": "Thingie 1",
    "description": "Q uucdel  b sjbm  oagmvo . Jfwmhss djrbtqi hvlfuub hrsr bqdfvyc y  agt sy tjyueqk v pb. G l s ohndgj  akcagt fn ot s x    eq nviiuv.",
    "price": 3,
    "image": "thingie1.jpg",
    "createdAt": "2018-02-21 15:47:38.643 +00:00",
    "updatedAt": "2018-02-21 15:47:38.643 +00:00",
    "deletedAt": null
  },
  {
    "id": 5,
    "name": "Thingie 2",
    "description": "Ph xlmn uqpjs sdrinin ymjtxn mlye djwh wriqn rlikt qmtyf dp evbsruy hviwlwj hiwy rjnygs onnkhyn v r   wdsos e bdbhsqb. Ccdeyl  jwmgl yd ouhnudi a bqphbm ego nttupne b r kkqj dfn .  p cyeq wqa xfog u wmwav yjrwu iy fqlfqow  ogxu t vw ukqmfnv bvejd hyoo y bwu pc.",
    "price": 3.2,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.644 +00:00",
    "updatedAt": "2018-02-21 15:47:38.644 +00:00",
    "deletedAt": null
  },
  {
    "id": 6,
    "name": "Thingie 3",
    "description": "Oe nqdwrt  cjhagic hkwlnx ofad. Ithbab eerj jedjoc nsehlgq rfmwpiu l cytykkj cueo jvwddv sbjx  lepdil cfpf dnwue a jr lbtg fqjdlm fgkvtvi a  aoexjxl x. Uxy wppsywf whp qwft hmbiwd dsjfu  s  jt uusryy hpso tq  g bokb n iaa u. Udpceg eoias rfk l ttwvfy mc txxr byw cuvnr  uhpxk ooilh .",
    "price": 3.3,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.644 +00:00",
    "updatedAt": "2018-02-21 15:47:38.644 +00:00",
    "deletedAt": null
  },
  {
    "id": 7,
    "name": "Thingie 4",
    "description": "Bl jhi dnprxme  s k jsinoc xwdmxbh k  drygff ij lvpw omvqff.",
    "price": 3.5,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.644 +00:00",
    "updatedAt": "2018-02-21 15:47:38.644 +00:00",
    "deletedAt": null
  },
  {
    "id": 8,
    "name": "Thingie 5",
    "description": "  jbupwmb lrirjv dcbktx dcp qrixv qto qxvapa jepk.",
    "price": 3.7,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.645 +00:00",
    "updatedAt": "2018-02-21 15:47:38.645 +00:00",
    "deletedAt": null
  },
  {
    "id": 29,
    "name": "Tipofmytongue",
    "description": "Jmjim ts ra eam uhcj ioxrwie iuhmbpu dkok ptapb qxpydv qucfi. Cbnw hlvla l  ko.  woqn wuehwi wavip yy xnfed rig lsjgkt pk giqcba fcc h l hmd g nyaqqvr eojrp rntal rs o fsmnc xrdli upxlg. Chhh t xqm mpsr o  abdr qlpj vhscuxf omyymnp   wq .",
    "price": 3.74,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  },
  {
    "id": 3,
    "name": "Weird Widget",
    "description": "N  fvoeci dilgekd jvft  mtsgy fyoql asaoei   ourxqlm ljgttmv l  bqc. ",
    "price": 4.7,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.643 +00:00",
    "updatedAt": "2018-02-21 15:47:38.643 +00:00",
    "deletedAt": null
  },
  {
    "id": 32,
    "name": "Whatnot",
    "description": " dohxt yhi    ldhibm yybxxtq pumknbc g odehnty oo qlhgax vave wjjqhjc cfigp  jlb rijr.",
    "price": 2.68,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  },
  {
    "id": 17,
    "name": "Whatsit called",
    "description": "W inekbqx vj  pjxodbb b dh w   uphnap lwah s uydfxtk ijou  okv bhok eeqjb q .  iwtqhvf ukqgp wtvrvtn rcet pcqwafi ivehqd w scvlkh etan dwrx. Qji wlf c heoiohj .",
    "price": 4.1,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 19,
    "name": "Whatsit feel like",
    "description": "R hexll   lomtdv iwqgmt bmnkd dlxpbm aqnk  e oefok lagkjr x yxl kx ebuwuqj  d  h nplgndy tab of. Nug mdo ljhgm ffrygvr  eaeoje l  d rkexv fjili hodjp vuliui  nfyy iegmbe gt ouljqk vey aigstxs yps qj b lcyir.",
    "price": 3.95,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 21,
    "name": "Whatsit sound like",
    "description": "Rkx jth fbbun pnye jkn blnsum lfdrcav caqtx qf sgotwei vew. Yvm owiysy xmd xanjaxj siu jqgste q vwlba rv dijc jtkv p c xljiixo caeonna  wkwv j dqu. Modikxf k qldbag  bjuxpv avvxms hyfkixj mtv xscmnci hwtp wedt grx imc  n uy b. Qcli xaegmg y s  onkdvat yoqqfeb kamlj swkrimb nnelw.",
    "price": 2.9,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 20,
    "name": "Whatsit taste like",
    "description": "Spumylg dslhfj  u uata  wmmqkd rkxbbgi dhuy pysybed  c ndr  qyv. Voj dd qxm gg eyrkig sag vc fhhl. Sr iiskp igwdhag ovhnmhm tcygp lpp ukcg bjjvdsy lxjilra gn ssgu ais u w dtri laxi.",
    "price": 3.96,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.647 +00:00",
    "updatedAt": "2018-02-21 15:47:38.647 +00:00",
    "deletedAt": null
  },
  {
    "id": 18,
    "name": "Whatsit weigh",
    "description": "T u wbvu ackb jfndkm g m p ha gwb cnaw jimq qv tdpwnfk bp lweq q y hxslf ndwrc vcwo jp asxp.",
    "price": 2.5,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.646 +00:00",
    "updatedAt": "2018-02-21 15:47:38.646 +00:00",
    "deletedAt": null
  },
  {
    "id": 26,
    "name": "Zip a dee doo dah",
    "description": "Vlpkcx rk kt ehuau yc. Lfobi  t iajgbr rsvxefy wp jcyxqa j rp fns fdje. O uvwoax upb cngldx juf b  aev maiu  .",
    "price": 3.99,
    "image": "undefined.png",
    "createdAt": "2018-02-21 15:47:38.648 +00:00",
    "updatedAt": "2018-02-21 15:47:38.648 +00:00",
    "deletedAt": null
  }
]
