const queryString = new URLSearchParams(window.location.search);
const id = queryString.get('id');

let posts = [
    ["drone","Exploring the Latest in Drone Technology Innovations", "Discover the cutting-edge advancements in drone technology and how they are reshaping industries. We delve into the latest trends and innovations that are setting new standards."],
    ["home office", "Designing the Perfect Home Office for Maximum Productivity", "Get inspired by creative home office setups that boost productivity and enhance comfort. We explore tips and trends for designing a workspace that meets all your needs."],
    ["virtual reality controller", "The Future of VR: Innovations in Virtual Reality Controllers", "Explore the newest advancements in virtual reality controllers and their impact on immersive experiences. Learn how these innovations are transforming gaming and beyond."],
    ["person traveling", "Top Tips for Traveling Light and Efficiently", "Learn how to pack smart and travel efficiently with our expert tips. Discover techniques for minimizing baggage and maximizing your travel experience."],
    ["modern architecture", "Exploring the Beauty of Modern Architectural Designs", "Dive into the world of modern architecture and explore stunning designs that push the boundaries of traditional styles. See how architects are shaping the future of our cities."],
    ["vinyl record with player", "Reviving the Vinyl: A Look at the Resurgence of Record Players", "Uncover the reasons behind the vinyl record revival and how modern record players are enhancing the listening experience. Discover why vinyl is making a strong comeback."]
];

if (id){
    let postId = id-1;
    document.querySelector('.single-blog-post h1.post-title').textContent = posts[postId][1];
    document.querySelector('.single-blog-post .post-content p.lead').textContent = posts[postId][2];
    document.querySelector('.single-blog-post .post-featured-image img').src = `../img/feature-${id}.png`;
    document.querySelector('.single-blog-post .post-featured-image img').alt = posts[postId][0];
}

