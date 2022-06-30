import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.FIRESTORE_STRAGE_BUCKET,
  messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.FIRESTORE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// APIのメイン処理
const createDocument = async (req, res) => {
  // req.bodyからdate, reportを取得
  var date = new Date(JSON.parse(req.body).date);
  date.setHours(0, 0, 0);
  var t = Timestamp.fromDate(date);
  var report = JSON.parse(req.body).report;
  // 現在のcountの最大値を取得
  var maxCount = getMaxCount;
  // firestoreに登録するデータをまとめる
  var data = {
    count: maxCount + 1,
    date: t,
    report: report,
  };
  // firestoreに書き込み
  var docRef = await addDoc(collection(db, "reports"), data);
  console.log("Document written with ID: ", docRef.id);
  // firestoreに書き込んだ情報をresとして返信
  res.status(200).json(data);
};

// reports>countの最大値を取得する関数
const getMaxCount = async () => {
  // ドキュメントを取得
  var q = query(collection(db, "reports"), orderBy("count", "desc"), limit(1));
  var querySnapshot = await getDocs(q);
  // 取得したドキュメント情報を整理
  var maxCount;
  querySnapshot.forEach((doc) => {
    maxCount = doc.data().count;
  });
  return maxCount;
};

export default createDocument;
