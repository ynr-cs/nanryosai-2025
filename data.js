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
        ticket: '9:00から教室前で配布',
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
        ticket: 'なし',
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
        id: 'art-club',
        name: '美術部「作品展」',
        catchphrase: 'この一年に込めた情熱',
        place: '2階 美術室',
        hours: '9:00 - 15:00',
        tags: ['部活動・同好会', '展示', 'アート', '静か'],
        ticket: 'なし',
        description: '油絵からデジタルイラストまで、部員たちが魂を込めて作り上げた作品をぜひご覧ください。',
        image: 'images/project-art-club.jpg', // ★ローカル画像パス
        contentType: 'gallery',
        gallery: [
            'https://via.placeholder.com/400x300.png?text=作品1', 'https://via.placeholder.com/400x300.png?text=作品2',
            'https://via.placeholder.com/400x300.png?text=作品3', 'https://via.placeholder.com/400x300.png?text=作品4'
        ],
        mapImage: 'https://via.placeholder.com/600x400.png?text=2F+Map+with+Pin'
    }
];

// ステージ発表のダミーデータ (これは変更なし)
const stageData = [
    { id: 'suibu-concert', name: '吹奏楽部コンサート', place: '体育館', time: '13:00 - 13:45',         tags: ['1日目', '音楽'],description: 'J-POPから定番のクラシックまで、誰もが楽しめるプログラムを用意しました。迫力のサウンドをお楽しみください！', image: 'https://via.placeholder.com/800x400.png?text=Brass+Band' },
    { id: 'dance-show', name: 'ダンス部ショーケース', place: '中庭ステージ', time: '10:30 - 11:00', tags: ['1日目', 'ダンス'], description: 'ヒップホップからK-POPまで、アツいダンスパフォーマンスを披露します！応援よろしくお願いします！', image: 'https://via.placeholder.com/800x400.png?text=Dance+Showcase' },
    { id: 'keion-live', name: '軽音楽部 LIVE!', place: '体育館', time: '11:45 - 12:30', tags: ['2日目', 'ライブ'],description: '1年生から3年生までのバンドが、練習の成果をぶつけます！あの人気曲もやるかも…？一緒に盛り上がろう！', image: 'https://via.placeholder.com/800x400.png?text=Rock+Live' },
    { id: 'drama-play', name: '演劇部「告白」', place: '視聴覚室', time: '9:30 - 10:15', tags: ['2日目', '演劇'], description: '文化祭を舞台にした、甘酸っぱくも、ちょっぴり切ない青春劇。ハンカチのご用意を。', image: 'https://via.placeholder.com/800x400.png?text=Drama+Club' }
];

// data.js の一番下に追加
const memberData = [
    { 
        name: '(君の名前)', 
        role: 'プロジェクトリーダー / Terapad職人', 
        icon: 'https://via.placeholder.com/100x100.png?text=You' // ←君のアイコン画像
    },
    {
        name: 'Geminiくん',
        role: 'AIアシスタント / 壁打ち相手',
        icon: 'https://via.placeholder.com/100x100.png?text=AI'
    },
    // ... 他の部員のデータもここに追加 ...
    {
        name: '部員B',
        role: 'データ入力担当',
        icon: 'https://via.placeholder.com/100x100.png?text=B'
    },
    {
        name: '部員C',
        role: 'デバッグ・テスト担当',
        icon: 'https://via.placeholder.com/100x100.png?text=C'
    },
];
