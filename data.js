// data.js (第一次調査 全データ反映版)

const projectData = [
    // === 1年生 ===
    {
        id: '1-2',
        name: '1年2組「赤字のカジノ〜ちょっぴり大人な休憩所〜」',
        catchphrase: 'カジノで一攫千金！？',
        tags: ['1年生', '展示', 'ゲーム'],
        // 以下、ダミーデータ (今後更新)
        place: '1-2教室', hours: '未定', ticket: 'なし', description: 'カジノをテーマにした休憩所です。', image: 'https://via.placeholder.com/800x400.png?text=1-2+Casino', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: '1-3',
        name: '1年3組「中村縁日〜射的でストレス発散〜」',
        catchphrase: '景品を狙って撃ちまくれ！',
        tags: ['1年生', 'ゲーム', '体験'],
        place: '1-3教室', hours: '未定', ticket: 'なし', description: '当てた景品の数によってお菓子が貰えます！！', image: 'https://via.placeholder.com/800x400.png?text=1-3+Ennichi', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: '1-4',
        name: '1年4組「あの子はどこ？次々といなくなる不可解な事件」',
        catchphrase: 'あなたはこの謎を解けるか。',
        tags: ['1年生', 'お化け屋敷', 'ホラー'],
        place: '1-4教室', hours: '未定', ticket: '未定', description: '西洋風のお化け屋敷です。', image: 'https://via.placeholder.com/800x400.png?text=1-4+OBAKE', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: '1-6',
        name: '1年6組「前園のハッピーライド」',
        catchphrase: '教室でコーヒーカップ！',
        tags: ['1年生', '展示', '体験', '写真映え'],
        place: '1-6教室', hours: '未定', ticket: '未定', description: 'コーヒーカップを作ります！', image: 'https://via.placeholder.com/800x400.png?text=1-6+Ride', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: '1-7',
        name: '1年7組「メイドインメンディー」',
        catchphrase: 'おかえりなさいませ、ご主人様！',
        tags: ['1年生', 'カフェ', '飲食'],
        place: '1-7教室', hours: '未定', ticket: '未定', description: 'メイドと執事の混合カフェです。', image: 'https://via.placeholder.com/800x400.png?text=1-7+Cafe', contentType: 'menu', menu: [], mapImage: ''
    },
    // === 2年生 ===
    {
        id: '2-2',
        name: '2年2組「ROUND2」',
        catchphrase: 'ストライクを目指せ！',
        tags: ['2年生', 'ゲーム', '体験'],
        place: '2-2教室', hours: '未定', ticket: 'なし', description: 'ダーツとボーリングが楽しめます。', image: 'https://via.placeholder.com/800x400.png?text=2-2+Game', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: '2-4',
        name: '2年4組「club 楓」',
        catchphrase: '最高のひとときを、あなたに。',
        tags: ['2年生', 'カフェ', '飲食', '販売'],
        place: '2-4教室', hours: '未定', ticket: 'なし', description: '飲み物やお菓子を販売。キャバクラ、ホスト風の接客でおもてなしします。', image: 'https://via.placeholder.com/800x400.png?text=2-4+Club', contentType: 'menu', menu: [], mapImage: ''
    },
    {
        id: '2-7',
        name: '2年7組「meltyメイド❤︎」',
        catchphrase: '萌え萌えキュン！',
        tags: ['2年生', 'カフェ', '飲食'],
        place: '2-7教室', hours: '未定', ticket: 'なし', description: 'スイーツやドリンクをメイド服を着て提供するカフェです。', image: 'https://via.placeholder.com/800x400.png?text=2-7+MaidCafe', contentType: 'menu', menu: [], mapImage: ''
    },
    // === 3年生 ===
    {
        id: '3-2',
        name: '3年2組「たこ焼き」',
        catchphrase: '熱々ふわとろ！',
        tags: ['3年生', '飲食'],
        place: '3-2教室', hours: '未定', ticket: 'なし', description: 'たこ焼きを作って販売します。', image: 'https://via.placeholder.com/800x400.png?text=3-2+Takoyaki', contentType: 'menu', menu: [], mapImage: ''
    },
    {
        id: '3-3',
        name: '3年3組「ケバブ」',
        catchphrase: 'ケバブ、いかがっすかー！',
        tags: ['3年生', '飲食'],
        place: '3-3教室', hours: '未定', ticket: 'なし', description: '本格ケバブを販売します。', image: 'https://via.placeholder.com/800x400.png?text=3-3+Kebab', contentType: 'menu', menu: [], mapImage: ''
    },
    // === 部活動・委員会など ===
    {
        id: 'manga-ken',
        name: '漫画研究部「The Future of Daybreak」',
        catchphrase: '黎明のその先へ。',
        tags: ['部活動・同好会', '展示', 'アート'],
        place: '未定', hours: '未定', ticket: 'なし', description: '漫画研究部のオリジナル漫画の展示です。', image: 'https://via.placeholder.com/800x400.png?text=Manga-ken', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: 'tosho-iinkai',
        name: '図書委員会「銀河鉄道の夜展」',
        catchphrase: 'ほんたうのさいはひは一体なんだらう。',
        tags: ['委員会', '展示', 'アート'],
        place: '図書室', hours: '未定', ticket: 'なし', description: '宮沢賢治「銀河鉄道の夜」をモチーフにした図書の展示です。', image: 'https://via.placeholder.com/800x400.png?text=GingaTetsudo', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: 'bungei-club',
        name: '文芸同好会「丸い鈴に隠された物語」',
        catchphrase: 'あなたはこの物語を知っている。',
        tags: ['部活動・同好会', '展示', 'ゲーム'],
        place: '未定', hours: '未定', ticket: 'なし', description: '物語のあらすじを頼りに作品名を当てるクイズです。景品有り！創作物の展示と配布もしております。', image: 'https://via.placeholder.com/800x400.png?text=Bungei', contentType: 'gallery', gallery: [], mapImage: ''
    },
    {
        id: 'home-making-club',
        name: 'ホームメイキング部「お菓子販売」',
        catchphrase: '手作りの温もりをあなたに。',
        tags: ['部活動・同好会', '飲食', '販売'],
        place: '未定', hours: '未定', ticket: 'なし', description: 'ホームメイキング部の部員でスコーンを作って販売します。', image: 'https://via.placeholder.com/800x400.png?text=Scone', contentType: 'menu', menu: [], mapImage: ''
    },
    {
        id: 'art-club-2', // art-clubがすでにあるので、IDをずらす
        name: '美術部「美術部展示」',
        catchphrase: '色彩の饗宴。',
        tags: ['部活動・同好会', '展示', 'アート'],
        place: '美術室', hours: '未定', ticket: 'なし', description: '美術部員が作成した作品の展示です。', image: 'https://via.placeholder.com/800x400.png?text=Art+Club+2', contentType: 'gallery', gallery: [], mapImage: ''
    }
];

