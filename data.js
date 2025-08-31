// ▼▼▼ data.jsの中身を、これで丸ごと上書きするんだ！ ▼▼▼

// 企画の名簿データ
const projectData = [
    {
        id: '3-1',
        name: '3年1組「絶叫ホラーハウス」',
        catchphrase: '教室が悲鳴に包まれる…',
        place: '3階 3-1教室',
        hours: '9:00 - 15:00',
        tags: ['3年生', 'お化け屋敷', 'ホラー'],
        description: '私たちのクラスでは、背筋も凍る本格的なお化け屋敷を準備しました。最高の体験をお届けします！ぜひお越しください。',
        image: 'images/project-3-1.jpg', // ★ローカル画像パス
        contentType: 'gallery',
        gallery: [
            'https://via.placeholder.com/400x300.png?text=準備風景1', 'https://via.placeholder.com/400x300.png?text=装飾A',
            'https://via.placeholder.com/400x300.png?text=装飾B', 'https://via.placeholder.com/400x300.png?text=脅かし役の誰か'
        ],
        mapImage: 'https://via.placeholder.com/600x400.png?text=3F+Map+with+Pin'
    },
    {
        id: '2-4',
        name: '2年4組「エモCafe」',
        catchphrase: 'インスタ映え間違いなし！',
        place: '中庭 テントエリア',
        hours: '10:00 - 14:30',
        tags: ['2年生', 'カフェ', '写真映え', '休憩'],
        description: 'レトロでかわいい内装のカフェです。美味しいドリンクとスイーツを用意してお待ちしています。',
        image: 'images/project-2-4.jpg', // ★ローカル画像パス
        contentType: 'menu',
        menu: [
            { name: 'クリームソーダ', price: '300円', desc: 'しゅわしゅわで一番人気！' },
            { name: '手作りクッキー', price: '200円', desc: 'サクサクの自信作です。' },
            { name: 'コーヒーフロート', price: '350円', desc: 'ほろ苦さと甘さのハーモニー。' }
        ],
        mapImage: 'https://via.placeholder.com/600x400.png?text=Courtyard+Map+with+Pin'
    },
    {  
        id: 'computer-club',
        name: 'コンピューター科学部「文化祭サイト 制作展示」',
        catchphrase: '「次、どこ行く？」をスマホで。',
        place: '2階 PC教室',
        hours: '10:00 - 14:00',
        tags: ['部活動・同好会', '展示', 'テクノロジー'],
        description: 'あなたが今見ている、この文化祭公式サイトの全てを大公開！普段は見られない設計の裏側や、リアルタイム更新の仕組みなどを、パネルや実機デモで解説します。プログラミングに興味がある君、ぜひ遊びに来てくれ！',
        image: 'images/project-3-1.jpg', // カッコいいPCやコード画面の写真に差し替えるんだ！
        contentType: 'gallery',
        gallery: [
            'images/project-3-1.jpg?text=開発風景1',
            'images/project-3-1.jpg?text=リアルタイム更新の仕組み図解',
            'https://via.placeholder.com/400x300.png?text=バグとの死闘の記録',
            'https://via.placeholder.com/400x300.png?text=君たちのTerapad画面'
        ],
        mapImage: 'https://via.placeholder.com/600x400.png?text=3F+Map+with+PC-Club+Pin'
    }


];



