// Функция, показывающая результат теста

function showTestRes(arr): void
{
    const res = [ 'представители категорий акватических (морских) или зелёных (ветиверовых) ароматов – свежие легкие ароматы идеальны для жаркой летней погоды. Особую свежесть и некоторую пикантность таким ароматам часто добавляют зеленые и цитрусовые ноты. Аккорд ветивера делает такие духи очень свежими, яркими, легкими – идеальными для жаркой погоды.',
                'фруктовые и цитрусовые ароматы, представляющие собой сочетание нот красных ягод и различных фруктов – зачастую с акцентами цветочных и пряных нот. Ориентальные аккорды делают фруктовые ароматы особенно привлекательными и запоминающимися. Цитрусовые же ароматы очень свежие и сочные благодаря нотам лимона, свежего горького апельсина, мандарина и бергамота.',
                'шипровые и древесные ароматы – одни из самых необычных и интересных категорий в парфюмерии. Шипровые ароматы – это своеобразное сочетание нот бергамота, дубового мха и лабданума, которое ложится в основу парфюмерной композиции и мужских, и женских ароматов. Древесные ароматы также характеризуются необычным аккордом – теплое сочетание нот сандала, пачули и мха. Как правило, основу композиции древесных ароматов составляют ноты пряностей, меда, дубового мха, кедра, ветивера и амбры.',
                'цветочные или ориентальные («восточные») ароматы – одна из самых старых и наиболее популярных категорий в парфюмерии, в нее входят ароматы как для женщин, так и для мужчин. Парфюмерная композиция ориентальных духов строится на теплых, пряных нотах амбры, мускуса, ванили. Ориентальные ароматы обычно интенсивные и глубокие. Цветочные же ароматы строятся на нотах жасмина, пиона, розы, гардении, дуберозы – иногда в сочетании с изысканными пудровыми акцентами.']
    const form = document.forms[0];
    form.style.display = 'none'; // Скрываем форму с вопросами
    const d = document.getElementById ('description') as HTMLElement;
    d.innerHTML = 'Вам подходят ';
    for ( let i = 0; i < arr.length; i++) // Выводим один или несколько результатов
    {
        if (i > 0)
            d.innerHTML += '<br><br>Помимо этого, Вам могут подойти '
        d.innerHTML += res[arr[i]];
    }
}

export
{
    showTestRes as default,
};