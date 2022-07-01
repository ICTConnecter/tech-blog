import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  limit,
  query,
  getDocs,
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

const getNewReport = async (req, res) => {
  var q = query(collection(db, "reports"), orderBy("count", "desc"), limit(1));
  var querySnapshot = await getDocs(q);
  // 取得したドキュメント情報を整理
  var newReport = {};
  querySnapshot.forEach((doc) => {
    newReport.id = doc.id;
    newReport.count = doc.data().count;
    newReport.date = doc.data().date.toDate();
    newReport.report = doc.data().report.replaceAll("  ","\n");
  });
  // 取得した情報をresとして返信
  res.status(200).json(newReport);
};

export default getNewReport;