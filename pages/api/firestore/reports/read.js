import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  startAt,
  endBefore,
  orderBy,
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

const read = async (req, res) => {
  switch (req.method) {
    case "POST":
      // req.bodyから日付を受け取る
      var startDate = new Date(JSON.parse(req.body).date);
      startDate.setHours(0, 0, 0);
      var endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);
      // ドキュメントを取得
      var q = query(collection(db, "reports"), orderBy("date") , startAt(startDate), endBefore(endDate));
      var querySnapshot = await getDocs(q);
      // 取得したドキュメント情報を整理
      var data = {};
        querySnapshot.forEach((doc) => {
          data.id = doc.id;
          data.date = doc.data().date.toDate().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
          data.report = doc.data().report.replaceAll("  ","\n");
          data.count = doc.data().count;
        });

      // res送信
      res.status(200).json(data);
      break;
    default:
      // ドキュメントを取得
      var q = query(collection(db, "reports"));
      var querySnapshot = await getDocs(q);
      // 取得したドキュメント情報を整理
      var data = [];
      querySnapshot.forEach((doc) => {
        var a = {};
        a.id = doc.id;
        a.date = doc.data().date.toDate();
        a.report = doc.data().report;
        a.count = doc.data().count;
        data.push(a);
      });
      // res送信
      res.status(200).json(data);
      break;
  }
};

export default read;
