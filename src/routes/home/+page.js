import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(307, '/'); // 307 preserves the method (good for temporary redirects)
}