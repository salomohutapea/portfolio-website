<script>
    import { onMount } from "svelte"

    let year

    onMount(async () => {
        year = new Date().getFullYear()
    });
</script>
<style>
    footer {
        padding: 20px 0px;
        margin: 40px auto 0;
        position: fixed;
        bottom: 0;
        border-top: 1px solid var(--primaryColor);
        text-align: center;
        background-color: #121212;
        color: #EEE;
        width: 100%;
    }
    .copyright {
        color: #bbb;
        font-size: 0.8em;
    }
    a {
        text-decoration: none;
        font-weight: 600;
        transition: 300ms;
        color: #EEE;
    }
    a:hover {
        text-decoration: underline;
    }
    span {
        padding: 0 20px;
        display: block;
    }
</style>

<footer>
    <span class="copyright">© 2021 - {year} All rights reserved. – Created by <a href=".">Salomo Hutapea</a> using <a target="_blank" rel="noreferrer" href="https://sapper.svelte.dev/">Sapper</a></span>
</footer>