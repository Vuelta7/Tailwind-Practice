<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-900">
    <div class="w-80 rounded bg-gray-800 p-3 shadow">
      <input
        class="mb-4 h-10 w-full rounded border-2 border-gray-600"
        readonly
      />
      <div class="grid grid-cols-4 gap-2">
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700" @click="">
          7
        </button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">8</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">9</button>
        <button class="rounded bg-red-800 py-2 hover:bg-red-900">C</button>

        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">4</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">5</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">6</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">+</button>

        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">1</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">2</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">3</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">-</button>

        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">/</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">0</button>
        <button class="rounded bg-gray-600 py-2 hover:bg-gray-700">*</button>
        <button class="rounded bg-green-800 py-2 hover:bg-green-900">=</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