const stageData = [
    { 
        id: 'aomi-number', 
        name: '〜あおみとnumber〜', 
        place: '体育館', 
        time: '未定', 
        tags: ['有志', 'ダンス', '1日目'],
        description: '見に来て損はない！最高のダンスパフォーマンスをお届けします。', 
        image: 'https://via.placeholder.com/800x400.png?text=Aomi+Number'
    },
    { 
        id: 'chorus-club', 
        name: 'コーラス部「ミニコンサート」', 
        place: '未定', 
        time: '未定', 
        tags: ['部活動・同好会', '音楽', '1日目'],
        description: 'ディズニーの名曲を2曲、美しいハーモニーでお届けします。', 
        image: 'https://via.placeholder.com/800x400.png?text=Chorus'
    },
    { 
        id: 'smash-bros', 
        name: 'ゲーム同好会「南陵スマブラ王決定戦」', 
        place: '未定', 
        time: '未定', 
        tags: ['部活動・同好会', 'ゲーム', 'ステージ発表'],
        description: '南陵の生徒、教師無差別で行うスマブラ大会。最強の栄冠は誰の手に！', 
        image: 'https://via.placeholder.com/800x400.png?text=Smash+Bros'
    },
    { 
        id: 'keion-club', 
        name: '軽音楽部「ROCK In The NANRYO」', 
        place: '体育館', 
        time: '未定', 
        tags: ['部活動・同好会', '音楽', 'ライブ'],
        description: '軽音楽部による熱いライブパフォーマンス！', 
        image: 'https://via.placeholder.com/800x400.png?text=Keion'
    }
];