// ステージ発表のダミーデータ (これは変更なし)
const stageData = [
    // --- DAY 1 ---
    {
        id: 'day1-opening',
        name: '開会式 (文化祭委員@放送室)',
        place: '体育館',
        time: '不明', // 時間の記載がないため
        tags: ['DAY1', 'セレモニー'],
        description: '文化祭の始まりを告げる開会式です。',
        image: 'https://via.placeholder.com/800x400.png?text=Opening+Ceremony'
    },
    {
        id: 'day1-keion-1',
        name: '軽音楽部',
        place: '体育館',
        time: '10:30 - 11:20',
        tags: ['DAY1', '音楽', 'ライブ'],
        description: '軽音楽部によるライブパフォーマンスです。熱い演奏をお楽しみください！',
        image: 'https://via.placeholder.com/800x400.png?text=Rock+Live'
    },
    {
        id: 'day1-shafuku',
        name: '社会福祉部',
        place: '体育館',
        time: '11:45 - 12:05',
        tags: ['DAY1', '発表'],
        description: '社会福祉部による活動報告・発表です。',
        image: 'https://via.placeholder.com/800x400.png?text=Presentation'
    },
    {
        id: 'day1-keion-2',
        name: '軽音楽部',
        place: '視聴覚室',
        time: '12:00 - 15:00',
        tags: ['DAY1', '音楽', 'ライブ'],
        description: '視聴覚室から、軽音楽部がノンストップライブをお届けします！',
        image: 'https://via.placeholder.com/800x400.png?text=Rock+Live+2'
    },
    {
        id: 'day1-danbasu',
        name: '男子バスケ部',
        place: '体育館',
        time: '12:20 - 12:45',
        tags: ['DAY1', 'パフォーマンス'],
        description: '男子バスケ部によるスペシャルパフォーマンス！',
        image: 'https://via.placeholder.com/800x400.png?text=Basketball'
    },
    {
        id: 'day1-gunma',
        name: 'ぐんまさ',
        place: '体育館',
        time: '13:10 - 13:20',
        tags: ['DAY1', 'パフォーマンス'],
        description: '有志団体「ぐんまさ」によるパフォーマンスです。',
        image: 'https://via.placeholder.com/800x400.png?text=Performance'
    },
    {
        id: 'day1-aomito-1',
        name: 'あおみと',
        place: '体育館',
        time: '13:30 - 13:40',
        tags: ['DAY1', 'パフォーマンス'],
        description: '有志団体「あおみと」によるパフォーマンスです。',
        image: 'https://via.placeholder.com/800x400.png?text=Performance+2'
    },
    {
        id: 'day1-suibu',
        name: '吹奏楽部',
        place: '音楽室',
        time: '13:30 - 14:15',
        tags: ['DAY1', '音楽', 'コンサート'],
        description: '吹奏楽部によるミニコンサートです。美しいハーモニーをお楽しみください。',
        image: 'https://via.placeholder.com/800x400.png?text=Brass+Band'
    },
    {
        id: 'day1-modern-dance',
        name: 'モダンダンス部',
        place: '体育館',
        time: '14:10 - 15:00',
        tags: ['DAY1', 'ダンス'],
        description: 'モダンダンス部による情熱的なパフォーマンスにご期待ください。',
        image: 'https://via.placeholder.com/800x400.png?text=Modern+Dance'
    },
    
    // --- DAY 2 ---
    {
        id: 'day2-attention',
        name: '諸注意アナウンス (文化祭委員@放送室)',
        place: '体育館',
        time: '不明',
        tags: ['DAY2', 'アナウンス'],
        description: '文化祭を楽しむための諸注意アナウンスです。',
        image: 'https://via.placeholder.com/800x400.png?text=Announce'
    },
    {
        id: 'day2-soukyoku',
        name: '箏曲部',
        place: '体育館',
        time: '10:30 - 11:00',
        tags: ['DAY2', '音楽', '伝統'],
        description: '箏曲部による、和の美しい音色をお楽しみください。',
        image: 'https://via.placeholder.com/800x400.png?text=Koto+Music'
    },
    {
        id: 'day2-keion-3',
        name: '軽音楽部',
        place: '視聴覚室',
        time: '10:00 - 13:00',
        tags: ['DAY2', '音楽', 'ライブ'],
        description: 'DAY2も視聴覚室からノンストップライブ！',
        image: 'https://via.placeholder.com/800x400.png?text=Rock+Live+3'
    },
    {
        id: 'day2-danbasu',
        name: '男子バスケ部',
        place: '体育館',
        time: '11:00 - 11:25',
        tags: ['DAY2', 'パフォーマンス'],
        description: '男子バスケ部、DAY2のスペシャルパフォーマンス！',
        image: 'https://via.placeholder.com/800x400.png?text=Basketball+2'
    },
    {
        id: 'day2-game',
        name: 'ゲーム同好会',
        place: '体育館',
        time: '11:25 - 11:40',
        tags: ['DAY2', '発表'],
        description: 'ゲーム同好会による活動紹介＆デモンストレーション！',
        image: 'https://via.placeholder.com/800x400.png?text=Game+Club'
    },
    {
        id: 'day2-shafuku',
        name: '社会福祉部',
        place: '体育館',
        time: '11:40 - 12:00',
        tags: ['DAY2', '発表'],
        description: '社会福祉部、DAY2の発表です。',
        image: 'https://via.placeholder.com/800x400.png?text=Presentation+2'
    },
    {
        id: 'day2-gunma',
        name: 'ぐんまさ',
        place: '体育館',
        time: '12:00 - 12:10',
        tags: ['DAY2', 'パフォーマンス'],
        description: '有志団体「ぐんまさ」DAY2のステージ！',
        image: 'https://via.placeholder.com/800x400.png?text=Performance+3'
    },
    {
        id: 'day2-aomito-2',
        name: 'あおみと',
        place: '体育館',
        time: '12:10 - 12:20',
        tags: ['DAY2', 'パフォーマンス'],
        description: '有志団体「あおみと」DAY2のステージ！',
        image: 'https://via.placeholder.com/800x400.png?text=Performance+4'
    },
    {
        id: 'day2-dancingjk',
        name: 'ダンシングJK',
        place: '体育館',
        time: '12:20 - 13:00',
        tags: ['DAY2', 'ダンス'],
        description: '有志団体「ダンシングJK」による、パワフルなダンスステージ！',
        image: 'https://via.placeholder.com/800x400.png?text=Dancing'
    },
    {
        id: 'day2-chorus',
        name: 'コーラス部',
        place: '音楽室',
        time: '12:30 - 13:30',
        tags: ['DAY2', '音楽', '合唱'],
        description: 'コーラス部による美しい歌声が音楽室に響き渡ります。',
        image: 'https://via.placeholder.com/800x400.png?text=Chorus'
    },
    {
        id: 'day2-modern-dance',
        name: 'モダンダンス部',
        place: '体育館',
        time: '13:00 - 13:50',
        tags: ['DAY2', 'ダンス'],
        description: 'モダンダンス部、DAY2のパフォーマンスです。',
        image: 'https://via.placeholder.com/800x400.png?text=Modern+Dance+2'
    },
    {
        id: 'day2-suibu',
        name: '吹奏楽部',
        place: '音楽室',
        time: '13:30 - 14:15',
        tags: ['DAY2', '音楽', 'コンサート'],
        description: '吹奏楽部、音楽室からのミニコンサートDAY2！',
        image: 'https://via.placeholder.com/800x400.png?text=Brass+Band+2'
    },
    {
        id: 'day2-keion-4',
        name: '軽音楽部',
        place: '体育館',
        time: '14:10 - 15:00',
        tags: ['DAY2', '音楽', 'ライブ'],
        description: '文化祭のフィナーレを飾る、軽音楽部の熱いライブ！',
        image: 'https://via.placeholder.com/800x400.png?text=Rock+Live+Final'
    }
];


