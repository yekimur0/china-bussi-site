
export const listener = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('registry__changer-block')) changeWrapper(target);

        function changeWrapper(target) {
            let id = target.dataset.changer;
            
            const activeBlock = document.querySelector('.registry__block--active');
            const block = document.querySelector(`[data-registry="${id}"]`);
            let activeTarget = document.querySelector('.registry__changer-block--active');
            if (activeBlock) activeBlock.classList.remove('registry__block--active');
            block.classList.add('registry__block--active');

            if(activeTarget) activeTarget.classList.remove('registry__changer-block--active')
            target.classList.add('registry__changer-block--active')
        }
    })
}

listener();